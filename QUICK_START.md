# Quick Start Guide

Get up and running with the Redes Sociales Costa Rica project in minutes.

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/bacosta30762/RedesSocialesCR.git
cd RedesSocialesCR
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Development Server

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📦 What You Get

- ✅ React 19 application
- ✅ Responsive Bootstrap 5 design
- ✅ Smooth animations (AOS)
- ✅ Interactive carousel
- ✅ Tabbed interface
- ✅ All components ready to use

## 🎯 Project Structure

```
src/
├── components/     # All React components
├── assets/        # CSS, images, vendor libraries
├── App.jsx        # Main app component
└── index.js       # Entry point
```

## 📝 Common Commands

```bash
# Development
npm start          # Start dev server

# Production
npm run build      # Build for production
npm run test       # Run tests

# Deployment
npm run deploy     # Deploy to GitHub Pages
```

## 🔧 Quick Customization

### Change Site Title

Edit `src/components/Header.jsx`:
```jsx
<h1 className="sitename">Your Title Here</h1>
```

### Modify Hero Content

Edit `src/components/Hero.jsx`:
```jsx
<Carousel.Item>
  <div className="carousel-container">
    <h2>Your Heading</h2>
    <p>Your description</p>
  </div>
</Carousel.Item>
```

### Add New Section

1. Create component in `src/components/`
2. Import in `src/App.jsx`
3. Add to navigation in `src/components/Header.jsx`

## 📚 Next Steps

- Read [README.md](README.md) for full documentation
- Check [API_REFERENCE.md](API_REFERENCE.md) for component APIs
- See [DEVELOPMENT.md](DEVELOPMENT.md) for development guide
- Review [CONTRIBUTING.md](CONTRIBUTING.md) to contribute

## 🆘 Need Help?

- Check [Troubleshooting](#troubleshooting) section
- Review existing documentation
- Open an issue on GitHub

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Module Not Found

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
rm -rf build
npm run build
```

---

**Ready to start?** Run `npm start` and begin coding! 🎉

