# ArduinoVoiceTempControlled
## CSE2006 J Component Review 02
### Team 21 - Siddharth Suresh & Penta Revanth

### Hardware Used
* NodeMCU ESP8266 MicroController
* DHT11 Temperature and Humidity Sensor

### Technologies Used
* Sqlite Database
* Using ExpressJS & NodeJS For the Server
* Socket.IO For Implementation of WebSocket Protocol
* Arduino Framework To Interface with the ESP8266 MicroController
* TailwindCSS for the Design of the Website
* Cloudflared Quick Tunnels to provide Connection between the Internet and the Local Server

### Instructions To Run The Project

```
git clone <this-branch> .
```
```
cd <directory-name>
```
```
npm install
```

### To Run the Server Locally
```
npm run start
```

### When Changing the CSS in the HTML Files
```
npm run dev
```

### Run Before Pushing Changes To Minify Tailwindcss
```
npm run build
```

### To Run using Cloudflare Tunnels 
```
npm run serve
```

### File Structure
* Server Logic is present in **index.js** file in the root directory
* Database Conectivity and Logic is present in the **database.js** file in the root directory
* The Arduino Code That Controls the Logic For the ESP8266 MicroController is present as **sketch_oct19a.ino** file
* Static files [css/javascript/images/videos] are present in their respective public folders and is represented using the static url path in the server
* index.html contains the source code for the landing page of the project
* fan.html is the main project page and contains the Socket.IO connection, threeJS Fan Simulation and Temperature and Humidity Display
