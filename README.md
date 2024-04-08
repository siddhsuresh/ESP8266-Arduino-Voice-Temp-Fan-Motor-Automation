# ArduinoVoiceTempControlled
[Finished Version Deployed In Heroku](https://cse2006-team21.herokuapp.com/)
## CSE2006 J Component Final Review

![project](https://user-images.githubusercontent.com/83594610/196259571-8f3a4da7-60aa-4d9f-a246-8993566130e2.png)

### Hardware Used
* NodeMCU ESP8266 MicroController
* DHT11 Temperature and Humidity Sensor

### Technologies Used
* Sqlite Database
* Using ExpressJS & NodeJS For the Server
* Socket.IO For Implementation of WebSocket Protocol
* Arduino Framework To Interface with the ESP8266 MicroController
* TailwindCSS for the Design of the Website
* Reveal.JS for the Presentation
* Parcel Web Bundler

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
npm run server
```

### When Changing the CSS in the HTML Files
```
npm run tailwind-dev
```
### When Making Changes To The Src Files for Hot Re-Loading
```
npm run parcel-dev
```

### Optimise and Build the Source Code
```
npm run tailwind-build
```
```
npm run parcel-build
```

### To Run using Cloudflare Tunnels [Not Used Anymore]
```
npm run serve
```

### File Structure
* Server Logic is present in **index.js** file in the root directory
* Database Conectivity and Logic is present in the **database.js** file in the root directory
* The Arduino Code That Controls the Logic For the ESP8266 MicroController is present as **sketch_oct19a.ino** file

### Source Code in the [src Directory](https://github.com/siddhsuresh/ArduinoVoiceTempControlled/tree/main/src)
* Static files [css/javascript/images/videos] are present in their respective public folders and is represented using the static url path in the server
* index.html contains the source code for the landing page of the project
* project.html is the main project page and contains the Socket.IO connection, threeJS Fan Simulation and Temperature and Humidity Display
* home.html is the introductory page for the project and contains the circuit diagram and pictures of the physical connection
* slides.html is the presentation page made using reveal.js 

### Production Ready Assets in [dist Directory](https://github.com/siddhsuresh/ArduinoVoiceTempControlled/tree/main/dist)
The dist directory is created by parcel web packer that contains the minified and compressed versions of the assests in the src directory 
