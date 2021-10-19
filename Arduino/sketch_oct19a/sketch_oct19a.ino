#include <Arduino.h>

#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>

#include <ArduinoJson.h>

#include <WebSocketsClient.h>
#include <SocketIOclient.h>
#include <Hash.h>
#include "DHT.h"        // including the library of DHT11 temperature and humidity sensor
#define DHTTYPE DHT11   // DHT 11
#define LED D0
ESP8266WiFiMulti WiFiMulti;
SocketIOclient socketIO;

const char* ssid = "ASUS ZENFONE";
const char* password = "siddharth1243";

#define dht_dpin 0
DHT dht(dht_dpin, DHTTYPE);

void socketIOEvent(socketIOmessageType_t type, uint8_t * payload, size_t length) {
    DynamicJsonDocument state(1024);
    DeserializationError error;
    String eventName;
    switch(type) {
        case sIOtype_DISCONNECT:
            Serial.printf("[IOc] Disconnected!\n");
            break;
        case sIOtype_CONNECT:
            Serial.printf("[IOc] Connected to url: %s\n", payload);
            // join default namespace (no auto join in Socket.IO V3)
            socketIO.send(sIOtype_CONNECT, "/");
            break;
        case sIOtype_EVENT:
        {
            Serial.printf("[IOc] get event: %s\n", payload);
            error = deserializeJson(state, payload, length);
            if(error) {
                Serial.print(F("deserializeJson() failed: "));
                Serial.println(error.c_str());
                return;
            }
            JsonArray array = state.as<JsonArray>();
            for(JsonVariant v:array)
            {
              Serial.println(v.as<String>());
            }
            if(array[0]=="Fan State")
            {
              if(array[1]==true){
                digitalWrite(LED,LOW);
              }
              else
              {
                digitalWrite(LED,HIGH);
              }
            }
            break;
        }
        case sIOtype_ACK:
            Serial.printf("[IOc] get ack: %u\n", length);
            hexdump(payload, length);
            break;
        case sIOtype_ERROR:
            Serial.printf("[IOc] get error: %u\n", length);
            hexdump(payload, length);
            break;
        case sIOtype_BINARY_EVENT:
            Serial.printf("[IOc] get binary: %u\n", length);
            hexdump(payload, length);
            break;
        case sIOtype_BINARY_ACK:
            Serial.printf("[IOc] get binary ack: %u\n", length);
            hexdump(payload, length);
            break;
    }
}

void setup() {
    Serial.begin(115200);
    pinMode(LED, OUTPUT);
    //Serial.setDebugOutput(true);
    Serial.setDebugOutput(true);

    Serial.println();
    Serial.println();
    Serial.println();

      for(uint8_t t = 4; t > 0; t--) {
          Serial.printf("[SETUP] BOOT WAIT %d...\n", t);
          Serial.flush();
          delay(1000);
      }

    // disable AP
    if(WiFi.getMode() & WIFI_AP) {
        WiFi.softAPdisconnect(true);
    }

    WiFiMulti.addAP(ssid,password);

    //WiFi.disconnect();
    while(WiFiMulti.run() != WL_CONNECTED) {
        delay(100);
    }

    String ip = WiFi.localIP().toString();
    Serial.printf("[SETUP] WiFi Connected %s\n", ip.c_str());

    // server address, port and URL
    socketIO.begin("192.168.43.120", 3000, "/socket.io/?EIO=4");

    // event handler
    socketIO.onEvent(socketIOEvent);
    dht.begin();
    digitalWrite(LED,HIGH);
}

unsigned long messageTimestamp = 0;
void loop() {
    socketIO.loop();

    uint64_t now = millis();

    if(now - messageTimestamp > 8000) {
        messageTimestamp = now;
        float h = dht.readHumidity();
        float t = dht.readTemperature(); 
        Serial.print("Current humidity = ");
        Serial.print(h);
        Serial.print("%  ");
        Serial.print("temperature = ");
        Serial.print(t); 
        Serial.println("C  ");
        if (WiFi.status() == WL_CONNECTED){
          // creat JSON message for Socket.IO (event)
          DynamicJsonDocument doc(1024);
          JsonArray array = doc.to<JsonArray>();
          array.add("Sensor");
          JsonObject param1 = array.createNestedObject();
          param1["temperature"] = t;
          param1["humidity"] = h;
          // JSON to String (serializion)
          String output;
          serializeJson(doc, output);
          // Send event
          socketIO.sendEVENT(output);
          // Print JSON for debugging
          Serial.println(output);
        }
    }
}
