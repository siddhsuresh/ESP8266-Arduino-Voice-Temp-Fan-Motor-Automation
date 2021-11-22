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
if ($("#switch").is(":checked")) {
  isBlowing = true;
}
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
  camera.position.y = 350;
  camera.position.x = -50;
  camera.position.z = 230;
  camera.lookAt(new THREE.Vector3(0, 0, 0));
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
