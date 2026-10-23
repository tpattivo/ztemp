const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Building WordPress Homepage according to Greenlight-Vibe workflow...');

// 1. Read files
let html = fs.readFileSync('index.html', 'utf8');
let css = fs.readFileSync('css/style.css', 'utf8');
let js = fs.readFileSync('js/main.js', 'utf8');

// 2. Image mapping
const imageMap = {
  'assets/images/gsv_dtech_logo_clean.png': 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/gsv_dtech_logo_clean-1.png',
  'assets/images/hero_dashboard_mockup.png': 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/hero_dashboard_mockup.png',
  'assets/images/partner_hospitals_strip.png': 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/partner_hospitals_strip.png',
  'assets/images/ui_customer_modal.png': 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/ui_customer_modal.png',
  'assets/images/real_ui_overview.png': 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/real_ui_overview.png',
  'assets/images/ui_exam_prescription.png': 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/ui_exam_prescription.png',
  'assets/images/ui_billing_sales.png': 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/ui_billing_sales.png',
  'assets/images/ui_revenue_chart.png': 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/ui_revenue_chart.png'
};

for (const [localPath, remoteUrl] of Object.entries(imageMap)) {
  html = html.split(localPath).join(remoteUrl);
  js = js.split(localPath).join(remoteUrl);
}

// 3. Strict design quality compliance
// A. Replace unicode checkmarks with SVG checkmark icons (Rule: No emoji in headings, buttons, badges or as list bullets and feature icons)
const svgCheck = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
html = html.replace(/<span class="check-icon">✓<\/span>/g, `<span class="check-icon">${svgCheck}</span>`);
html = html.replace(/<div class="benefit-icon">✓<\/div>/g, `<div class="benefit-icon">${svgCheck}</div>`);
html = html.replace(/<span style="color: var\(--color-primary\); font-weight: 700;">✓<\/span>/g, `<span style="color: var(--color-primary); display: inline-flex; align-items: center;">${svgCheck}</span>`);

// B. Typography: Replace Inter font with Be Vietnam Pro everywhere (Rule: Do not default to the Inter font)
css = css.replace(/@import url\('https:\/\/fonts\.googleapis\.com\/css2\?family=Be\+Vietnam\+Pro:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap'\);/g,
  `@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap');`);
css = css.replace(/--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;/g,
  `--font-body: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, sans-serif;`);

// C. Remove glassmorphism backdrop-filter (Rule: No glassmorphism cards, no neon glow borders or shadows)
css = css.replace(/backdrop-filter:\s*blur\([^)]+\);?/g, '');
css = css.replace(/-webkit-backdrop-filter:\s*blur\([^)]+\);?/g, '');

// D. Header scrolled state: clean solid white
css = css.replace(/\.site-header\.scrolled\s*\{[^}]+\}/g,
  `.site-header.scrolled {
  background-color: #ffffff;
  box-shadow: 0 4px 16px rgba(16, 24, 40, 0.08);
  border-bottom: 1px solid var(--color-border);
}`);

// E. Hero background: clean deep forest green, no gradient glow or orbs
css = css.replace(/background:\s*radial-gradient\([^;]+var\(--color-forest-dark\)\s*100%\);/g,
  `background-color: var(--color-forest);`);

// F. Ensure elements are not hidden by default (Rule: Never depend on a script for visibility)
css = css.replace(/\.fade-in-up\s*\{[\s\S]*?opacity:\s*0;[\s\S]*?transform:\s*translateY\(28px\);[\s\S]*?\}/g,
  `.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}`);

// G. Ensure theme resets for full width and hiding Blocksy theme header, footer, and page title
const layoutResets = `
/* Blocksy Theme Resets & Page Title suppression */
header#header, footer#footer, .ct-header, .ct-footer,
.entry-header, .page-header, [data-hero-type], .site-main > .entry-header,
.site-main > .hero-section[data-type],
div.hero-section[data-type],
.is-width-constrained.hero-section,
.hero-section[data-type="type-1"] {
  display: none !important;
}
.site-main {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  max-width: 100% !important;
  margin: 0 !important;
}
.entry-content {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}
.ct-container, .ct-container-fluid {
  max-width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
article.type-page {
  margin-bottom: 0 !important;
}

/* GreenShift Standard Section Architecture */
.wp-section {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-right: var(--wp--spacing--side, min(3vw, 20px));
  padding-left: var(--wp--spacing--side, min(3vw, 20px));
  padding-top: var(--wp--spacing--top, 0px);
  padding-bottom: var(--wp--spacing--bottom, 0px);
  margin-top: 0px;
  margin-bottom: 0px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
}
.wp-content-wrap {
  max-width: 100%;
  width: var(--wp--style--global--wide-size, 1200px);
  box-sizing: border-box;
}
.wp-content-wrap.container-wide {
  width: var(--container-wide, 1320px);
}

/* Strict Mobile Drawer Isolation */
.mobile-drawer,
.mobile-drawer-overlay {
  display: none !important;
}
.mobile-menu-btn {
  display: none;
}

@media (max-width: 1024px) {
  .mobile-drawer {
    display: flex !important;
    position: fixed !important;
    top: 0 !important;
    right: -360px !important;
    width: 300px !important;
    max-width: 85vw !important;
    height: 100vh !important;
    z-index: 99999 !important;
    box-sizing: border-box !important;
    transition: right 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
    box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15) !important;
  }
  .mobile-drawer.open {
    right: 0 !important;
  }
  .mobile-drawer-overlay {
    display: none !important;
    position: fixed !important;
    inset: 0 !important;
    background: rgba(0, 0, 0, 0.5) !important;
    z-index: 99998 !important;
  }
  .mobile-drawer-overlay.active {
    display: block !important;
  }
  .mobile-menu-btn {
    display: block !important;
  }
}
`;

