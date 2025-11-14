# Contributing to Redes Sociales Costa Rica

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Documentation](#documentation)
- [Testing](#testing)

## 📜 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences

### Unacceptable Behavior

- Harassment or discriminatory language
- Personal attacks
- Trolling or inflammatory comments
- Any conduct that could reasonably be considered inappropriate

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn
- Git
- A code editor (VS Code recommended)

### Fork and Clone

1. **Fork the repository**
   - Click the "Fork" button on GitHub
   - This creates your own copy of the repository

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/RedesSocialesCR.git
   cd RedesSocialesCR
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/bacosta30762/RedesSocialesCR.git
   ```

4. **Verify remotes**
   ```bash
   git remote -v
   ```

## 🔧 Development Setup

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Verify setup**
   - Open http://localhost:3000
   - Check browser console for errors
   - Verify all sections load correctly

### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic

3. **Test your changes**
   ```bash
   npm test
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Go to GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template

## ✏️ Making Changes

### Component Development

When creating or modifying components:

1. **Follow the existing structure**
   ```jsx
   import React, { useEffect } from 'react';
   import AOS from 'aos';
   import 'aos/dist/aos.css';

   const MyComponent = () => {
     useEffect(() => {
       AOS.init({ duration: 1000 });
     }, []);

     return (
       <section id="my-section" className="section">
         {/* Component content */}
       </section>
     );
   };

   export default MyComponent;
   ```

2. **Use functional components**
   - Prefer functional components with hooks
   - Avoid class components unless necessary

3. **Keep components focused**
   - One component, one responsibility
   - Extract reusable logic into custom hooks
   - Keep components under 200 lines when possible

### File Naming

- **Components**: `PascalCase.jsx` (e.g., `NewComponent.jsx`)
- **Utilities**: `camelCase.js` (e.g., `formatDate.js`)
- **CSS**: `kebab-case.css` (e.g., `component-styles.css`)
- **Images**: `kebab-case.jpg` (e.g., `hero-image.jpg`)

### Adding New Dependencies

1. **Check if dependency is necessary**
   - Can existing dependencies solve the problem?
   - Is the package maintained and secure?

2. **Install dependency**
   ```bash
   npm install package-name
   ```

3. **Update documentation**
   - Add to README.md dependencies section
   - Document usage in API_REFERENCE.md

4. **Test thoroughly**
   - Ensure it doesn't break existing functionality
   - Test on multiple browsers

## 📐 Coding Standards

### JavaScript/JSX

1. **Use ES6+ features**
   ```jsx
   // Good
   const MyComponent = () => {
     const [state, setState] = useState(null);
     return <div>{state}</div>;
   };

   // Avoid
   function MyComponent() {
     var state = null;
     return React.createElement('div', null, state);
   }
   ```

2. **Use meaningful variable names**
   ```jsx
   // Good
   const userCount = users.length;
   const isLoggedIn = user !== null;

   // Avoid
   const uc = users.length;
   const il = user !== null;
   ```

3. **Destructure props**
   ```jsx
   // Good
   const MyComponent = ({ title, description }) => {
     return <div>{title}: {description}</div>;
   };

   // Avoid
   const MyComponent = (props) => {
     return <div>{props.title}: {props.description}</div>;
   };
   ```

4. **Use template literals**
   ```jsx
   // Good
   const message = `Hello, ${name}!`;

   // Avoid
   const message = 'Hello, ' + name + '!';
   ```

### CSS

1. **Use Bootstrap classes when possible**
   ```jsx
   // Good
   <div className="container row gy-4">

   // Avoid
   <div style={{ display: 'flex', gap: '1rem' }}>
   ```

2. **Follow BEM-like naming for custom classes**
   ```css
   /* Good */
   .service-item {}
   .service-item__icon {}
   .service-item--active {}

   /* Avoid */
   .serviceItem {}
   .service_item {}
   ```

3. **Use CSS variables for theming**
   ```css
   :root {
     --primary-color: #0d6efd;
     --secondary-color: #6c757d;
   }
   ```

### Accessibility

1. **Use semantic HTML**
   ```jsx
   // Good
   <header>
     <nav>
       <ul>
         <li><a href="#section">Link</a></li>
       </ul>
     </nav>
   </header>

   // Avoid
   <div className="header">
     <div className="nav">
       <div className="link">Link</div>
     </div>
   </div>
   ```

2. **Add ARIA labels where needed**
   ```jsx
   <button aria-label="Close menu">
     <i className="bi bi-x"></i>
   </button>
   ```

3. **Ensure keyboard navigation**
   - All interactive elements should be keyboard accessible
   - Maintain logical tab order
   - Provide visible focus indicators

### Performance

1. **Optimize images**
   - Use appropriate formats (WebP when possible)
   - Compress images before adding
   - Use responsive images

2. **Lazy load when appropriate**
   ```jsx
   import { lazy, Suspense } from 'react';

   const HeavyComponent = lazy(() => import('./HeavyComponent'));

   <Suspense fallback={<div>Loading...</div>}>
     <HeavyComponent />
   </Suspense>
   ```

3. **Memoize expensive computations**
   ```jsx
   import { useMemo } from 'react';

   const expensiveValue = useMemo(() => {
     return computeExpensiveValue(data);
   }, [data]);
   ```

## 📝 Commit Guidelines

### Commit Message Format

```
type(scope): subject

body (optional)

footer (optional)
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
# Good
feat(header): add mobile menu toggle
fix(hero): correct carousel auto-play interval
docs(readme): update installation instructions
style(components): format code with prettier

# Avoid
update stuff
fix bug
changes
```

### Commit Best Practices

1. **Make atomic commits**
   - One logical change per commit
   - Don't mix unrelated changes

2. **Write clear messages**
   - Use imperative mood ("add" not "added")
   - Be specific about what changed
   - Explain why if not obvious

3. **Review before committing**
   ```bash
   git status
   git diff
   ```

## 🔄 Pull Request Process

### Before Submitting

1. **Update your branch**
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   git checkout your-feature-branch
   git rebase main
   ```

2. **Run tests**
   ```bash
   npm test
   npm run build
   ```

3. **Check for linting errors**
   ```bash
   npm run lint  # If available
   ```

4. **Test manually**
   - Test on different browsers
   - Test on different screen sizes
   - Check accessibility

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Performance improvement

## Testing
- [ ] Tests pass locally
- [ ] Manual testing completed
- [ ] Cross-browser testing done

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
```

### Review Process

1. **Address feedback**
   - Respond to all comments
   - Make requested changes
   - Update PR description if needed

2. **Keep PR focused**
   - Don't mix multiple features
   - Keep changes related to the PR goal

3. **Be patient**
   - Maintainers will review when available
   - Respond promptly to feedback

## 📚 Documentation

### When to Update Documentation

- Adding new components or features
- Changing API or component props
- Adding new dependencies
- Changing setup or installation steps
- Fixing bugs that affect usage

### Documentation Files

1. **README.md**: Main project documentation
2. **API_REFERENCE.md**: Technical API documentation
3. **CONTRIBUTING.md**: This file
4. **Inline comments**: For complex logic

### Documentation Style

- Use clear, concise language
- Include code examples
- Add screenshots for UI changes
- Keep examples up-to-date

## 🧪 Testing

### Manual Testing Checklist

- [ ] All sections load correctly
- [ ] Navigation works on all pages
- [ ] Animations work as expected
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] External links open correctly
- [ ] No console errors
- [ ] Accessibility features work

### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Testing

- Check page load time
- Verify images are optimized
- Check for unnecessary re-renders
- Test on slow network connections

## 🐛 Reporting Bugs

### Bug Report Template

```markdown
## Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
If applicable

## Environment
- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11]
- Device: [e.g., Desktop]

## Additional Context
Any other relevant information
```

## 💡 Feature Requests

### Feature Request Template

```markdown
## Description
Clear description of the feature

## Motivation
Why is this feature needed?

## Proposed Solution
How should it work?

## Alternatives Considered
Other solutions you've thought about

## Additional Context
Screenshots, mockups, etc.
```

## ❓ Questions?

If you have questions:

1. Check existing documentation
2. Search existing issues
3. Create a new issue with the "question" label

## 🙏 Thank You!

Your contributions make this project better. Thank you for taking the time to contribute!

---

**Last Updated**: 2024

