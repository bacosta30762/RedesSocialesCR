# API Reference Documentation

This document provides detailed technical documentation for all public APIs, functions, and components in the Redes Sociales Costa Rica project.

## Table of Contents

- [Component APIs](#component-apis)
- [Utility Functions](#utility-functions)
- [Configuration](#configuration)
- [Styling API](#styling-api)
- [Animation API](#animation-api)

---

## Component APIs

### App Component

**File**: `src/App.jsx`

**Type**: React Functional Component

**Exports**: Default export

**Props**: None

**Returns**: JSX.Element

**Dependencies**:
- `react-router-dom`: BrowserRouter
- All child components

**Usage**:
```jsx
import App from './App';

// Rendered in index.js
createRoot(document.querySelector("#root")).render(<App />);
```

**Internal Structure**:
```jsx
<BrowserRouter basename="/RedesSocialesCR">
  <Header />
  <Hero />
  <ProblematicasCR />
  <AboutSection />
  <FeaturesSection />
  <CallToAction />
  <LeyesCR />
  <Footer />
</BrowserRouter>
```

**Router Configuration**:
- `basename`: "/RedesSocialesCR" (for GitHub Pages deployment)

---

### Header Component

**File**: `src/components/Header.jsx`

**Type**: React Functional Component

**Exports**: Default export

**Props**: None

**Returns**: JSX.Element (HTML `<header>` element)

**HTML Structure**:
```html
<header id="header" className="header d-flex align-items-center fixed-top">
  <div className="container-fluid container-xl">
    <a href="#hero" className="logo">
      <h1 className="sitename">Redes Sociales Costa Rica</h1>
    </a>
    <nav id="navmenu" className="navmenu">
      <ul>
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#problematica">Problemática en Costa Rica</a></li>
        <li><a href="#about">Leyes y Marcos Legales</a></li>
        <li><a href="#services">Leyes de Costa Rica</a></li>
      </ul>
    </nav>
  </div>
</header>
```

**Navigation Links**:
| Link Text | Target Section ID | Description |
|-----------|------------------|-------------|
| Inicio | #hero | Scrolls to hero section |
| Problemática en Costa Rica | #problematica | Scrolls to problems section |
| Leyes y Marcos Legales | #about | Scrolls to about section |
| Leyes de Costa Rica | #services | Scrolls to services section |

**CSS Classes Used**:
- `header`: Base header styling
- `d-flex align-items-center`: Flexbox layout
- `fixed-top`: Fixed positioning
- `navmenu`: Navigation menu styling

**Accessibility**:
- Semantic `<header>` element
- Semantic `<nav>` element
- Proper heading hierarchy

---

### Hero Component

**File**: `src/components/Hero.jsx`

**Type**: React Functional Component

**Exports**: Default export (as `HeroSection`)

**Props**: None

**Returns**: JSX.Element (HTML `<section>` element)

**Dependencies**:
- `react-bootstrap`: Carousel component
- `animate.css`: Animation classes

**Component Structure**:
```jsx
<section id="hero" className="hero section dark-background">
  <div className="container carousel carousel-fade">
    <Carousel fade>
      <Carousel.Item>...</Carousel.Item>
      <Carousel.Item>...</Carousel.Item>
      <Carousel.Item>...</Carousel.Item>
    </Carousel>
  </div>
  <svg className="hero-waves">...</svg>
</section>
```

**Carousel Items**:

1. **Item 1**: Project Overview
   - Title: "Impacto de las redes sociales en las poblaciones vulnerables de Costa Rica"
   - Description: Project purpose and goals
   - Button: Scrolls to `#about` section

2. **Item 2**: Legal Protection
   - Title: "Protección Legal"
   - Description: Information about legal protection
   - Button: Scrolls to `#about` section

3. **Item 3**: Problems in Costa Rica
   - Title: "Problemática en Costa Rica"
   - Description: Overview of social media problems
   - Button: Scrolls to `#problematica` section

**Animation Classes**:
- `animate__animated animate__fadeInDown`: For headings
- `animate__animated animate__fadeInUp`: For paragraphs and buttons

**Carousel Configuration**:
- `fade`: Enables fade transition
- `data-bs-interval="5000"`: 5-second auto-rotation
- `data-bs-ride="carousel"`: Auto-start carousel

**Button Click Handler**:
```jsx
onClick={() => document.getElementById("sectionId").scrollIntoView({ behavior: "smooth" })}
```

**SVG Waves**:
- Decorative SVG element at bottom of hero section
- Three wave layers for visual effect

---

### AboutSection Component

**File**: `src/components/AboutSection.jsx`

**Type**: React Functional Component

**Exports**: Default export

**Props**: None

**Returns**: JSX.Element (HTML `<section>` element)

**Dependencies**:
- `aos`: Animate On Scroll library
- `aos/dist/aos.css`: AOS styles

**Component Structure**:
```jsx
<section id="about" className="about section">
  <div className="container section-title" data-aos="fade-up">
    <h2>Acerca de</h2>
    <p>Leyes y Marcos legales</p>
  </div>
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
        {/* Content */}
      </div>
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        {/* Content */}
      </div>
    </div>
  </div>
</section>
```

**AOS Initialization**:
```jsx
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
```

**AOS Attributes**:
- `data-aos="fade-up"`: Fade up animation
- `data-aos-delay="100"`: 100ms delay
- `data-aos-delay="200"`: 200ms delay

**Content Structure**:
- **Left Column**: Overview text and bullet list
- **Right Column**: Additional information and "Read more" link

**Legal Frameworks Listed**:
1. Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales (Ley 8968)
2. Ley contra el Cibercrimen (Ley 9048)
3. International frameworks (GDPR, Convention on Children's Rights)

**Links**:
- `#features`: Links to features section

---

### FeaturesSection Component

**File**: `src/components/FeaturesSection.jsx`

**Type**: React Functional Component

**Exports**: Default export

**Props**: None

**Returns**: JSX.Element (HTML `<section>` element)

**Dependencies**:
- `react-bootstrap`: Tab, Nav components
- `aos`: Animation library
- Image assets: `legal.jpg`, `legalUE.jpg`

**Component Structure**:
```jsx
<section id="features" className="features section">
  <div className="container">
    <Tab.Container defaultActiveKey="features-tab-1">
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="features-tab-1">...</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="features-tab-2">...</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="features-tab-1">...</Tab.Pane>
        <Tab.Pane eventKey="features-tab-2">...</Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  </div>
</section>
```

**Tab Configuration**:
- `defaultActiveKey="features-tab-1"`: First tab active by default
- `variant="tabs"`: Bootstrap tabs styling

**Tab 1: Leyes de Costa Rica**
- **Event Key**: `features-tab-1`
- **Icon**: `bi-journal`
- **Content**: National laws list and image
- **Laws**:
  - Ley de Delitos Informáticos (Ley N°9048)
  - Código Penal de Costa Rica
  - Ley de Protección de Datos Personales (Ley N°8968)

**Tab 2: Leyes y Marcos Internacionales**
- **Event Key**: `features-tab-2`
- **Icon**: `bi-book`
- **Content**: International frameworks list and image
- **Frameworks**: 8 international laws and frameworks

**AOS Configuration**:
- Nav: `data-aos="fade-up" data-aos-delay="100"`
- Content: `data-aos="fade-up" data-aos-delay="200"`

**Image Assets**:
- `legal.jpg`: Costa Rica laws image
- `legalUE.jpg`: International laws image

---

### ProblematicaCR Component

**File**: `src/components/ProblematicaCR.jsx`

**Type**: React Functional Component

**Exports**: Default export

**Props**: None

**Returns**: JSX.Element (HTML `<section>` element)

**Dependencies**:
- `aos`: Animation library
- External links to authoritative sources

**Component Structure**:
```jsx
<section id="problematica" className="portfolio-details section">
  <div className="container">
    <div className="row justify-content-between gy-4 mt-4">
      <div className="col-lg-8">
        <div className="portfolio-description">
          {/* Problem descriptions */}
        </div>
      </div>
      <div className="col-lg-3">
        <div className="portfolio-info">
          {/* External resource links */}
        </div>
      </div>
    </div>
  </div>
</section>
```

**Content Sections**:

1. **Ciberbullying**
   - Description of cyberbullying impact
   - Extreme consequences (suicide)
   - Need for educational programs

2. **Discurso de Odio**
   - Hate speech and discrimination
   - UN report statistics (548,000+ conversations)
   - Affected groups: women, ethnic minorities, LGTBIQ+ community

3. **Desinformación**
   - Misinformation issues
   - Lack of platform regulation
   - Rights violations

**External Resources** (Sidebar):

| Resource | URL | Description |
|----------|-----|-------------|
| UN Report on Hate Speech | https://costarica.un.org/es/235989... | 2021 report on hate speech |
| Criminality Approach | https://www.criminologia.or.cr/... | Colegio de Criminología report |
| Victimization | https://www.undp.org/es/costa-rica/... | UNDP victimization report |
| Cyberbullying, Grooming, Sexting | https://ministeriopublico.poder-judicial.go.cr/... | Poder Judicial information |

**Link Security**:
All external links use:
- `target="_blank"`: Opens in new tab
- `rel="noopener noreferrer"`: Security attributes

**AOS Configuration**:
- Container: `data-aos="fade-up"`
- Sidebar: `data-aos="fade-up" data-aos-delay="100"`

---

### LeyesCR Component

**File**: `src/components/LeyesCR.jsx`

**Type**: React Functional Component

**Exports**: Default export (as `Services`)

**Props**: None

**Returns**: JSX.Element (HTML `<section>` element)

**Dependencies**:
- `aos`: Animation library
- Bootstrap Icons

**Data Structure**:
```javascript
const services = [
  {
    id: number,
    title: string,
    description: string,
    icon: string,        // Bootstrap Icons class
    color: string,       // Hex color code
    delay: number        // AOS delay in milliseconds
  }
]
```

**Service Objects**:

1. **Service 1**
   - Title: "Código Penal de Costa Rica"
   - Description: Defamation sanctions
   - Icon: `bi-chat-text`
   - Color: `#0dcaf0`
   - Delay: 100ms

2. **Service 2**
   - Title: "Código Penal de Costa Rica"
   - Description: Sexual harassment sanctions
   - Icon: `bi-credit-card-2-front`
   - Color: `#fd7e14`
   - Delay: 200ms

3. **Service 3**
   - Title: "Ley de Protección de Datos (Ley N°8968)"
   - Description: Data protection violations and fines
   - Icon: `bi-cash-stack`
   - Color: `#20c997`
   - Delay: 300ms

4. **Service 4**
   - Title: "Ley de Delitos Informáticos (Ley N°9048)"
   - Description: Unauthorized system access (Art. 196 bis)
   - Icon: `bi-globe`
   - Color: `#6610f2`
   - Delay: 500ms

5. **Service 5**
   - Title: "Ley de Delitos Informáticos (Ley N°9048)"
   - Description: Non-consensual intimate content (Art. 230 bis)
   - Icon: `bi-clock`
   - Color: `#f3268c`
   - Delay: 600ms

**Component Structure**:
```jsx
<section id="services" className="services section">
  <div className="container section-title" data-aos="fade-up">
    <h2>Costa Rica</h2>
    <p>Leyes</p>
  </div>
  <div className="container">
    <div className="row gy-4">
      {services.map((service) => (
        <div
          key={service.id}
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={service.delay}
        >
          <div className="service-item position-relative">
            <div className="icon" style={{ color: service.color }}>
              <i className={service.icon}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Grid Layout**:
- Desktop (lg): 3 columns (`col-lg-4`)
- Tablet (md): 2 columns (`col-md-6`)
- Mobile: 1 column (default)

**AOS Configuration**:
- Section title: `data-aos="fade-up"`
- Service items: `data-aos="fade-up"` with individual delays

---

### CallToAction Component

**File**: `src/components/CallToAction.jsx`

**Type**: React Functional Component

**Exports**: Default export

**Props**: None

**Returns**: JSX.Element (HTML `<section>` element)

**Dependencies**:
- `aos`: Animation library

**Component Structure**:
```jsx
<section id="call-to-action" className="call-to-action section dark-background">
  <div className="container">
    <div className="row" data-aos="zoom-in" data-aos-delay="100">
      <div className="col-xl-9 text-center text-xl-start">
        <h3>Leyes de Costa Rica</h3>
        <p>Description text</p>
      </div>
      <div className="col-xl-3 cta-btn-container text-center">
        <a className="cta-btn align-middle" href="#services">Ver Leyes</a>
      </div>
    </div>
  </div>
</section>
```

**Layout**:
- Extra large screens: 9-3 column split
- Smaller screens: Full width, centered

**AOS Configuration**:
- Animation: `zoom-in`
- Delay: 100ms

**Link Target**:
- `href="#services"`: Links to LeyesCR section

---

### Footer Component

**File**: `src/components/Footer.jsx`

**Type**: React Functional Component

**Exports**: Default export

**Props**: None

**Returns**: JSX.Element (HTML `<footer>` element)

**Component Structure**:
```jsx
<footer id="footer" className="footer dark-background">
  <div className="container">
    <div className="copyright">
      <span>Copyright</span>
      <strong className="px-1 sitename">Redes Sociales en Costa Rica</strong>
      <span>All Rights Reserved</span>
    </div>
    <div className="credits">
      Designed by <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">BootstrapMade</a>
    </div>
  </div>
</footer>
```

**External Link**:
- URL: https://bootstrapmade.com/
- Security: `target="_blank" rel="noopener noreferrer"`

---

## Utility Functions

### AOS Initialization

**Library**: AOS (Animate On Scroll)

**Usage Pattern**:
```jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
```

**Configuration Options**:
```javascript
AOS.init({
  duration: 1000,        // Animation duration in ms
  once: true,            // Animation only once
  offset: 100,           // Trigger offset in pixels
  delay: 0,              // Delay in ms
  easing: 'ease',        // Easing function
  mirror: false          // Animate on scroll up
});
```

**Available Animations**:
- `fade-up`
- `fade-down`
- `fade-left`
- `fade-right`
- `zoom-in`
- `zoom-out`
- `flip-left`
- `flip-right`

---

### Smooth Scroll

**Implementation**: Native JavaScript

**Usage**:
```jsx
onClick={() => document.getElementById("sectionId").scrollIntoView({ behavior: "smooth" })}
```

**Options**:
- `behavior: "smooth"`: Smooth scrolling
- `behavior: "auto"`: Instant scroll
- `block: "start"`: Align to top
- `block: "center"`: Align to center
- `block: "end"`: Align to bottom

---

## Configuration

### Router Configuration

**File**: `src/App.jsx`

**BrowserRouter Props**:
- `basename`: "/RedesSocialesCR" (required for GitHub Pages)

**Usage**:
```jsx
<BrowserRouter basename="/RedesSocialesCR">
  {/* Routes */}
</BrowserRouter>
```

---

### Build Configuration

**File**: `package.json`

**Homepage**:
```json
"homepage": "https://bacosta30762.github.io/RedesSocialesCR"
```

**Scripts**:
- `start`: Development server
- `build`: Production build
- `test`: Test runner
- `eject`: Eject from CRA

---

## Styling API

### CSS Import Structure

**File**: `src/index.css`

```css
@import url('assets/vendor/bootstrap/css/bootstrap.min.css');
@import url('assets/vendor/bootstrap-icons/bootstrap-icons.css');
@import url('assets/vendor/aos/aos.css');
@import url('assets/vendor/animate.css/animate.min.css');
@import url('assets/vendor/glightbox/css/glightbox.min.css');
@import url('assets/vendor/swiper/swiper-bundle.min.css');
@import url('assets/css/main.css');
```

### Bootstrap Classes Used

**Layout**:
- `container`, `container-fluid`, `container-xl`
- `row`, `col-*`, `gy-*`, `mt-*`
- `d-flex`, `align-items-center`, `justify-content-between`

**Typography**:
- `text-center`, `text-xl-start`
- `fst-italic`

**Components**:
- `section`, `dark-background`
- `btn-get-started`, `cta-btn`
- `service-item`, `portfolio-details`

### Custom CSS Classes

**Section Classes**:
- `.section`: Base section styling
- `.dark-background`: Dark background variant
- `.section-title`: Section title container

**Component Classes**:
- `.header`: Header styling
- `.navmenu`: Navigation menu
- `.hero`: Hero section
- `.hero-waves`: SVG wave decoration
- `.about`: About section
- `.features`: Features section
- `.services`: Services section
- `.footer`: Footer styling

---

## Animation API

### AOS (Animate On Scroll)

**Initialization**:
```jsx
AOS.init({
  duration: 1000,
  once: false,
  offset: 100
});
```

**HTML Attributes**:
- `data-aos`: Animation type
- `data-aos-delay`: Delay in milliseconds
- `data-aos-duration`: Duration override
- `data-aos-offset`: Offset override

**Example**:
```jsx
<div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
  Content
</div>
```

### Animate.css

**Classes**:
- `animate__animated`: Base class
- `animate__fadeInDown`: Fade in from top
- `animate__fadeInUp`: Fade in from bottom

**Usage**:
```jsx
<h2 className="animate__animated animate__fadeInDown">
  Heading
</h2>
```

---

## Browser Support

**Production Targets**:
- >0.2% market share
- Not dead browsers
- Not Opera Mini

**Development Targets**:
- Last 1 Chrome version
- Last 1 Firefox version
- Last 1 Safari version

---

## Performance Considerations

### Image Optimization
- Use optimized images (WebP when possible)
- Lazy load images below the fold
- Use appropriate image sizes for different breakpoints

### Code Splitting
- React Router supports code splitting
- Consider lazy loading heavy components

### Animation Performance
- Use `will-change` CSS property sparingly
- Limit simultaneous animations
- Use `once: true` for AOS when appropriate

---

## Accessibility

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use semantic elements (`<header>`, `<nav>`, `<section>`, `<footer>`)
- Use `<button>` for interactive elements

### ARIA Attributes
- Add `aria-label` for icon-only buttons
- Use `aria-hidden="true"` for decorative elements
- Ensure proper `role` attributes where needed

### Keyboard Navigation
- All interactive elements should be keyboard accessible
- Maintain logical tab order
- Provide visible focus indicators

---

## Security

### External Links
Always use:
```jsx
<a 
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Link Text
</a>
```

**Why**:
- `target="_blank"`: Opens in new tab
- `rel="noopener"`: Prevents `window.opener` access
- `rel="noreferrer"`: Prevents referrer information leakage

---

## Version Information

**React**: 19.0.0
**React DOM**: 19.0.0
**React Router DOM**: 7.0.2
**Bootstrap**: 5.3.3
**AOS**: 2.3.4

---

**Last Updated**: 2024
**Documentation Version**: 1.0.0

