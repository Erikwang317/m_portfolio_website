import './style.css'
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const m_scene = new THREE.Scene();

var view = 75;
var m_aspect = window.innerWidth / window.innerHeight;
var nearPlane = 0.1; 
var farPlane = 1000; 
const m_camera = new THREE.PerspectiveCamera(view, m_aspect, nearPlane, farPlane);

const m_renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

m_renderer.setPixelRatio(window.devicePixelRatio);
m_renderer.setSize(window.innerWidth, window.innerHeight);

m_camera.position.setZ(30);
m_renderer.render(m_scene, m_camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({color: 0xff6347});
const torus = new THREE.Mesh(geometry, material);
m_scene.add(torus);

//Lights
const ambientLight = new THREE.AmbientLight(0x000000);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(3, 3, 3);

const directionaltLight = new THREE.DirectionalLight(0xff4857);
m_scene.add(pointLight,ambientLight,directionaltLight);


//Helpers
const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
m_scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(m_camera, m_renderer.domElement);



function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  m_scene.add(star);
}

Array(200).fill().forEach(addStar);

// Background
const spaceTexture = new THREE.TextureLoader().load('/resources/space.jpg');
m_scene.background = spaceTexture;

// Avatar

const avatarTexture = new THREE.TextureLoader().load('/resources/r.png');

const avatar = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: avatarTexture }));

m_scene.add(avatar);

avatar.position.z = -5;
avatar.position.x = 2;

// Moon

const moonTexture = new THREE.TextureLoader().load('/resources/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('/resources/normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

const marsTexture = new THREE.TextureLoader().load('/resources/marsTexture.png');
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: marsTexture,
    normalMap: normalTexture,
  })
);

m_scene.add(moon);
m_scene.add(mars);

moon.position.z = 30;
moon.position.setX(-10);

mars.position.z = 10;
mars.position.setX(10);



function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  avatar.rotation.y += 0.01;
  avatar.rotation.z += 0.01;

  m_camera.position.z = t * -0.01;
  m_camera.position.x = t * -0.0002;
  m_camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
//moveCamera();

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  moon.rotation.x += 0.005;
  mars.rotation.x += 0.05;

  controls.update();

  m_renderer.render(m_scene, m_camera);
}

animate();

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