css += '\n' + layoutResets;

// 4. Update index.html section tags to include wp-section alignfull
// Wrap each section with wp-section alignfull and inner container with wp-content-wrap
html = html.replace(/<header class="site-header" id="siteHeader">/g,
  `<header class="site-header wp-section alignfull" id="siteHeader" data-type="section-component">`);
html = html.replace(/<div class="container-wide header-container">/g,
  `<div class="container-wide header-container wp-content-wrap" data-type="content-area-component">`);

html = html.replace(/<section class="hero-section" id="hero">/g,
  `<section class="hero-section wp-section alignfull" id="hero" data-type="section-component">`);
html = html.replace(/<section class="hero-section" id="hero">\s*<div class="container-wide">/g,
  `<section class="hero-section wp-section alignfull" id="hero" data-type="section-component"><div class="container-wide wp-content-wrap" data-type="content-area-component">`);

html = html.replace(/<section class="partner-section" aria-label="Đối tác y tế">\s*<div class="container-wide partner-container">/g,
  `<section class="partner-section wp-section alignfull" aria-label="Đối tác y tế" data-type="section-component"><div class="container-wide partner-container wp-content-wrap" data-type="content-area-component">`);

html = html.replace(/<section class="pain-points-section">\s*<div class="container">/g,
  `<section class="pain-points-section wp-section alignfull" data-type="section-component"><div class="container wp-content-wrap" data-type="content-area-component">`);

html = html.replace(/<section class="workflow-section" id="quy-trinh">\s*<div class="container">/g,
  `<section class="workflow-section wp-section alignfull" id="quy-trinh" data-type="section-component"><div class="container wp-content-wrap" data-type="content-area-component">`);

html = html.replace(/<section class="features-section">\s*<div class="container">/g,
  `<section class="features-section wp-section alignfull" data-type="section-component"><div class="container wp-content-wrap" data-type="content-area-component">`);

html = html.replace(/<section class="real-ui-section" id="giao-dien-that">\s*<div class="container-wide">/g,
  `<section class="real-ui-section wp-section alignfull" id="giao-dien-that" data-type="section-component"><div class="container-wide wp-content-wrap" data-type="content-area-component">`);

html = html.replace(/<section class="why-section">\s*<div class="container">/g,
  `<section class="why-section wp-section alignfull" data-type="section-component"><div class="container wp-content-wrap" data-type="content-area-component">`);

html = html.replace(/<section class="testimonials-section" id="khach-hang">\s*<div class="container">/g,
  `<section class="testimonials-section wp-section alignfull" id="khach-hang" data-type="section-component"><div class="container wp-content-wrap" data-type="content-area-component">`);

html = html.replace(/<section class="pricing-section" id="bang-gia">\s*<div class="container">/g,
  `<section class="pricing-section wp-section alignfull" id="bang-gia" data-type="section-component"><div class="container wp-content-wrap" data-type="content-area-component">`);

html = html.replace(/<section class="conversion-section" id="dang-ky-dung-thu">\s*<div class="container">/g,
  `<section class="conversion-section wp-section alignfull" id="dang-ky-dung-thu" data-type="section-component"><div class="container wp-content-wrap" data-type="content-area-component">`);

html = html.replace(/<footer class="site-footer" id="ve-gsv-dtech">\s*<div class="container-wide">/g,
  `<footer class="site-footer wp-section alignfull" id="ve-gsv-dtech" data-type="section-component"><div class="container-wide wp-content-wrap" data-type="content-area-component">`);

// Remove inline onclick handler to conform to rule 11
html = html.replace(/onclick="document\.getElementById\('demoModal'\)\.classList\.remove\('active'\);"/g, 'id="demoModalCloseCta"');

// Ensure overlay active class works with CSS
js = js.replace(/overlay\.style\.display = 'block';/g, "overlay.style.display = 'block'; overlay.classList.add('active');");
js = js.replace(/overlay\.style\.display = 'none';/g, "overlay.style.display = 'none'; overlay.classList.remove('active');");

// Ensure JS handles #demoModalCloseCta
if (!js.includes('demoModalCloseCta')) {
  js += `
  const demoModalCloseCta = document.getElementById('demoModalCloseCta');
  if (demoModalCloseCta) {
    demoModalCloseCta.addEventListener('click', () => {
      const modal = document.getElementById('demoModal');
      if (modal) modal.classList.remove('active');
    });
  }
  `;
}

// Ensure JS runs immediately if DOMContentLoaded already fired
const wrappedJs = `
(function() {
  function initGSVDTech() {
    ${js}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGSVDTech);
  } else {
    initGSVDTech();
  }
})();
`;

// Extract just the inner body HTML (excluding <!DOCTYPE>, <html>, <head>, <body>, </body>, </html>)
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : html;
// remove any script or link tags from bodyContent
bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');
bodyContent = bodyContent.replace(/<link[\s\S]*?>/gi, '');

// Save clean body HTML, CSS, and JS to files
fs.writeFileSync('scratch_clean_body.html', bodyContent, 'utf8');
fs.writeFileSync('scratch_clean.css', css, 'utf8');
fs.writeFileSync('scratch_clean.js', wrappedJs, 'utf8');

console.log('Prepared scratch_clean_body.html, scratch_clean.css, scratch_clean.js');
