var scene,
  camera,
  controls,
  fieldOfView,
  aspectRatio,
  nearPlane,
  farPlane,
  shadowLight,
  backLight,
  light,
  renderer,
  planeAspectRatio,
  container;

//SCENE
var floor,
  fan,
  isBlowing = false;
//SCREEN VARIABLES
var HEIGHT,
  WIDTH,
  windowHalfX,
  windowHalfY,
  mousePos = { x: 0, y: 0 };
var dist = 0;

//INIT THREE JS, SCREEN AND MOUSE EVENTS

function init() {
  scene = new THREE.Scene();
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 100;
  nearPlane = 10;
  farPlane = 1000;
  planeAspectRatio = 16 / 9;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );
  fieldOfView = 50;
  camera.aspect = window.innerWidth / window.innerHeight;
  if (camera.aspect > planeAspectRatio) {
    // window too large
    const cameraHeight = Math.tan(THREE.MathUtils.degToRad(fieldOfView / 2));
    const ratio = camera.aspect / planeAspectRatio;
    const newCameraHeight = cameraHeight / ratio;
    camera.fov = THREE.MathUtils.radToDeg(Math.atan(newCameraHeight)) * 2;
  } else {
    // window too narrow
    camera.fov = fieldOfView;
  }
//Make the camera focus on the center of the scene
camera.position.y = 350;
camera.position.x = -50;
camera.position.z = 215;
camera.lookAt(new THREE.Vector3(0, 80, 60));
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMap.enabled = true;
  container = document.getElementById("world");
  container.appendChild(renderer.domElement);
  windowHalfX = WIDTH / 2;
  windowHalfY = HEIGHT / 2;
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;

  if (camera.aspect > planeAspectRatio) {
    // window too large
    const cameraHeight = Math.tan(THREE.MathUtils.degToRad(fieldOfView / 2));
    const ratio = camera.aspect / planeAspectRatio;
    const newCameraHeight = cameraHeight / ratio;
    camera.fieldOfView =
      THREE.MathUtils.radToDeg(Math.atan(newCameraHeight)) * 2;
  } else {
    // window too narrow
    camera.fieldOfView = fieldOfView;
  }
});

function createLights() {
  light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);

  shadowLight = new THREE.DirectionalLight(0xffffff, 0.8);
  shadowLight.position.set(200, 200, 200);
  shadowLight.castShadow = true;
  shadowLight.shadowDarkness = 0.2;

  backLight = new THREE.DirectionalLight(0xffffff, 0.4);
  backLight.position.set(-100, 200, 50);
  backLight.shadowDarkness = 0.1;
  backLight.castShadow = true;

  scene.add(backLight);
  scene.add(light);
  scene.add(shadowLight);
}

function createFan() {
  fan = new Fan();
  fan.threegroup.position.z = 100;
  fan.threegroup.position.y = 50;
  scene.add(fan.threegroup);
}

Fan = function () {
  this.isBlowing = false;
  this.speed = 0;
  this.acc = 0;
  this.redMat = new THREE.MeshLambertMaterial({
    color: 0xad3525,
    shading: THREE.FlatShading,
  });
  this.greyMat = new THREE.MeshLambertMaterial({
    color: 0x653f4c,
    shading: THREE.FlatShading,
  });

  this.yellowMat = new THREE.MeshLambertMaterial({
    color: 0xfdd276,
    shading: THREE.FlatShading,
  });

  var coreGeom = new THREE.BoxGeometry(10, 10, 20);
  var sphereGeom = new THREE.BoxGeometry(10, 10, 3);
  var propGeom = new THREE.BoxGeometry(10, 30, 2);
  propGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 25, 0));

  this.core = new THREE.Mesh(coreGeom, this.greyMat);

  // propellers
  var prop1 = new THREE.Mesh(propGeom, this.redMat);
  prop1.position.z = 15;
  var prop2 = prop1.clone();
  prop2.rotation.z = Math.PI / 2;
  var prop3 = prop1.clone();
  prop3.rotation.z = Math.PI;
  var prop4 = prop1.clone();
  prop4.rotation.z = -Math.PI / 2;

  this.sphere = new THREE.Mesh(sphereGeom, this.yellowMat);
  this.sphere.position.z = 15;

  this.propeller = new THREE.Group();
  this.propeller.add(prop1);
  this.propeller.add(prop2);
  this.propeller.add(prop3);
  this.propeller.add(prop4);

  this.threegroup = new THREE.Group();
  this.threegroup.add(this.core);
  this.threegroup.add(this.propeller);
  this.threegroup.add(this.sphere);
};

