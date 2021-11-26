// Motor A connections
int enA = 2;
int in1 = 4;
int in2 = 5;
int LED = 15; // Assign LED pin i.e: D1 on NodeMCU
void setup() {
	// Set all the motor control pins to outputs
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
	pinMode(enA, OUTPUT);
	pinMode(in1, OUTPUT);
	pinMode(in2, OUTPUT);
  Serial.setDebugOutput(true);
	
	// Turn off motors - Initial state
	digitalWrite(in1, LOW);
	digitalWrite(in2, LOW);
}

void loop() {
  Serial.println("Direction Control:");
	directionControl();
	delay(1000);
  Serial.println("Speed Control: ");
	speedControl();
	delay(1000);
}

// This function lets you control spinning direction of motors
void directionControl() {
	// Set motors to maximum speed
	// For PWM maximum possible values are 0 to 255
	analogWrite(enA, 255);
  Serial.println("Turning On Motor A ");  
  digitalWrite(LED, HIGH);
	// Turn on motor A & B
	digitalWrite(in1, HIGH);
	digitalWrite(in2, LOW);
	delay(2000);
	Serial.println("Changing Motor Directions: ");
	// Now change motor directions
	digitalWrite(in1, LOW);
	digitalWrite(in2, HIGH);
	delay(2000);
	Serial.println("Turing OFF Motors");
  digitalWrite(LED, LOW);
	// Turn off motors
	digitalWrite(in1, LOW);
	digitalWrite(in2, LOW);
}

// This function lets you control speed of the motors
void speedControl() {
	// Turn on motors
	digitalWrite(in1, LOW);
	digitalWrite(in2, HIGH);
	Serial.println("Accelerating From 0 to 256 Speed");
	// Accelerate from zero to maximum speed
	for (int i = 0; i < 256; i++) {
		analogWrite(enA, i);
    Serial.println(i);
		delay(20);
	}
	Serial.println("De-accerlating From 256-0 Speed");
	// Decelerate from maximum speed to zero
	for (int i = 255; i >= 0; --i) {
		analogWrite(enA, i);
    Serial.println(i);
		delay(20);
	}
	Serial.println("Stopping Motors");
	// Now turn off motors
	digitalWrite(in1, LOW);
	digitalWrite(in2, LOW);
}