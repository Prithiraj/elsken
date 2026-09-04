document.documentElement.classList.add('js');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const header = document.querySelector('[data-header]');

/* Reveal content progressively, but never hide it when the API is unavailable. */
if (!reducedMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -7% 0px', threshold: 0.07 });

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}

/* Header state. */
function updateHeader() {
  if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

/* Close the native mobile menu after selecting an in-page link. */
document.querySelectorAll('.mobile-menu a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const details = link.closest('details');
    if (details) details.open = false;
  });
});

/* If a public listing image disappears, retain a complete static design. */
function attachFallback(image, fallback) {
  if (!image) return;
  image.addEventListener('error', () => {
    if (image.dataset.fallbackApplied) return;
    image.dataset.fallbackApplied = 'true';
    image.src = fallback;
  });
}

const fallbackImages = new Map([
  ['.photo-card-main img', 'assets/exterior-placeholder.svg'],
  ['.photo-card-small img', 'assets/food-placeholder.svg'],
  ['.photo-card-wide img', 'assets/interior-placeholder.svg'],
  ['.photo-card-tall img', 'assets/kiez-placeholder.svg']
]);

fallbackImages.forEach((fallback, selector) => attachFallback(document.querySelector(selector), fallback));

document.querySelectorAll('.gallery-frame img').forEach((image, index) => {
  const options = ['assets/exterior-placeholder.svg', 'assets/food-placeholder.svg', 'assets/interior-placeholder.svg', 'assets/kiez-placeholder.svg'];
  attachFallback(image, options[index % options.length]);
});
attachFallback(document.querySelector('.final-photo img'), 'assets/exterior-placeholder.svg');

/* Subtle depth on the real hero photographs. */
const depthHost = document.querySelector('[data-depth-host]');
if (depthHost && !reducedMotion && window.matchMedia('(pointer:fine)').matches) {
  const cards = [...depthHost.querySelectorAll('[data-depth]')];
  let frame = null;
  let targetX = 0;
  let targetY = 0;

  const applyDepth = () => {
    cards.forEach((card) => {
      const depth = Number(card.dataset.depth || 1);
      card.style.setProperty('--card-x', `${targetX * depth}px`);
      card.style.setProperty('--card-y', `${targetY * depth}px`);
    });
    frame = null;
  };

  depthHost.addEventListener('pointermove', (event) => {
    const rect = depthHost.getBoundingClientRect();
    targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 9;
    targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 7;
    if (!frame) frame = requestAnimationFrame(applyDepth);
  }, { passive: true });

  depthHost.addEventListener('pointerleave', () => {
    targetX = 0;
    targetY = 0;
    if (!frame) frame = requestAnimationFrame(applyDepth);
  });
}

/* One scroll loop updates all non-essential section motion. */
const parallaxPhotos = [...document.querySelectorAll('[data-scroll-depth]')];
const menuRipple = document.querySelector('.menu-ripple');
const kiezSection = document.querySelector('.kiez-section');
const kiezOrbits = document.querySelector('.kiez-orbits');
const finalCta = document.querySelector('.final-cta');
const finalReflection = document.querySelector('.final-reflection');
let scrollFrame = null;

function normalizedSectionProgress(element) {
  if (!element) return 0;
  const rect = element.getBoundingClientRect();
  const viewport = window.innerHeight || 1;
  return Math.max(-1, Math.min(1, (viewport * 0.5 - (rect.top + rect.height * 0.5)) / viewport));
}

function updateSectionMotion() {
  if (reducedMotion) return;

  parallaxPhotos.forEach((figure) => {
    const rect = figure.getBoundingClientRect();
    const viewport = window.innerHeight || 1;
    const centerDelta = (viewport * 0.5) - (rect.top + rect.height * 0.5);
    const depth = Number(figure.dataset.scrollDepth || 0);
    const shift = Math.max(-18, Math.min(18, centerDelta * depth * 0.12));
    const image = figure.querySelector('img');
    if (image) image.style.setProperty('--parallax-y', `${shift}px`);
  });

  if (menuRipple) {
    const menu = menuRipple.closest('.menu-section');
    menuRipple.style.setProperty('--menu-shift', `${normalizedSectionProgress(menu) * 34}px`);
  }

  if (kiezSection && kiezOrbits) {
    const progress = normalizedSectionProgress(kiezSection);
    kiezOrbits.style.setProperty('--orbit-x', `${progress * 18}px`);
    kiezOrbits.style.setProperty('--orbit-y', `${progress * -24}px`);
  }

  if (finalCta && finalReflection) {
    const progress = normalizedSectionProgress(finalCta);
    finalReflection.style.setProperty('--reflection-y', `${progress * 22}px`);
  }

  scrollFrame = null;
}

if (!reducedMotion) {
  window.addEventListener('scroll', () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateSectionMotion);
  }, { passive: true });
  window.addEventListener('resize', () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateSectionMotion);
  }, { passive: true });
  updateSectionMotion();
}