Fan.prototype.update = function (xTarget, yTarget) {
  this.threegroup.lookAt(new THREE.Vector3(0, 80, 60));
  this.tPosX = rule3(xTarget, -200, 200, -250, 250);
  this.tPosY = rule3(yTarget, -200, 200, 250, -250);

  this.threegroup.position.x += (this.tPosX - this.threegroup.position.x) / 10;
  this.threegroup.position.y += (this.tPosY - this.threegroup.position.y) / 10;

  this.targetSpeed = this.isBlowing ? 0.3 : 0.01;
  if (this.isBlowing && this.speed < 0.5) {
    this.acc += 0.001;
    this.speed += this.acc;
  } else if (!this.isBlowing) {
    this.acc = 0;
    this.speed *= 0.98;
  }
  this.propeller.rotation.z += this.speed;
};
function loop() {
  render();
  var xTarget = mousePos.x - windowHalfX;
  var yTarget = mousePos.y - windowHalfY;

  fan.isBlowing = isBlowing;
  fan.update(xTarget, yTarget);
  requestAnimationFrame(loop);
}

function render() {
  if (controls) controls.update();
  renderer.render(scene, camera);
}

init();
createLights();
createFan();
/*
 *Make the camera focus on the fan
*/

loop();

function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

function rule3(v, vmin, vmax, tmin, tmax) {
  var nv = Math.max(Math.min(v, vmax), vmin);
  var dv = vmax - vmin;
  var pc = (nv - vmin) / dv;
  var dt = tmax - tmin;
  var tv = tmin + pc * dt;
  return tv;
}

class RangeSlider {
	constructor(element, settings) {
		this.settings = Object.assign({
			clsCircular: 'c-rng--circular',
			clsCircularOutput: 'c-rng--circular-output',
			clsOutput: 'c-rng__output',
			clsOutputWrapper: 'c-rng--output',
			clsRangeTicks: 'c-rng--ticks',
			clsWrapper: 'c-rng__wrapper',
			offset: -90,
			varPercent: '--rng-percent',
			varPercentUpper: '--rng-percent-upper',
			varThumb: '--rng-thumb-w',
			varUnit: '--rng-unit',
			varValue: '--rng-value'
		}, stringToType(settings));

		this.range = element;
		this.initRange(this.range);
	}

	/**
	* @function initRange
	* @param {Node} range
	* @description Initialize: Create elements, add eventListeners etc.
	*/
	initRange(range) {
		const circular = this.settings.range.includes('circular');
		range.id = range.id || uuid();

		this.lower = this.settings.range.includes('upper') ? range.parentNode.querySelector(`[data-range*="lower"]`) : null;
		this.max = parseInt(range.max, 10) || 100;
		this.min = parseInt(range.min, 10);
		this.multiplier = 100 / (this.max - this.min);
		this.output = this.settings.range.includes('output') || circular ? document.createElement('output') : null;
		this.ticks = parseInt(range.dataset.ticks, 10);
		this.upper = this.settings.range.includes('lower') ? range.parentNode.querySelector(`[data-range*="upper"]`) : null;
		const isMulti = (this.lower || this.upper);
		this.wrapper = isMulti ? range.parentNode : document.createElement('div');

		/* output */
		if (this.output) {
			this.output.className = circular ? this.settings.clsCircularOutput : this.settings.clsOutput;
			this.output.for = range.id;

			if (isMulti) {
				this.wrapper.insertBefore(this.output, range);
			}
			else {
				this.wrapper.classList.add(circular ? this.settings.clsCircular : this.settings.clsOutputWrapper);
				this.wrapper.appendChild(this.output);
			}
		}

		/* wrapper */
		if (!isMulti) { 
			range.parentNode.insertBefore(this.wrapper, range);
			this.wrapper.appendChild(range);
		}
		if (range.dataset.modifier) {
			this.wrapper.classList.add(range.dataset.modifier)
		}

		this.wrapper.classList.add(this.settings.clsWrapper);
		this.wrapper.style.setProperty(this.settings.varThumb, getComputedStyle(range).getPropertyValue(this.settings.varThumb));

		/* ticks */
		if (this.ticks) {
			const ticks = [...Array(this.ticks).keys()];
			const svg = `
				<svg class="${this.settings.clsRangeTicks}" width="100%" height="100%">
				${ticks.map((index) => {
					return `<rect x="${(100 / this.ticks) * index}%" y="5" width="1" height="100%"></rect>`}).join('')
				}
				<rect x="100%" y="5" width="1" height="100%"></rect>
			</svg>`;
			this.wrapper.insertAdjacentHTML('afterbegin', svg);
		}

		/* circular */
		if (circular) {
			range.hidden = true;
			const pointerMove = (event) => { return this.updateCircle(this.rotate(event.pageX, event.pageY)) };
			this.setCenter();
			this.output.setAttribute('tabindex', 0);
			this.output.addEventListener('keydown', (event) => {
				switch(event.key) {
					case 'ArrowLeft': case 'ArrowDown': event.preventDefault(); this.range.stepDown(); this.updateCircle(); break;
					case 'ArrowRight': case 'ArrowUp': event.preventDefault(); this.range.stepUp(); this.updateCircle(); break;
					default: break;
				}
			});
			this.output.addEventListener('pointerdown', () => {return this.output.addEventListener('pointermove', pointerMove)});
			this.output.addEventListener('pointerup', () => {return this.output.removeEventListener('pointermove', pointerMove)});

			this.updateCircle();
		}
		else {
			range.addEventListener('input', () => {return this.updateRange()});
		}

		/* TODO: Send init event ? */
		range.dispatchEvent(new Event('input'));
	}

