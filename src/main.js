import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const app = document.querySelector('#app');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

gsap.defaults({ ease: 'power3.out' });
ScrollTrigger.config({ ignoreMobileResize: true });

const stats = [
  ['120g', 'PESO ULTRALIGERO'],
  ['3D', 'TEJIDO TRANSPIRABLE'],
  ['EVA', 'SUELA REACTIVA'],
];

const chapters = [
  {
    code: '01',
    kicker: 'Amortiguación que desafía la gravedad.',
    title: 'El innovador sistema de entresuela absorbe el impacto de cada pisada y lo transforma en un impulso hacia adelante, reduciendo la fatiga incluso en las distancias más largas.',
    body: '',
  },
  {
    code: '02',
    kicker: 'Tejido adaptativo, ajuste perfecto y ventilación.',
    title: 'El upper está construido con una malla técnica 3D de una sola pieza que envuelve el pie como un calcetín.',
    body: 'Ofreciendo soporte dinámico exactamente donde lo necesitas sin sacrificar la transpirabilidad.',
  },
  {
    code: '03',
    kicker: 'Modo lanzamiento',
    title: 'Datos ficticios, pero una estructura real de lanzamiento.',
    body: 'Drop limitado, unidades inventadas, métricas y módulos listos para reemplazarse por contenido real cuando tengas la campaña final.',
  },
];

app.innerHTML = `
  <div class="noise"></div>
  <a class="skip-link" href="#experience">Saltar al contenido</a>
  <nav class="mao-nav" aria-label="Navegación principal">
    <a class="wordmark magnetic" href="#top" aria-label="Inicio">EJE.RUN</a>
    <div class="nav-links">
      <a class="magnetic" href="#experience"><span>/</span> Experiencia</a>
      <a class="magnetic" href="#motion"><span>/</span> Movimiento</a>
      <a class="magnetic" href="#drop"><span>/</span> Lanzamiento</a>
      <a class="magnetic" href="#contact"><span>/</span> Contacto</a>
    </div>
  </nav>

  <div class="stage-wrap" aria-label="Zapatilla 3D interactiva">
    <canvas id="shoeCanvas"></canvas>
  </div>

  <div class="stage-hud hud-top">
    <span>MODELO_07</span>
    <strong>ARRASTRA / SCROLL</strong>
  </div>
  <div class="stage-hud hud-bottom">
    <span id="chapterLabel">CAPITULO_00</span>
    <strong>THREE.JS</strong>
  </div>
  
  <div class="color-picker">
    <button class="color-btn active" data-color="midnight" style="background-color: #0d84c6;" aria-label="Color Azul"></button>
    <button class="color-btn" data-color="beach" style="background-color: #e3d5c8;" aria-label="Color Beige"></button>
    <button class="color-btn" data-color="street" style="background-color: #1a1a1a;" aria-label="Color Negro"></button>
  </div>

  <main id="top">
    <section class="hero-section panel-section" id="hero">
      <div class="giant-em" aria-hidden="true">AR</div>
      <div class="hero-grid">
        <div class="hero-intro">
          <p class="line-label">RENDIMIENTO SUPERIOR</p>
          <h1>Axis Runner, ingeniería de precisión, aerodinámica y confort absoluto.</h1>
          <p class="rotating-line">
            Diseñadas para <span class="word-rotator" aria-live="polite">correr más rápido</span>
          </p>
        </div>

        <div class="empty-col"></div>

        <div class="hero-meta">
          ${stats.map(([value, label]) => `<div class="stat"><strong data-count="${value}">${value}</strong><span>${label}</span></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="statement-section chapter" id="statement">
      <div class="statement-content">
        <p class="split-copy">Pura energía.</p>
        <div class="statement-lines">
          <p>No es solo una zapatilla deportiva,</p>
          <p><strong>es una extensión de tu propio movimiento.</strong></p>
        </div>
      </div>
    </section>

    <section class="sticky-story" id="motion">
      <div class="sticky-inner">
        <div class="chapter-rail">
          ${chapters.map((chapter, index) => `
            <article class="chapter" data-chapter="${index}">
              <span>${chapter.code}</span>
              <p>${chapter.kicker}</p>
              <h2>${chapter.title}</h2>
              <small>${chapter.body}</small>
            </article>
          `).join('')}
        </div>
        <div class="motion-card">
          <span class="line-label">MATERIALES PREMIUM</span>
          <p>El upper está construido con una malla técnica 3D de una sola pieza que envuelve el pie como un calcetín, ofreciendo soporte dinámico exactamente donde lo necesitas sin sacrificar la transpirabilidad.</p>
        </div>
      </div>
    </section>

    <section class="drop-section panel-section" id="drop">
      <div class="drop-copy">
        <span class="line-label">LANZAMIENTO FICTICIO LIMITADO</span>
        <h2>Axis Runner 01</h2>
        <p>Una zapatilla conceptual para velocidad urbana, diseñada con datos ficticios para llenar la landing mientras se define el contenido real.</p>
      </div>
      <div class="drop-grid">
        <article><span>Peso</span><strong>248g</strong><p>Corte superior ligero con malla técnica experimental.</p></article>
        <article><span>Drop</span><strong>09.27</strong><p>Fecha ficticia para una edición limitada.</p></article>
        <article><span>Energía</span><strong>91%</strong><p>Retorno de impulso simulado para la narrativa.</p></article>
        <article><span>Unidades</span><strong>1,200</strong><p>Inventario de campaña para crear urgencia visual.</p></article>
      </div>
    </section>

    <section class="final-section panel-section" id="contact">
      <div class="profile-card">
        <h2>Axis Runner</h2>
        <p>Landing interactiva de zapatillas · Modelo 3D · Identidad guiada por scroll</p>
        <div class="cta-row">
          <a href="#top">PROYECTOS_</a>
          <a href="#drop">DROP_</a>
        </div>
        <span class="line-label">TECNOLOGÍAS DEL SITIO</span>
        <div class="social-row">
          <a href="https://threejs.org/" target="_blank">Three.js</a>
          <a href="https://gsap.com/" target="_blank">GSAP</a>
          <a href="https://lenis.studiofreight.com/" target="_blank">Lenis</a>
          <a href="https://vitejs.dev/" target="_blank">Vite</a>
        </div>
      </div>
      <footer class="site-footer">
        <span>Tecnologías: Vanilla JS, Three.js, GSAP & Lenis. | © 2026 Axis Runner.</span>
        <a href="https://github.com/tu-usuario/axis-runner-3d" target="_blank" class="github-link" aria-label="Ver código en GitHub">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          Código Fuente
        </a>
      </footer>
    </section>
  </main>