/*
 * Three.js: one small shader-driven canal-light layer in the hero.
 * It is decorative only. No content, navigation or CTA depends on WebGL.
 */
async function initCanalLight() {
  if (reducedMotion) return;

  const canvas = document.querySelector('#canal-canvas');
  const hero = document.querySelector('.hero');
  const host = document.querySelector('.hero-canal');
  if (!canvas || !hero || !host || !('WebGLRenderingContext' in window)) return;

  let THREE;
  try {
    THREE = await import('https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js');
  } catch (error) {
    console.info('Elsken: WebGL enhancement unavailable; static canal treatment remains.', error);
    return;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
  } catch (error) {
    return;
  }

  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.4));

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
  camera.position.z = 1;

  const uniforms = {
    uTime: { value: 0 },
    uPointer: { value: new THREE.Vector2(0, 0) },
    uScroll: { value: 0 },
    uAspect: { value: 1 }
  };

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    depthTest: false,
    uniforms,
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      precision mediump float;
      varying vec2 vUv;
      uniform float uTime;
      uniform vec2 uPointer;
      uniform float uScroll;
      uniform float uAspect;

      float ribbon(float y, float center, float width) {
        float d = abs(y - center);
        return 1.0 - smoothstep(0.0, width, d);
      }

      void main() {
        vec2 uv = vUv;
        float x = (uv.x - 0.5) * mix(1.0, uAspect, 0.25);
        float drift = uTime * 0.10;

        float w1 = sin(x * 10.0 + drift * 3.2) * 0.030 + sin(x * 23.0 - drift) * 0.008;
        float w2 = sin(x * 8.0 - drift * 2.3 + 1.8) * 0.038 + sin(x * 18.0 + drift) * 0.009;
        float w3 = sin(x * 12.5 + drift * 1.7 + 4.0) * 0.022;

        float y1 = 0.35 + w1 + uPointer.y * 0.016 + uScroll * 0.018;
        float y2 = 0.55 + w2 - uPointer.x * 0.012 - uScroll * 0.012;
        float y3 = 0.70 + w3 + uPointer.y * 0.008;

        float a1 = ribbon(uv.y, y1, 0.012);
        float a2 = ribbon(uv.y, y2, 0.009);
        float a3 = ribbon(uv.y, y3, 0.006);
        float glow = ribbon(uv.y, y1, 0.050) * 0.09 + ribbon(uv.y, y2, 0.044) * 0.07;

        vec3 teal = vec3(0.153, 0.388, 0.400);
        vec3 tomato = vec3(0.784, 0.329, 0.247);
        vec3 warm = vec3(0.722, 0.537, 0.380);

        vec3 color = teal * (a1 + glow) + warm * a2 + tomato * a3;
        float alpha = clamp(a1 * 0.46 + a2 * 0.28 + a3 * 0.22 + glow, 0.0, 0.48);
        alpha *= smoothstep(0.02, 0.18, uv.x) * (1.0 - smoothstep(0.76, 0.98, uv.x));

        gl_FragColor = vec4(color, alpha);
      }
    `
  });

  const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  scene.add(plane);

  let active = true;
  let rafId = null;
  let lastTime = performance.now();
  let pointerX = 0;
  let pointerY = 0;
  let smoothX = 0;
  let smoothY = 0;

  function resize() {
    const rect = host.getBoundingClientRect();
    renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
    uniforms.uAspect.value = rect.width / Math.max(1, rect.height);
  }

  function updateScrollUniform() {
    const rect = hero.getBoundingClientRect();
    uniforms.uScroll.value = Math.max(-1, Math.min(1, -rect.top / Math.max(1, rect.height)));
  }

  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  }, { passive: true });

  hero.addEventListener('pointerleave', () => {
    pointerX = 0;
    pointerY = 0;
  });

  window.addEventListener('scroll', updateScrollUniform, { passive: true });

  function render(now) {
    if (!active || document.hidden) {
      rafId = null;
      return;
    }

    const delta = Math.min(40, now - lastTime);
    lastTime = now;
    uniforms.uTime.value += delta / 1000;
    smoothX += (pointerX - smoothX) * 0.035;
    smoothY += (pointerY - smoothY) * 0.035;
    uniforms.uPointer.value.set(smoothX, smoothY);

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(render);
  }

  const visibilityObserver = new IntersectionObserver(([entry]) => {
    active = entry.isIntersecting;
    if (active && !rafId && !document.hidden) {
      lastTime = performance.now();
      rafId = requestAnimationFrame(render);
    }
  }, { threshold: 0.02 });

  visibilityObserver.observe(hero);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && active && !rafId) {
      lastTime = performance.now();
      rafId = requestAnimationFrame(render);
    }
  });

  window.addEventListener('resize', resize, { passive: true });
  resize();
  updateScrollUniform();
  document.documentElement.classList.add('webgl-ready');
  rafId = requestAnimationFrame(render);
}

initCanalLight();