	/**
	* @function rotate
	* @param {Number} x
	* @param {Number} y
	* @description  Returns angle from center of circle to current mouse x and y
	*/
	rotate(x, y) {
		return Math.atan2(y - this.center.y, x - this.center.x) * 180 / Math.PI
	}

	/**
	* @function setCenter
	* @description Calculates center of circular range
	*/
	setCenter() {
		const rect = this.wrapper.getBoundingClientRect();
		this.center = {
			x: rect.left + rect.width / 2,
			y: rect.top + rect.height / 2
		}
	}
	getSpeed(){
		return this.range.value;
	}
	/**
	* @function updateCircle
	* @param {Number} start
	* @description  Updates CSS Custom Props/coniuc-gradient when circular-input is modified
	*/
	updateCircle(start) {
		let angle = start;
		let rad = 360 / (this.max - this.min);
		if (!angle) {angle = rad * this.range.valueAsNumber + this.settings.offset;}
		let end = angle - this.settings.offset;
		if (end < 0) {end = end + 360;}
		if (start) {this.range.value = Math.ceil(end / rad);}
		this.wrapper.dataset.value = this.range.value;
		document.getElementById('auto').checked = false;
		this.wrapper.style.setProperty('--angle', `${angle}deg`);
		this.wrapper.style.setProperty('--gradient-end', `${end}deg`);
	}

	/**
	* @function updateRange
	* @description Updates CSS Custom Props when range-input is modified
	*/
	updateRange() {
		if (this.lower) { /* Active is `upper` */
			if (this.lower.valueAsNumber > this.range.valueAsNumber) {
				this.range.value = this.lower.valueAsNumber;
				return;
			}
		}
		if (this.upper) { /* Active is `lower` */
			if (this.upper.valueAsNumber < this.range.valueAsNumber) {
				this.range.value = this.upper.valueAsNumber;
				return;
			}
		}

		const value = (this.range.valueAsNumber - this.min) * this.multiplier;
		this.range.style.setProperty(this.settings.varPercent, `${value}%`);
		this.range.style.setProperty(this.settings.varValue, `${this.range.valueAsNumber}`);
		
		if (this.lower) {
			this.lower.style.setProperty(this.settings.varPercentUpper, `${value}%`);
		}

		if (this.output) {
			this.output.style.setProperty(this.settings.varUnit, `${value}`);
			this.output.innerText = this.range.value;
		}
	}
}

/* Helper methods */
function stringToType(obj) {
	const object = Object.assign({}, obj);
	Object.keys(object).forEach(key => {
		if (typeof object[key] === 'string' && object[key].charAt(0) === ':') {
			object[key] = JSON.parse(object[key].slice(1));
		}
	});
	return object;
}

function uuid() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
		{return (
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16)}
	);
}

const element = document.querySelector('[data-range]');
var rslider = new RangeSlider(element, element.dataset);

const control = document.getElementById('control');
document.getElementById('checkcross').addEventListener('click', function(event) {
  if(!document.getElementById('checkcross').checked) {  
  isBlowing=false;
  } else {
    isBlowing=true;
  }
});