`;

const words = ['correr más rápido', 'romper tus límites', 'conquistar la ciudad', 'vencer la gravedad'];
let wordIndex = 0;
const wordTimer = window.setInterval(() => {
  const target = document.querySelector('.word-rotator');
  if (!target) return;
  wordIndex = (wordIndex + 1) % words.length;
  gsap.to(target, {
    y: -12,
    opacity: 0,
    duration: 0.22,
    ease: 'power2.in',
    onComplete: () => {
      target.textContent = words[wordIndex];
      gsap.fromTo(target, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.32, ease: 'power2.out' });
    },
  });
}, 1900);

function mountScene() {
  const canvas = document.querySelector('#shoeCanvas');
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x070707, 7, 16);

  const camera = new THREE.PerspectiveCamera(27, 1, 0.1, 100);
  camera.position.set(0, 0.4, 4.2);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;

  const group = new THREE.Group();
  group.position.set(0, 0, 0); // Start shoe in the exact center
  scene.add(group);

  scene.add(new THREE.AmbientLight(0x2b2b2b, 2.4));
  const key = new THREE.DirectionalLight(0xffffff, 4.8);
  key.position.set(2.8, 4.6, 4.2);
  scene.add(key);
  const red = new THREE.PointLight(0xff3d00, 22, 24);
  red.position.set(-2.8, 0.2, 2.6);
  scene.add(red);
  const violet = new THREE.PointLight(0x7b61ff, 16, 24);
  violet.position.set(2.6, -0.2, -2.6);
  scene.add(violet);
  const rim = new THREE.DirectionalLight(0xffffff, 2.2);
  rim.position.set(-3, 3, -4);
  scene.add(rim);

  let shoe;
  const mouse = new THREE.Vector2(0, 0);
  const clock = new THREE.Clock();

  const textureLoader = new THREE.TextureLoader();
  const textures = {
    midnight: textureLoader.load('/models/shoe/diffuseMidnight.jpg'),
    beach: textureLoader.load('/models/shoe/diffuseBeach.jpg'),
    street: textureLoader.load('/models/shoe/diffuseStreet.jpg'),
  };
  Object.values(textures).forEach(t => {
    t.colorSpace = THREE.SRGBColorSpace;
    t.flipY = false;
  });

  const loader = new GLTFLoader();
  loader.load('/models/shoe/MaterialsVariantsShoe.gltf', (gltf) => {
    shoe = gltf.scene;
    shoe.scale.setScalar(5.05);
    shoe.position.set(0.04, -0.12, 0);
    shoe.rotation.set(0.08, -0.8, -0.03);
    shoe.traverse((obj) => {
      if (obj.isMesh && obj.material) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        obj.material.roughness = Math.min(obj.material.roughness ?? 0.5, 0.72);
        obj.material.metalness = Math.max(obj.material.metalness ?? 0, 0.03);
        obj.material.envMapIntensity = 1.45;
      }
    });
    group.add(shoe);
    gsap.fromTo(group.scale, { x: 0.55, y: 0.55, z: 0.55 }, { x: 1, y: 1, z: 1, duration: 1.4, ease: 'expo.out' });
  }, undefined, (err) => console.error('GLTF load error:', err));

  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const color = e.target.dataset.color;
      if (shoe) {
        shoe.traverse((obj) => {
          if (obj.isMesh && obj.material && obj.material.map) {
            obj.material.map = textures[color];
            obj.material.needsUpdate = true;
          }
        });
      }
    });
  });

  const resize = () => {
    const rect = canvas.parentElement.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  };

  const onMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', onMove);
  resize();

  // Rotación continua y fluida vinculada al scroll de toda la página
  // Al ser una sola animación global, evitamos los saltos y conflictos (bugs)
  // que ocurrían al tener múltiples triggers sobre las mismas propiedades.
  gsap.to(group.rotation, {
    y: Math.PI * 3, // Da 1.5 vueltas completas a lo largo de toda la página
    ease: 'none',
    scrollTrigger: {
      trigger: 'main',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.5 // Suaviza el movimiento al hacer scroll
    }
  });

  // Efecto sutil de respiración/escala en el punto medio de la página
  gsap.to(group.scale, {
    x: 0.9, y: 0.9, z: 0.9,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: 1,
    scrollTrigger: {
      trigger: 'main',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 2
    }
  });

  const tick = () => {
    const elapsed = clock.getElapsedTime();
    if (shoe) {
      shoe.rotation.y += prefersReducedMotion ? 0 : 0.0022;
      shoe.position.y = -0.12 + Math.sin(elapsed * 1.2) * 0.055;
    }
    group.rotation.x += ((mouse.y * 0.1) - group.rotation.x) * 0.025;
    group.rotation.z += ((mouse.x * -0.08) - group.rotation.z) * 0.025;
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  };
  tick();
}

function setupAnimations() {
  if (prefersReducedMotion) {
    document.querySelectorAll('.chapter, .drop-grid article').forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; });
    return;
  }
  gsap.from('.mao-nav', { y: -40, opacity: 0, duration: 1, ease: 'power3.out' });
  gsap.from('.giant-em', { opacity: 0, scale: 0.92, duration: 1.4, ease: 'power3.out' });
  gsap.from('.hero-intro > *', { y: 42, opacity: 0, duration: 1.1, stagger: 0.12, ease: 'power3.out', delay: 0.2 });
  gsap.from('.hero-meta .stat', { y: 28, opacity: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out', delay: 0.5 });

  gsap.to('.giant-em', {
    yPercent: -24,
    opacity: 0.12,
    ease: 'none',
    scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: true },
  });

  gsap.fromTo('.split-copy', { letterSpacing: '-0.14em', opacity: 0.08 }, {
    letterSpacing: '-0.045em',
    opacity: 1,
    scrollTrigger: { trigger: '.statement-section', start: 'top 75%', end: 'center 35%', scrub: true },
  });

  document.querySelectorAll('.chapter').forEach((chapter, index) => {
    gsap.fromTo(chapter, { opacity: 0.18, y: 80 }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: chapter,
        start: 'top 78%',
        end: 'center 38%',
        scrub: true,
        onEnter: () => updateChapter(index),
        onEnterBack: () => updateChapter(index),
      },
    });
  });

  gsap.from('.drop-grid article', {
    y: 60,
    opacity: 0,
    stagger: 0.08,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.drop-section', start: 'top 65%' },
  });

  gsap.fromTo('.motion-card', { y: 48, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 0.9,
    scrollTrigger: { trigger: '.sticky-story', start: 'top 58%' },
  });

  gsap.fromTo('.profile-card', { y: 70, opacity: 0, scale: 0.96 }, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 1,
    scrollTrigger: { trigger: '.final-section', start: 'top 68%' },
  });
}

function updateChapter(index) {
  const label = document.querySelector('#chapterLabel');
  if (label) label.textContent = `CAPITULO_${String(index + 1).padStart(2, '0')}`;
}


function setupSmoothScroll() {
  if (prefersReducedMotion || window.innerWidth < 768) return;

  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      const destination = id === '#top' ? document.body : document.querySelector(id);
      if (!destination) return;
      event.preventDefault();
      lenis.scrollTo(destination);
    });
  });
}

function setupMagneticLinks() {
  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.16;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.16;
      gsap.to(el, { x, y, duration: 0.28, ease: 'power2.out' });
    });
    el.addEventListener('pointerleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.38, ease: 'elastic.out(1, 0.45)' }));
  });
}

mountScene();
setupSmoothScroll();
setupAnimations();
setupMagneticLinks();
