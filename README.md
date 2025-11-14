# Redes Sociales Costa Rica

A comprehensive React web application that analyzes the impact of social media on vulnerable populations in Costa Rica from an ethical and legal perspective. This project aims to inform users about the main problems associated with social media in Costa Rica, highlighting the impact on vulnerable populations and the legal frameworks that protect them.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Component Documentation](#component-documentation)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)
- [Development Guidelines](#development-guidelines)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project is an educational web application that provides information about:
- Social media problems affecting vulnerable populations in Costa Rica
- National and international legal frameworks protecting digital rights
- Educational resources and best practices for safe social media usage

The application is built with React 19 and uses modern web technologies to deliver an interactive, responsive, and accessible user experience.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Components**: Carousel, tabs, and animated sections
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging user experience
- **Modern UI**: Bootstrap 5 and custom CSS for a professional appearance
- **Accessibility**: Semantic HTML and ARIA attributes for better accessibility
- **Performance Optimized**: Code splitting and optimized assets

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/bacosta30762/RedesSocialesCR.git
   cd redessocialescr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
redessocialescr/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css    # Main stylesheet
│   │   ├── img/            # Image assets
│   │   └── vendor/         # Third-party libraries
│   ├── components/
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero section with carousel
│   │   ├── AboutSection.jsx # About/Legal frameworks section
│   │   ├── FeaturesSection.jsx # Features/Tabs section
│   │   ├── ProblematicaCR.jsx # Problems section
│   │   ├── LeyesCR.jsx     # Costa Rica laws section
│   │   ├── CallToAction.jsx # Call-to-action section
│   │   └── Footer.jsx      # Footer component
│   ├── App.jsx             # Main application component
│   ├── index.js            # Application entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 📚 Component Documentation

### App Component

**Location**: `src/App.jsx`

**Description**: Main application component that orchestrates all sections and sets up routing.

**Props**: None

**Usage**:
```jsx
import App from './App';

// App is the root component, typically rendered in index.js
```

**Features**:
- Sets up BrowserRouter with basename for GitHub Pages deployment
- Renders all main sections in order
- Manages global application state

**Example**:
```jsx
const App = () => {
  return (
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
  );
};
```

---

### Header Component

**Location**: `src/components/Header.jsx`

**Description**: Fixed navigation header with smooth scroll links to different sections.

**Props**: None

**Public API**:
- No props required
- Renders navigation menu with anchor links

**Usage**:
```jsx
import Header from './components/Header';

<Header />
```

**Features**:
- Fixed position header (stays at top while scrolling)
- Responsive navigation menu
- Smooth scroll to sections
- Active link highlighting

**Best Practices**:
- Ensure all section IDs match the href values in navigation links
- Keep navigation items concise and descriptive
- Test mobile menu functionality on different screen sizes

**Example**:
```jsx
// The Header automatically includes navigation to:
// - #hero (Inicio)
// - #problematica (Problemática en Costa Rica)
// - #about (Leyes y Marcos Legales)
// - #services (Leyes de Costa Rica)
```

---

### Hero Component

**Location**: `src/components/Hero.jsx`

**Description**: Hero section with animated carousel showcasing main project themes.

**Props**: None

**Public API**:
- No props required
- Uses React Bootstrap Carousel component
- Includes smooth scroll buttons

**Usage**:
```jsx
import Hero from './components/Hero';

<Hero />
```

**Features**:
- Three-slide carousel with fade transitions
- Animate.css animations (fadeInDown, fadeInUp)
- Call-to-action buttons with smooth scroll
- SVG wave decoration
- Auto-rotating slides (5-second interval)

**Best Practices**:
- Keep carousel content concise and impactful
- Ensure images are optimized for web
- Test carousel on mobile devices
- Consider accessibility for screen readers

**Example**:
```jsx
// Hero section includes:
// - Slide 1: Project overview
// - Slide 2: Legal protection information
// - Slide 3: Problems in Costa Rica
// Each slide has a "Leer más" button that scrolls to relevant sections
```

**Animation Classes Used**:
- `animate__animated animate__fadeInDown` - For headings
- `animate__animated animate__fadeInUp` - For paragraphs and buttons

---

### AboutSection Component

**Location**: `src/components/AboutSection.jsx`

**Description**: Section explaining legal frameworks and protection laws.

**Props**: None

**Public API**:
- No props required
- Uses AOS (Animate On Scroll) for animations

**Usage**:
```jsx
import AboutSection from './components/AboutSection';

<AboutSection />
```

**Features**:
- Two-column responsive layout
- AOS fade-up animations
- List of key legal frameworks
- "Read more" link to features section

**Best Practices**:
- Keep legal information accurate and up-to-date
- Use semantic HTML for better accessibility
- Ensure links are properly formatted
- Test animations on different devices

**Example**:
```jsx
// AboutSection displays:
// - Overview of legal frameworks
// - List of key laws (Ley 8968, Ley 9048)
// - International frameworks (GDPR, Convention on Children's Rights)
```

**AOS Configuration**:
- Duration: 1000ms
- Animation: fade-up
- Delays: 100ms, 200ms for staggered effect

---

### FeaturesSection Component

**Location**: `src/components/FeaturesSection.jsx`

**Description**: Tabbed interface displaying national and international laws.

**Props**: None

**Public API**:
- No props required
- Uses React Bootstrap Tabs component
- Includes image assets

**Usage**:
```jsx
import FeaturesSection from './components/FeaturesSection';

<FeaturesSection />
```

**Features**:
- Two-tab interface (National Laws / International Laws)
- Responsive tab navigation
- AOS animations
- Image support for visual content
- Comprehensive law listings

**Tabs**:
1. **Leyes de Costa Rica** (Costa Rica Laws)
   - Ley de Delitos Informáticos (Ley N°9048)
   - Código Penal de Costa Rica
   - Ley de Protección de Datos Personales (Ley N°8968)

2. **Leyes y Marcos Internacionales** (International Laws and Frameworks)
   - Convenio de Budapest (2001)
   - GDPR (EU)
   - UN Model Law on Cybercrime
   - EU Code of Conduct against Disinformation
   - Universal Declaration of Human Rights
   - Prague Declaration on Internet Governance
   - 2030 Agenda for Sustainable Development
   - OECD Guidelines on Child Protection

**Best Practices**:
- Keep tab content organized and scannable
- Use consistent formatting for law listings
- Ensure images are optimized and have alt text
- Test tab switching on mobile devices

**Example**:
```jsx
// FeaturesSection provides a tabbed interface:
<Tab.Container defaultActiveKey="features-tab-1">
  <Nav variant="tabs">
    <Nav.Item>
      <Nav.Link eventKey="features-tab-1">
        Leyes de Costa Rica
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="features-tab-2">
        Leyes y Marcos Internacionales
      </Nav.Link>
    </Nav.Item>
  </Nav>
  <Tab.Content>
    {/* Tab content */}
  </Tab.Content>
</Tab.Container>
```

---

### ProblematicaCR Component

**Location**: `src/components/ProblematicaCR.jsx`

**Description**: Detailed section explaining social media problems in Costa Rica.

**Props**: None

**Public API**:
- No props required
- Includes external resource links

**Usage**:
```jsx
import ProblematicaCR from './components/ProblematicaCR';

<ProblematicaCR />
```

**Features**:
- Two-column layout (content + resources)
- AOS fade-up animations
- External links to authoritative sources
- Comprehensive problem descriptions

**Content Sections**:
1. **Ciberbullying**: Information about cyberbullying and its extreme consequences
2. **Discurso de Odio**: Hate speech and discrimination on digital platforms
3. **Desinformación**: Misinformation and lack of regulation issues

**External Resources**:
- UN Report on Hate Speech and Discrimination (2021)
- Criminality Approach in Social Networks (Colegio de Criminología)
- Victimization through Electronic Media (UNDP)
- Cyberbullying, Grooming, and Sexting (Poder Judicial)

**Best Practices**:
- Keep external links updated and verified
- Use `target="_blank"` and `rel="noopener noreferrer"` for security
- Ensure content is factually accurate
- Cite sources appropriately

**Example**:
```jsx
// ProblematicaCR displays problems with supporting resources:
<section id="problematica">
  <div className="portfolio-description">
    {/* Problem descriptions */}
  </div>
  <div className="portfolio-info">
    {/* External resource links */}
  </div>
</section>
```

---

### LeyesCR Component

**Location**: `src/components/LeyesCR.jsx`

**Description**: Grid display of Costa Rica's specific laws with icons and descriptions.

**Props**: None

**Public API**:
- No props required
- Uses service array for dynamic rendering

**Usage**:
```jsx
import LeyesCR from './components/LeyesCR';

<LeyesCR />
```

**Features**:
- Responsive grid layout (3 columns on desktop)
- Service cards with icons
- Color-coded icons
- AOS staggered animations
- Dynamic rendering from data array

**Laws Displayed**:
1. **Código Penal** - Defamation sanctions
2. **Código Penal** - Sexual harassment sanctions
3. **Ley N°8968** - Data protection violations (fines)
4. **Ley N°9048** - Unauthorized system access (3-6 years)
5. **Ley N°9048** - Non-consensual intimate content (5-10 years)

**Service Object Structure**:
```javascript
{
  id: number,
  title: string,
  description: string,
  icon: string,        // Bootstrap Icons class
  color: string,       // Hex color code
  delay: number        // AOS animation delay in ms
}
```

**Best Practices**:
- Keep law descriptions accurate and concise
- Use appropriate icons that match content
- Ensure color contrast meets accessibility standards
- Update penalties and fines as laws change

**Example**:
```jsx
// LeyesCR renders service cards dynamically:
{services.map((service) => (
  <div
    key={service.id}
    className="col-lg-4 col-md-6"
    data-aos="fade-up"
    data-aos-delay={service.delay}
  >
    <div className="service-item">
      <div className="icon" style={{ color: service.color }}>
        <i className={service.icon}></i>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  </div>
))}
```

---

### CallToAction Component

**Location**: `src/components/CallToAction.jsx`

**Description**: Call-to-action section encouraging users to view laws section.

**Props**: None

**Public API**:
- No props required
- Includes smooth scroll link

**Usage**:
```jsx
import CallToAction from './components/CallToAction';

<CallToAction />
```

**Features**:
- Dark background for visual contrast
- Responsive text alignment
- AOS zoom-in animation
- Call-to-action button with smooth scroll

**Best Practices**:
- Keep CTA text concise and action-oriented
- Ensure button is clearly visible
- Test smooth scroll functionality
- Use contrasting colors for visibility

**Example**:
```jsx
// CallToAction provides a transition between sections:
<section id="call-to-action" className="call-to-action section dark-background">
  <div className="container">
    <div className="row">
      <div className="col-xl-9">
        <h3>Leyes de Costa Rica</h3>
        <p>Brief description...</p>
      </div>
      <div className="col-xl-3">
        <a className="cta-btn" href="#services">Ver Leyes</a>
      </div>
    </div>
  </div>
</section>
```

---

### Footer Component

**Location**: `src/components/Footer.jsx`

**Description**: Site footer with copyright and credits information.

**Props**: None

**Public API**:
- No props required
- Includes external attribution link

**Usage**:
```jsx
import Footer from './components/Footer';

<Footer />
```

**Features**:
- Dark background
- Copyright information
- Design credits with external link
- Responsive layout

**Best Practices**:
- Keep footer content minimal and professional
- Ensure external links have proper security attributes
- Update copyright year as needed
- Maintain consistent styling with rest of site

**Example**:
```jsx
// Footer displays site information:
<footer id="footer" className="footer dark-background">
  <div className="container">
    <div className="copyright">
      <span>Copyright</span>
      <strong>Redes Sociales en Costa Rica</strong>
      <span>All Rights Reserved</span>
    </div>
    <div className="credits">
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</footer>
```

---

## 💡 Usage Examples

### Basic Component Usage

```jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
    </>
  );
}
```

### Customizing Animations

```jsx
// In any component using AOS
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyComponent = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,  // Animation only once
      offset: 100   // Trigger offset in pixels
    });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="200">
      Content with animation
    </div>
  );
};
```

### Adding a New Section

```jsx
// 1. Create new component
// src/components/NewSection.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="new-section" className="section">
      <div className="container" data-aos="fade-up">
        <h2>New Section</h2>
        <p>Content here</p>
      </div>
    </section>
  );
};

export default NewSection;

// 2. Add to App.jsx
import NewSection from './components/NewSection';

const App = () => {
  return (
    <BrowserRouter basename="/RedesSocialesCR">
      <Header />
      <Hero />
      <NewSection />
      {/* Other components */}
    </BrowserRouter>
  );
};
```

### Modifying Navigation

```jsx
// Update Header.jsx to add new navigation item
<nav id="navmenu" className="navmenu">
  <ul>
    <li><a href="#hero" className="active">Inicio</a></li>
    <li><a href="#new-section">New Section</a></li>
    {/* Other items */}
  </ul>
</nav>
```

## 🎨 Best Practices

### Component Development

1. **Component Structure**
   - Use functional components with hooks
   - Keep components focused and single-purpose
   - Extract reusable logic into custom hooks

2. **Styling**
   - Use Bootstrap classes for layout
   - Add custom CSS in `src/assets/css/main.css`
   - Maintain consistent naming conventions
   - Use CSS variables for theme colors

3. **Performance**
   - Lazy load images
   - Use React.memo for expensive components
   - Optimize AOS animations (use `once: true`)
   - Code split large components

4. **Accessibility**
   - Use semantic HTML elements
   - Add ARIA labels where needed
   - Ensure keyboard navigation works
   - Test with screen readers
   - Maintain proper heading hierarchy

5. **Code Quality**
   - Use ESLint for code consistency
   - Follow React best practices
   - Comment complex logic
   - Keep components under 200 lines when possible

### Animation Best Practices

```jsx
// Good: Initialize AOS once per component
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

// Good: Use appropriate delays for staggered effects
<div data-aos="fade-up" data-aos-delay="100">Item 1</div>
<div data-aos="fade-up" data-aos-delay="200">Item 2</div>

// Avoid: Initializing AOS multiple times
// Avoid: Overusing animations (can be distracting)
```

### Responsive Design

```jsx
// Use Bootstrap responsive classes
<div className="col-lg-6 col-md-12">
  {/* Content */}
</div>

// Test on multiple screen sizes
// - Mobile: 320px - 767px
// - Tablet: 768px - 1023px
// - Desktop: 1024px+
```

### External Links

```jsx
// Always use security attributes
<a 
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  External Link
</a>
```

## 🔧 Development Guidelines

### Adding New Dependencies

1. Install the package:
   ```bash
   npm install package-name
   ```

2. Import in component:
   ```jsx
   import PackageName from 'package-name';
   ```

3. Update documentation if it's a major feature

### File Naming Conventions

- Components: `PascalCase.jsx` (e.g., `Header.jsx`)
- Utilities: `camelCase.js` (e.g., `utils.js`)
- CSS: `kebab-case.css` (e.g., `main.css`)
- Images: `kebab-case.jpg` (e.g., `legal-image.jpg`)

### Git Workflow

1. Create a feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```

2. Make changes and commit:
   ```bash
   git add .
   git commit -m "Add new feature"
   ```

3. Push and create pull request:
   ```bash
   git push origin feature/new-feature
   ```

### Code Review Checklist

- [ ] Code follows project conventions
- [ ] Components are properly documented
- [ ] No console.logs or debug code
- [ ] Responsive design tested
- [ ] Accessibility considerations met
- [ ] Performance optimized
- [ ] External links have security attributes

## 🚀 Deployment

### GitHub Pages Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to package.json**:
   ```json
   "scripts": {
     "deploy": "gh-pages -d build"
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

### Environment Variables

Create a `.env` file for environment-specific variables:
```
REACT_APP_API_URL=https://api.example.com
```

### Production Build

```bash
# Create optimized production build
npm run build

# Test production build locally
npx serve -s build
```

## 📦 Dependencies

### Core Dependencies

- **react** (^19.0.0) - UI library
- **react-dom** (^19.0.0) - React DOM renderer
- **react-router-dom** (^7.0.2) - Routing
- **react-bootstrap** (^2.10.6) - Bootstrap components

### UI/Animation Libraries

- **bootstrap** (^5.3.3) - CSS framework
- **bootstrap-icons** (^1.11.3) - Icon library
- **aos** (^2.3.4) - Animate On Scroll
- **animate.css** (^4.1.1) - CSS animations
- **swiper** (^11.1.15) - Touch slider

### Development Dependencies

- **react-scripts** (^5.0.1) - Create React App scripts
- **gh-pages** (^6.2.0) - GitHub Pages deployment
- **autoprefixer** (^10.4.20) - CSS vendor prefixes
- **postcss** (^8.4.49) - CSS processing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Update documentation for new features
- Test your changes thoroughly
- Ensure responsive design works

## 📝 License

This project is private. All rights reserved.

## 🔗 Links

- **Live Site**: [GitHub Pages](https://bacosta30762.github.io/RedesSocialesCR)
- **Repository**: [GitHub](https://github.com/bacosta30762/RedesSocialesCR)

## 📞 Support

For questions or issues, please open an issue on the GitHub repository.

## 🙏 Acknowledgments

- BootstrapMade for the template design
- All contributors and researchers whose work informed this project
- Costa Rican legal institutions for providing accurate legal information

---

**Last Updated**: 2024
**Version**: 0.1.0
