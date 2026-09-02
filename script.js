document.documentElement.classList.add('js');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.08
  });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}

// Close the native mobile menu after choosing an in-page destination.
document.querySelectorAll('.mobile-menu a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const details = link.closest('details');
    if (details) details.open = false;
  });
});

/*
 * Real Elsken photography
 * -----------------------
 * These images are from Corner's Elsken place listing, which labels them
 * "photo via Google Maps". They show the real business, but public listing
 * availability is not proof of a commercial reuse licence. See IMAGE_RIGHTS.md.
 *
 * The SVG placeholders remain the no-JS/static fallback.
 */
const elskenPhotos = [
  'https://cdn.corner.inc/place-photo/AWn5SU5LLQc_n8c54yxzO5bMxW8gQ22KfMAPeRUUsFHCNAmzMCJPDIQjRiyd4_-xXaH7emtRtaxClRJFWEdNP4KytJiAYqke-Zxx18uHYzXN18UF3LJOI9I0NZRZcl0xBxCOw82sFKQ-Xn8NX-HhCQhK7eFSbBTnji5OL3D_uUTalskN-jo4udxYJz-flSJMST8ZvndE3AqqXsmLUhOeImRqfkR2clpKTLweh9jvF1kUAJ4DOT8w7ouHeBFrfLwWqWlli0nimZDQv0llYw9TEgvMoHSGOosCeUYeDUhO2OBDepYGesF7vQGb_SMtnOJwmn5HbzA-vdc0Jn8Z0H4vFXpJBP2IRQx-3tM4jVUXK_vfgqR62wLZg8RwPr5UDI-G-7W-G5Tt4-rpekNl4KAyCitZ3RHmwwyE46srQinduxq0ycrzUy5s.jpeg',
  'https://cdn.corner.inc/place-photo/AWn5SU7vPoFmHDgtsQVjys8nlsiF_eyxpEc_ydWanYoKd1Ei_wUhvnEd9lPdM70ouGbJ7iJkN8cqFhcGdtDECPkGe-0FNutQDapcHDftuMcr5vxLFQFi62dQUbQWSM6M4YGjL7vrUbvkyGULpfLGBIj3Iyw9v1Nf8jeEKiFS3ZIMTR531RVMyr9Hdo1rquZSQkEtr-228y7mFQYdqI729J_zFfwH-Jo24XVyCNGLnhvdJN2ExcGTMwZpABUzyTV6x2dvymBu9mGxMne4_U2jdJONFOFfAGi4BFIZsjw5qWKbdG92jw.jpeg',
  'https://cdn.corner.inc/place-photo/AWn5SU6fiPuYzILhXTq41ALvkxFw3dAfsQHdABqKJV7xArWcqNbfK9U2IIY7A8NfOqhY1MKh_jLvQnM2KQegxjQkg-nNnCMNNscD-uPYYy1JijueCMr0N5pG_FX7KZgBYr7aZaPp-yDFkfj8S1x-fzjTqbiBYqBUN7hURup_vLoLZzcyuJ79Kj3s8NfGFQDbhhRVyZLBv9tVpQVwhoFfzAQs6tMiS9pa7l6TIvR-XgCuyhHet0WIWfZBdlY_ql8a4h8drI2aH2lPdOVimtBNZ8zKnAdzrXEJsG315N6ke0Al8t2-GiKci25GrpTECBfkLD5J81dpyUgrQPULS8RTHUPAr3eXmFKb_WQJcyDsRRij8ytejHdm9Eego1FhcS0n70DU-7zWDYDpnvfQGXf6BBEmkayNQolT5xQradrpwFWahJeDfiAx.jpeg',
  'https://cdn.corner.inc/place-photo/AWn5SU7qJIxUbj7NlmYhWuQElMWkxm3UjqW0gzE-UgrlxikRbYCksQBZnio0CVKeZ5nNij3Uh0ANPJCBGD_WGg6ZaIxRv8OdQnH1A8BnaA2US9UkHO_QDmS-pnGIeKuVv5rjISiW_niV8upnOvYRMdCye8glqxxdEokQTkG2WzJY1NsnDvnywJMbO_2MO2mVREnNoShYiBlglF0B9iQugy54oYMaAVWIZswc-FR1YoCtWF6mMt0_q5U8QYUM7TTARoW1ED1XqYjCTKBv_eVt0gOji9gMKP1Y19FdysRjlBVqf89pvQ.jpeg',
  'https://cdn.corner.inc/place-photo/AWn5SU4aAc_ccaShbQpDUNjhlwKjUY4uCaFnSYts37iQnkxtPg8tjq7e5mE_A90zyfkIva2Acqjwie1R7AZRdXsclfg72Y81FdDJivr7ENbdKFGI9-o_nUE9SzrAGV1dvS2wxx-kymxWfll8UPWnX5Np9pd6QRUUeCkaWKZUWp5RyYLgZoW3U6XHgluEKKHlXMFqBZ7zo9mkB6H-6HRwZg-oT5trTKbGErrTUQZcCHR3t0Dcd9TaOX5z-NIrECukS5c0QG2Iwpu1e4wdzLPMdAxbtIWBS-Fi914fFsfR5ivKm73CLg.jpeg'
];

const photoSlots = [
  ['.photo-card-main img', 0, 'Café Elsken in Berlin-Neukölln'],
  ['.photo-card-small img', 1, 'Ein echter Einblick in Café Elsken'],
  ['.photo-card-wide img', 2, 'Innenraum und Atmosphäre bei Elsken'],
  ['.photo-card-tall img', 3, 'Café Elsken am Kiehlufer']
];

