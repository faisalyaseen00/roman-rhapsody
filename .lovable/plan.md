# La Locanda del Tempio — Complete Website Plan

## Direction
Create a warm, cinematic Roman dining experience: ivory editorial surfaces, charcoal and espresso depth, olive and restrained terracotta accents, antique-gold details, Cormorant Garamond headings, and Manrope body text. Photography remains visibly editorial/demo imagery, never presented as the restaurant’s own.

## Pages and shared experience
- Build shared navigation, full-screen mobile menu, IT/EN language control, scroll progress, reservation actions, and a minimal information-rich footer.
- Create `/`, `/menu`, `/cucina`, `/gallery`, `/location`, and `/contact`, each with unique metadata and verified-only content.
- Keep phone, email, Facebook, address, and map actions functional; make the contact form explicitly demo-only after submission.

## Homepage story
Follow the requested order exactly: cinematic 3D hero, introduction, La Nostra Cucina, cuisine categories, Un Assaggio di Roma, menu preview, wine/aperitivo, gallery, location, reservation, footer.

## 3D and motion
- Use a full-bleed React Three Fiber hero with procedural Roman arches/columns, stone materials, warm directional lighting, local environment lighting, atmospheric particles, and restrained camera parallax.
- Extend depth through perspective image frames and cursor-responsive cards across cuisine, dishes, wine, and gallery.
- Use scroll-linked reveals and parallax sparingly; simplify WebGL and disable cursor-driven motion on touch/reduced-motion devices.
- Dynamically load the 3D scene and cap pixel density for performance.

## Menu and gallery interactions
- Implement searchable, bilingual category-filtered menu data using only supplied examples, without prices or unverified allergens.
- Open accessible dish-detail dialogs with focus management, Escape/overlay close, category, and bilingual descriptions.
- Build a category-filtered gallery with clearly labeled editorial imagery, accessible keyboard lightbox, and smooth transitions.

## Imagery
Generate a cohesive, premium set of Rome, Italian dining, pasta, seafood, steak, pizza, tiramisù, wine, and aperitivo imagery. Store assets locally and centralize their references for easy replacement with approved restaurant photography.

## Responsive and accessibility
- Optimize layouts for phones through wide desktops, with no horizontal overflow and touch-friendly controls.
- Add a mobile bottom action bar for call, menu, and reservation.
- Use semantic landmarks, proper heading order, visible focus states, meaningful alt text, and reduced-motion fallbacks.

## Validation
Check the generated routes and interactions in the browser at desktop and mobile widths, verify the 3D scene is visible and moving, test menu search/modal, gallery lightbox, language switching, contact success state, phone/email/map links, and confirm clean runtime/build logs.
