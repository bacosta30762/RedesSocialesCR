# Development Guide

This guide provides detailed information for developers working on the Redes Sociales Costa Rica project.

## 📋 Table of Contents

- [Environment Setup](#environment-setup)
- [Project Architecture](#project-architecture)
- [Development Workflow](#development-workflow)
- [Code Organization](#code-organization)
- [Styling Guidelines](#styling-guidelines)
- [Animation Guidelines](#animation-guidelines)
- [Performance Optimization](#performance-optimization)
- [Debugging](#debugging)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)

## 🛠️ Environment Setup

### Required Software

1. **Node.js** (v14 or higher)
   ```bash
   node --version  # Should be v14+
   ```

2. **npm** (v6 or higher)
   ```bash
   npm --version  # Should be v6+
   ```

3. **Git**
   ```bash
   git --version
   ```

### Recommended Tools

1. **VS Code Extensions**
   - ESLint
   - Prettier
   - React snippets
   - Auto Rename Tag
   - Bracket Pair Colorizer

2. **Browser Extensions**
   - React Developer Tools
   - Redux DevTools (if using Redux)
   - Lighthouse (for performance)

### Initial Setup

```bash
# Clone repository
git clone https://github.com/bacosta30762/RedesSocialesCR.git
cd RedesSocialesCR

# Install dependencies
npm install

# Start development server
npm start
```

## 🏗️ Project Architecture

### Directory Structure

```
src/
├── assets/
│   ├── css/
│   │   └── main.css          # Main stylesheet
│   ├── img/                  # Image assets
│   └── vendor/               # Third-party libraries
├── components/
│   ├── Header.jsx            # Navigation header
│   ├── Hero.jsx              # Hero section
│   ├── AboutSection.jsx      # About section
│   ├── FeaturesSection.jsx   # Features/Tabs section
│   ├── ProblematicaCR.jsx    # Problems section
│   ├── LeyesCR.jsx           # Laws section
│   ├── CallToAction.jsx      # CTA section
│   └── Footer.jsx            # Footer
├── App.jsx                   # Main app component
├── index.js                  # Entry point
└── index.css                 # Global styles
```

### Component Hierarchy

```
App
├── BrowserRouter
    ├── Header
    ├── Hero
    ├── ProblematicaCR
    ├── AboutSection
    ├── FeaturesSection
    ├── CallToAction
    ├── LeyesCR
    └── Footer
```

### Data Flow

- **Props**: Top-down data flow
- **State**: Local component state (useState)
- **Effects**: Side effects (useEffect)
- **No global state management** (currently)

## 🔄 Development Workflow

### Daily Workflow

1. **Start development server**
   ```bash
   npm start
   ```

2. **Make changes**
   - Edit files in `src/`
   - Browser auto-reloads on save

3. **Test changes**
   - Check browser console
   - Test on different screen sizes
   - Verify functionality

4. **Commit changes**
   ```bash
   git add .
   git commit -m "Description"
   ```

### Feature Development

1. **Create feature branch**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Develop feature**
   - Write component code
   - Add styles
   - Test functionality

3. **Test thoroughly**
   ```bash
   npm test
   npm run build
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/new-feature
   ```

## 📁 Code Organization

### Component Structure

```jsx
// 1. Imports
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 2. Component definition
const MyComponent = () => {
  // 3. Hooks
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // 4. Event handlers
  const handleClick = () => {
    // Handler logic
  };

  // 5. Render
  return (
    <section id="my-section" className="section">
      {/* JSX */}
    </section>
  );
};

// 6. Export
export default MyComponent;
```

### Import Order

1. React and React hooks
2. Third-party libraries
3. CSS imports
4. Local components
5. Utilities
6. Assets

```jsx
// Example
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import { formatDate } from './utils';
import logo from './assets/img/logo.jpg';
```

## 🎨 Styling Guidelines

### CSS Architecture

1. **Bootstrap First**
   - Use Bootstrap classes when possible
   - Customize with CSS variables

2. **Custom CSS**
   - Add to `src/assets/css/main.css`
   - Use BEM-like naming
   - Keep specificity low

3. **Inline Styles**
   - Only for dynamic values
   - Use style objects for multiple properties

### CSS Organization

```css
/* 1. Component styles */
.component-name {
  /* Base styles */
}

.component-name__element {
  /* Element styles */
}

.component-name--modifier {
  /* Modifier styles */
}

/* 2. Utility classes */
.text-center {
  text-align: center;
}

/* 3. Media queries */
@media (max-width: 768px) {
  .component-name {
    /* Mobile styles */
  }
}
```

### Responsive Design

```jsx
// Bootstrap breakpoints
<div className="col-lg-6 col-md-12 col-sm-12">
  {/* Content */}
</div>

// Custom media queries
@media (max-width: 576px) { /* xs */ }
@media (min-width: 577px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 992px) { /* lg */ }
@media (min-width: 1200px) { /* xl */ }
```

## 🎬 Animation Guidelines

### AOS (Animate On Scroll)

**Initialization**:
```jsx
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,      // Animate every time element enters viewport
    offset: 100,      // Trigger offset in pixels
    delay: 0,         // Default delay
    easing: 'ease',   // Easing function
    mirror: false     // Animate on scroll up
  });
}, []);
```

**Usage**:
```jsx
<div data-aos="fade-up" data-aos-delay="200">
  Content
</div>
```

**Best Practices**:
- Use `once: true` for performance when appropriate
- Stagger delays for list items (100ms, 200ms, 300ms...)
- Don't overuse animations
- Test on lower-end devices

### Animate.css

**Usage**:
```jsx
<h2 className="animate__animated animate__fadeInDown">
  Heading
</h2>
```

**Available Animations**:
- `fadeIn`, `fadeInDown`, `fadeInUp`
- `slideInLeft`, `slideInRight`
- `zoomIn`, `zoomOut`
- `bounceIn`, `bounceOut`

## ⚡ Performance Optimization

### Image Optimization

1. **Format Selection**
   - Use WebP when possible
   - Fallback to JPEG/PNG
   - Use SVG for icons

2. **Size Optimization**
   ```bash
   # Compress images before adding
   # Use tools like:
   # - ImageOptim
   # - TinyPNG
   # - Squoosh
   ```

3. **Lazy Loading**
   ```jsx
   <img 
     src="image.jpg" 
     loading="lazy" 
     alt="Description"
   />
   ```

### Code Optimization

1. **Code Splitting**
   ```jsx
   import { lazy, Suspense } from 'react';

   const HeavyComponent = lazy(() => import('./HeavyComponent'));

   <Suspense fallback={<div>Loading...</div>}>
     <HeavyComponent />
   </Suspense>
   ```

2. **Memoization**
   ```jsx
   import { useMemo, useCallback } from 'react';

   const expensiveValue = useMemo(() => {
     return computeValue(data);
   }, [data]);

   const handleClick = useCallback(() => {
     // Handler logic
   }, [dependencies]);
   ```

3. **Component Memoization**
   ```jsx
   import { memo } from 'react';

   const MyComponent = memo(({ prop1, prop2 }) => {
     return <div>{prop1} {prop2}</div>;
   });
   ```

### Bundle Size

```bash
# Analyze bundle size
npm run build
npx source-map-explorer 'build/static/js/*.js'
```

## 🐛 Debugging

### React Developer Tools

1. **Install Extension**
   - Chrome: React Developer Tools
   - Firefox: React Developer Tools

2. **Usage**
   - Inspect component tree
   - View props and state
   - Profile performance

### Console Debugging

```jsx
// Component lifecycle
useEffect(() => {
  console.log('Component mounted');
  return () => {
    console.log('Component unmounted');
  };
}, []);

// State changes
useEffect(() => {
  console.log('State changed:', state);
}, [state]);
```

### Common Issues

1. **Component not updating**
   - Check dependencies in useEffect
   - Verify state updates
   - Check for stale closures

2. **Styling not applying**
   - Check CSS specificity
   - Verify class names
   - Check for CSS conflicts

3. **Animations not working**
   - Verify AOS initialization
   - Check data-aos attributes
   - Ensure CSS is imported

## 📝 Common Tasks

### Adding a New Section

1. **Create component**
   ```jsx
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
         </div>
       </section>
     );
   };

   export default NewSection;
   ```

2. **Add to App.jsx**
   ```jsx
   import NewSection from './components/NewSection';

   const App = () => {
     return (
       <BrowserRouter basename="/RedesSocialesCR">
         <Header />
         <NewSection />
         {/* Other components */}
       </BrowserRouter>
     );
   };
   ```

3. **Add to navigation**
   ```jsx
   // In Header.jsx
   <li><a href="#new-section">New Section</a></li>
   ```

### Modifying Styles

1. **Bootstrap classes** (preferred)
   ```jsx
   <div className="container row gy-4">
   ```

2. **Custom CSS**
   ```css
   /* In src/assets/css/main.css */
   .my-custom-class {
     /* Styles */
   }
   ```

3. **Inline styles** (for dynamic values)
   ```jsx
   <div style={{ color: dynamicColor }}>
   ```

### Adding External Links

```jsx
<a 
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-visit"
>
  Visit Site
</a>
```

## 🔧 Troubleshooting

### Development Server Issues

**Port already in use**:
```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

**Module not found**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Issues

**Build fails**:
```bash
# Clear build cache
rm -rf build
npm run build
```

**Memory issues**:
```bash
# Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Browser Issues

**Styles not loading**:
- Check CSS import paths
- Verify file paths are correct
- Clear browser cache

**Animations not working**:
- Verify AOS is initialized
- Check data-aos attributes
- Ensure CSS is imported

## 📚 Additional Resources

### Documentation
- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [AOS Documentation](https://michalsnik.github.io/aos/)

### Tools
- [Create React App](https://create-react-app.dev/)
- [React Developer Tools](https://react.dev/learn/react-developer-tools)

---

**Last Updated**: 2024