photoSlots.forEach(([selector, photoIndex, alt]) => {
  const img = document.querySelector(selector);
  if (!img) return;
  const originalSrc = img.getAttribute('src');
  img.referrerPolicy = 'no-referrer';
  img.decoding = 'async';
  img.alt = alt;
  img.addEventListener('error', () => {
    if (originalSrc) img.src = originalSrc;
  }, { once: true });
  img.src = elskenPhotos[photoIndex];
});

const heroBadge = document.querySelector('.demo-badge');
if (heroBadge) {
  heroBadge.textContent = 'Real Elsken photos';
  heroBadge.classList.add('real-photo-badge');
}

const prototypeNote = document.querySelector('.prototype-note');
if (prototypeNote) {
  prototypeNote.innerHTML = '<strong>Foto-Hinweis:</strong> Aktuell werden echte Elsken-Fotos aus einer öffentlichen Google-Maps-basierten Listing-Quelle angezeigt. Für den kommerziellen Launch sollten owner-freigegebene Originaldateien eingesetzt werden. <a href="IMAGE_RIGHTS.md">Quellen & Rechte</a>.';
}

// Use the fifth real photo as a quiet photographic layer in the final CTA.
const finalCtaArt = document.querySelector('.final-cta-art');
if (finalCtaArt) {
  finalCtaArt.style.setProperty('--elsken-photo', `url("${elskenPhotos[4]}")`);
  finalCtaArt.classList.add('has-real-photo');
}

// Styling for the progressive real-photo and WebGL enhancements.
const enhancementStyles = document.createElement('style');
enhancementStyles.textContent = `
  .hero-visual { isolation: isolate; }
  .hero-visual .photo-card { z-index: 2; }
  .real-photo-badge { background: var(--teal); }
  .elsken-canal-canvas {
    position: absolute;
    inset: -8% -18% -6% -18%;
    width: 136%;
    height: 114%;
    z-index: 0;
    opacity: .42;
    pointer-events: none;
  }
  .final-cta-art.has-real-photo::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(90deg, rgba(244,239,229,.94), rgba(244,239,229,.52)), var(--elsken-photo);
    background-size: cover;
    background-position: center;
    filter: saturate(.82) contrast(.96);
  }
  .final-cta-art.has-real-photo .sun,
  .final-cta-art.has-real-photo .canal-line { z-index: 2; }
  @media (max-width: 760px) {
    .elsken-canal-canvas { inset: -4% -10%; width: 120%; height: 108%; opacity: .28; }
    .final-cta-art.has-real-photo::before {
      background-image: linear-gradient(rgba(244,239,229,.78), rgba(244,239,229,.78)), var(--elsken-photo);
    }
  }
`;
document.head.appendChild(enhancementStyles);

async function initCanalScene() {
  if (reducedMotion) return;

  const host = document.querySelector('.hero-visual');
  if (!host || !('WebGLRenderingContext' in window)) return;

  let THREE;
  try {
    THREE = await import('https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js');
  } catch (error) {
    console.info('Elsken: Three.js enhancement unavailable; static site remains fully usable.', error);
    return;
  }

  const canvas = document.createElement('canvas');
  canvas.className = 'elsken-canal-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  host.prepend(canvas);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  } catch (error) {
    canvas.remove();
    return;
  }

  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1.5, 1.5, 1.25, -1.25, 0.1, 10);
  camera.position.z = 2;

  const waves = [];
  const palette = [0x276366, 0x276366, 0xc8543f];

  for (let lineIndex = 0; lineIndex < 3; lineIndex += 1) {
    const count = 72;
    const positions = new Float32Array(count * 3);
    const baseY = -0.48 + lineIndex * 0.44;

    for (let i = 0; i < count; i += 1) {
      const t = i / (count - 1);
      positions[i * 3] = -1.65 + t * 3.3;
      positions[i * 3 + 1] = baseY;
      positions[i * 3 + 2] = 0;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.LineBasicMaterial({
      color: palette[lineIndex],
      transparent: true,
      opacity: lineIndex === 2 ? 0.18 : 0.28
    });
    const line = new THREE.Line(geometry, material);
    scene.add(line);
    waves.push({ line, baseY, phase: lineIndex * 1.7, speed: 0.42 + lineIndex * 0.08 });
  }

  let active = true;
  let rafId = null;
  const clock = new THREE.Clock();

  function resize() {
    const rect = host.getBoundingClientRect();
    renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
  }

  function render() {
    if (!active || document.hidden) {
      rafId = null;
      return;
    }

    const time = clock.getElapsedTime();
    waves.forEach(({ line, baseY, phase, speed }, lineIndex) => {
      const positions = line.geometry.attributes.position.array;
      const count = positions.length / 3;
      for (let i = 0; i < count; i += 1) {
        const x = positions[i * 3];
        positions[i * 3 + 1] = baseY
          + Math.sin((x * 2.8) + (time * speed) + phase) * (0.055 + lineIndex * 0.008)
          + Math.sin((x * 5.2) - (time * 0.22)) * 0.012;
      }
      line.geometry.attributes.position.needsUpdate = true;
    });

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(render);
  }

  const visibilityObserver = new IntersectionObserver(([entry]) => {
    active = entry.isIntersecting;
    if (active && !rafId) {
      clock.getDelta();
      rafId = requestAnimationFrame(render);
    }
  }, { threshold: 0.03 });

  visibilityObserver.observe(host);
  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && active && !rafId) rafId = requestAnimationFrame(render);
  });

  resize();
  render();
}

initCanalScene();