const control1 = document.getElementById('control1');

document.getElementById('updateManual').addEventListener('click', function(event) {
	console.log(rslider.getSpeed());
});

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent =
  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var commands = ["Start", "Stop","Increase","Decrease","Change Mode"];
var grammar =
  "#JSGF V1.0; grammar commands; public <command> = " +
  commands.join(" | ") +
  " ;";

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

commands.forEach(function (v, i, a) {
  console.log(v, i);
});

var com="";
commands.forEach(function (v, i, a) {
  com +=(i+1)+") "+v+" ";
});
let voicestatus = 0;
document.getElementById('mic').onclick = function () {
  if (voicestatus == 1) {
    voicestatus = 0;
    return recognition.stop();
  }
  voicestatus = 1;
  recognition.start();
  document.getElementById("modal-info").textContent =
    "Ready to Receive a Command...";
  document.getElementById("modal-commands").textContent = com;
  console.log("Ready to receive a Command.");
};

recognition.onresult = function (event) {
  voicestatus=0;
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var command = event.results[0][0].transcript;
  command = command.toLowerCase();
  console.log("Command Recived: " + command);
  document.getElementById("modal-info").textContent =
    "Command Recieved " + command;
  if (command === "start" && !$("#checkcross").is(":checked")) {
    $("#checkcross").trigger("click");
    var start = new SpeechSynthesisUtterance();
    start.text = "Fan Started";
    window.speechSynthesis.speak(start);
  } 
  else if(command === "start" && $("#checkcross").is(":checked")){
    var start = new SpeechSynthesisUtterance();
    start.text = "Fan Already Started";
    window.speechSynthesis.speak(start);
  }
  else if (command === "stop" && $("#checkcross").is(":checked")) {
    $("#checkcross").trigger("click");
    var stop = new SpeechSynthesisUtterance();
    stop.text = "Fan Stopped";
    window.speechSynthesis.speak(stop);
  }
  else if(command === "stop" && !$("#checkcross").is(":checked")){
    var stop = new SpeechSynthesisUtterance();
    stop.text = "Fan Already Stopped";
    window.speechSynthesis.speak(stop);
  }
  else if (command === "increase" && $("#checkcross").is(":checked")) {
	$("#auto").checked = false;
	rslider.range.stepUp(); 
	rslider.updateCircle();
    var increase = new SpeechSynthesisUtterance();
    increase.text = "Fan Speed Increased to "+rslider.getSpeed()+"%";
    window.speechSynthesis.speak(increase);
	$('#updateManual').trigger('click');
  }
  else if(command === "increase" && !$("#checkcross").is(":checked")){
    var increase = new SpeechSynthesisUtterance();
    increase.text = "Start the Fan to Increase the Speed";
    window.speechSynthesis.speak(increase);
  }
  else if (command === "decrease" && $("#checkcross").is(":checked")) {
	$("#auto").checked = false;
	rslider.range.stepDown(); 
	rslider.updateCircle();
  var decrease = new SpeechSynthesisUtterance();
    decrease.text = "Fan Speed Decreased to "+rslider.getSpeed()+"%";
    window.speechSynthesis.speak(decrease);
	$('#updateManual').trigger('click');
  }
  else if(command === "decrease" && !$("#checkcross").is(":checked")){
    var decrease = new SpeechSynthesisUtterance();
    decrease.text = "Start the Fan to Decrease the Speed";
    window.speechSynthesis.speak(decrease);
  }
  else if(command === "change mode")
  {
    $("#auto").trigger("click");
    if($("#auto").is(":checked"))
    {
      var mode = new SpeechSynthesisUtterance();
      mode.text = "Fan Mode is Automatic.";
      window.speechSynthesis.speak(mode);
    }
    else
    {
      var mode = new SpeechSynthesisUtterance();
      var textspeed = rslider.getSpeed();
      mode.text = "Fan Mode is Manual. Speed of the Fan is Now "+textspeed+"%";
      window.speechSynthesis.speak(mode);
    }
  }
  console.log("Confidence: " + event.results[0][0].confidence);
  recognition.stop();
};

recognition.onspeechend = function () {
  voicestatus = 0;
  recognition.stop();
};
  
  recognition.onnomatch = function (event) {
	console.log("I didn't recognise that command.");
  };
  
  recognition.onerror = function (event) {
	console.log("Error occurred in recognition: " + event.error);
  };