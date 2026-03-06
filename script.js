// ============================================================
//  RK WEB DEVELOPMENT — SCRIPT.JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  if (typeof SITE_CONFIG === 'undefined') {
    console.error('SITE_CONFIG not found. Ensure config.js loads before script.js.');
    return;
  }

  // ── BACKGROUND ────────────────────────────────────────────
  const bgContainer = document.getElementById('bg-media');
  const bg   = SITE_CONFIG.background || {};
  const type = bg.type || 'image';
  const src  = bg.src  || '';

  if (type === 'video') {
    const video = document.createElement('video');
    video.src = src; video.autoplay = true; video.muted = true;
    video.loop = true; video.playsInline = true;
    bgContainer.appendChild(video);
  } else if (src) {
    const img = document.createElement('img');
    img.src = src; img.alt = 'Background';
    bgContainer.appendChild(img);
  }

  // ── NAV ───────────────────────────────────────────────────
  const navbar    = document.getElementById('navbar');
  const navList   = document.getElementById('nav-links-list');
  const mobileNav = document.getElementById('mobile-nav');
  const hamburger = document.getElementById('hamburger');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  (SITE_CONFIG.nav.links || []).forEach((link, i) => {
    const links = SITE_CONFIG.nav.links;

    // Desktop
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.href = link.href; a.textContent = link.label;
    if (i === links.length - 1) a.classList.add('nav-cta');
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
    li.appendChild(a); navList.appendChild(li);

    // Mobile
    const ma = document.createElement('a');
    ma.href = link.href; ma.textContent = link.label;
    ma.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
    });
    mobileNav.appendChild(ma);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  const closeBtn = document.getElementById('mobile-nav-close');
  if (closeBtn) closeBtn.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });

  // ── HERO ──────────────────────────────────────────────────
  const h = SITE_CONFIG.hero;
  document.getElementById('hero-badge').textContent          = h.badge          || '';
  document.getElementById('hero-headline').textContent       = h.headline       || '';
  document.getElementById('hero-headline-accent').textContent= h.headlineAccent || '';
  document.getElementById('hero-sub').textContent            = h.subtext        || '';

  const pb = document.getElementById('hero-cta-primary');
  pb.textContent = h.ctaPrimary.label; pb.href = h.ctaPrimary.href;

  const sb = document.getElementById('hero-cta-secondary');
  sb.textContent = h.ctaSecondary.label; sb.href = h.ctaSecondary.href;

  const statsEl = document.getElementById('hero-stats');
  (h.stats || []).forEach(s => {
    const div = document.createElement('div');
    div.className = 'stat-item';
    div.innerHTML = `<div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>`;
    statsEl.appendChild(div);
  });

  // ── SERVICES ──────────────────────────────────────────────
  const servicesGrid = document.getElementById('services-grid');
  (SITE_CONFIG.services || []).forEach((svc, i) => {
    const card = document.createElement('div');
    card.className = 'service-card glass fade-in';
    card.style.animationDelay = (i * 0.1) + 's';
    const feats = (svc.features || []).map(f => `<span class="service-tag">${f}</span>`).join('');
    card.innerHTML = `
      <div class="service-icon-wrap"><i class="${svc.icon}"></i></div>
      <h3 class="service-title">${svc.title}</h3>
      <p class="service-desc">${svc.description}</p>
      <div class="service-features">${feats}</div>`;
    servicesGrid.appendChild(card);
  });

  // ── PORTFOLIO ─────────────────────────────────────────────
  const portfolioGrid = document.getElementById('portfolio-grid');
  (SITE_CONFIG.portfolio || []).forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    const bgStyle = proj.image
      ? `background:url('${proj.image}') center/cover no-repeat`
      : `background:${proj.gradient || '#111'}`;
    card.innerHTML = `
      <div class="project-bg" style="${bgStyle}"></div>
      <div class="project-overlay">
        <span class="project-tag">${proj.tag || ''}</span>
        <div class="project-category">${proj.category}</div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <a href="${proj.link}" class="project-link">View Project <i class="fa fa-arrow-right"></i></a>
      </div>`;
    portfolioGrid.appendChild(card);
  });

  // ── ABOUT ─────────────────────────────────────────────────
  const ab = SITE_CONFIG.about;
  document.getElementById('about-headline').textContent = ab.headline || '';
  document.getElementById('about-desc').textContent     = ab.bio      || '';

  const highlightsEl = document.getElementById('about-highlights');
  (ab.highlights || []).forEach(hl => {
    const div = document.createElement('div');
    div.className = 'highlight-item';
    div.innerHTML = `<i class="${hl.icon} hi-icon"></i><span>${hl.text}</span>`;
    highlightsEl.appendChild(div);
  });

  // ── CONTACT ───────────────────────────────────────────────
  const c = SITE_CONFIG.contact;
  document.getElementById('contact-headline').textContent    = c.headline || '';
  document.getElementById('contact-subheadline').textContent = c.subtext  || '';

  const emailEl = document.getElementById('contact-email');
  emailEl.textContent = c.email; emailEl.href = `mailto:${c.email}`;

  const phoneEl = document.getElementById('contact-phone');
  phoneEl.textContent = c.phone; phoneEl.href = `tel:${(c.phone||'').replace(/\D/g,'')}`;

  const bookingBtn = document.getElementById('booking-cta');
  bookingBtn.textContent = c.ctaLabel || 'Book a Call';
  bookingBtn.href = c.calendlyLink || '#';

  // Socials
  ['socials','footer-socials'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    (c.socials || []).forEach(s => {
      const a = document.createElement('a');
      a.className = 'social-btn'; a.href = s.href;
      a.title = s.platform; a.target = '_blank';
      a.innerHTML = `<i class="${s.icon}"></i>`;
      el.appendChild(a);
    });
  });

  // ── FORM ──────────────────────────────────────────────────
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fa fa-check"></i> Message Sent!';
      btn.style.background = '#2d8a4e';
      setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; contactForm.reset(); }, 3000);
    });
  }

  // ── INTERSECTION OBSERVER (fade-in) ───────────────────────
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  // Observe after a tiny delay so elements are in DOM
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    // Immediately trigger elements already in viewport
    document.querySelectorAll('.fade-in').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add('visible');
    });
  }, 50);

  // ── SMOOTH SCROLL ─────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

});


// Extra: populate years and booking btn text from config
document.addEventListener('DOMContentLoaded', () => {
  const yr = document.getElementById('about-years');
  if (yr && SITE_CONFIG.about) yr.textContent = SITE_CONFIG.about.yearsExp || '5+';
  const bk = document.getElementById('booking-cta');
  if (bk && SITE_CONFIG.contact) {
    bk.innerHTML = '<i class="fa fa-calendar"></i>&nbsp; ' + (SITE_CONFIG.contact.ctaLabel || 'Book a Call');
    bk.href = SITE_CONFIG.contact.calendlyLink || '#';
  }
});
