// ============================================================
//  RK WEB DEVELOPMENT — SITE CONFIGURATION
//  Edit this file to update all content safely
// ============================================================

const SITE_CONFIG = {

  site: { name: "RK Web Development", logo: "logo.png" },

  background: {
    type: "image",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
  },

  nav: {
    links: [
      { label: "Home",      href: "#home" },
      { label: "Services",  href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "About",     href: "#about" },
      { label: "Contact",   href: "#contact" }
    ]
  },

  hero: {
    badge:          "Available for New Projects",
    headline:       "I Build Websites That",
    headlineAccent: "Convert & Impress",
    subtext:        "RK Web Development crafts high-performance websites and digital experiences that elevate brands and drive real business results.",
    ctaPrimary:     { label: "Book a Call", href: "#contact" },
    ctaSecondary:   { label: "View My Work",            href: "#portfolio" },
    stats: [
      { value: "2", label: "Projects Delivered" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "5\u2605",  label: "Average Rating" }
    ]
  },

  services: [
    { icon: "fa fa-code",       title: "Website Development",   description: "Custom-built websites from scratch using modern technologies. Pixel-perfect, fast, and scalable.",                              features: ["React / Next.js", "WordPress", "E-Commerce"] },
    { icon: "fa fa-paint-brush",title: "Website Redesign",      description: "Transform your outdated site into a modern, high-converting digital asset that stands out.",                                   features: ["UI/UX Overhaul", "Brand Refresh", "Performance Boost"] },
    { icon: "fa fa-rocket",     title: "Landing Page Creation", description: "Laser-focused landing pages engineered to convert visitors into leads and paying customers.",                                  features: ["CRO Optimized", "A/B Test Ready", "Fast Load Times"] },
    { icon: "fa fa-tachometer", title: "Website Optimization",  description: "Speed, SEO, and UX audits that boost your site performance and search engine rankings.",                                       features: ["SEO Optimization", "Core Web Vitals", "Security Hardening"] }
  ],

  portfolio: [
    { title: "Tajonera Events and Services \u2013 A Signature by RDT",  category: "Lights and Sound System",    tag: "Website",     description: "Tajonera Events and Services is a premium event management brand dedicated to transforming visions into extraordinary moments. Every occasion, a masterpiece.",                image: "tajonera.png", gradient: "linear-gradient(135deg,#1a1a2e,#0f3460)", link: "https://reymancasio5-bit.github.io/tajonera-events-services/" },
    { title: "FlornHub", category: "CCTV Installation",     tag: "Website",  description: "A professional CCTV installation service offering end-to-end security systems, remote monitoring, and expert setup for homes and businesses of all sizes.",       image: "FlornHub.png", gradient: "linear-gradient(135deg,#2d1b00,#8b4513)", link: "https://reymancasio5-bit.github.io/FlornHub/#" },
  ],

  about: {
    headline:   "Passionate About Web Excellence",
    bio:        "RK Web Development is a boutique web studio dedicated to crafting exceptional digital experiences. We combine technical expertise with creative design thinking to build websites that not only look stunning but perform at the highest level.",
    yearsExp:   "1+",
    highlights: [
      { icon: "fa fa-lightbulb-o", text: "1+ Years of Experience" },
      { icon: "fa fa-globe",       text: "Clients Across Countries" },
      { icon: "fa fa-trophy",      text: "Stunning Designs" },
      { icon: "fa fa-shield",      text: "100% Satisfaction Guarantee" }
    ]
  },

  contact: {
    headline:     "Ready to Start Your Project?",
    subtext:      "Let's discuss your vision and build something extraordinary together.",
    email:        "reymancasio.5@gmail.com",
    phone:        "+639638291756",
    calendlyLink: "https://calendly.com/reymancasio-5/30min",
    ctaLabel:     "Book a Call",
    socials: [
      { platform: "LinkedIn",  href: "https://www.linkedin.com/in/reyman-casio-112ba83aa?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: "fa fa-linkedin"  },
      { platform: "Facebook",   href: "https://web.facebook.com/reyman.casio.5", icon: "fa fa-facebook"   },
      { platform: "GitHub",    href: "https://github.com/reymancasio5-bit", icon: "fa fa-github"    },
      { platform: "Instagram", href: "https://www.instagram.com/kim_arkeey?igsh=MWdqdHhzZXp5MHVwaw==", icon: "fa fa-instagram" }
    ]
  }

};
