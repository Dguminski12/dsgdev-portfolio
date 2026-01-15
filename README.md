# DSG Development Portfolio

A modern, minimal portfolio website showcasing projects and skills. Built with React and featuring dynamic GitHub API integration to display repositories in real-time.

## 🚀 Features

- **Dynamic GitHub Integration** - Automatically fetches and displays repositories from GitHub API
- **Featured Projects Section** - Highlights top 3 recent projects on the home page
- **GitHub-Style Project List** - Compressed, scannable project cards with language indicators
- **Responsive Design** - Mobile-friendly layout with clean animations
- **Modern UI** - Dark theme with gradient backgrounds and glassmorphism effects
- **Fast & Lightweight** - Built with Vite for optimal performance

## 🛠️ Tech Stack

- **React 19** - UI framework
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Modular styling with custom properties
- **GitHub API** - Dynamic repository data

## 📦 Project Structure

```
src/
├── pages/
│   ├── Home.jsx           # Landing page with hero and featured projects
│   ├── Projects.jsx       # Full GitHub projects list
│   └── styles/
│       ├── Home.css       # Home page styles
│       └── Projects.css   # Projects page styles
├── styles/
│   └── global.css         # Global styles and CSS variables
├── App.jsx                # Main app component with navigation
├── App.css                # Navigation and footer styles
└── main.jsx               # App entry point
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dsgdev-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎨 Customization

### Update GitHub Username

In both `Home.jsx` and `Projects.jsx`, change the GitHub username in the API URL:

```javascript
const res = await fetch('https://api.github.com/users/YOUR_USERNAME/repos?sort=updated');
```

### Modify Featured Projects Count

In `Home.jsx`, adjust the slice value to show more or fewer featured projects:

```javascript
setProjects(data.slice(0, 3)); // Change 3 to desired number
```

### Customize Colors

Edit CSS variables in `global.css`:

```css
:root {
  --bg: #0b0f14;        /* Background color */
  --card: #111827;      /* Card background */
  --text: #e5e7eb;      /* Primary text */
  --muted: #a1a1aa;     /* Secondary text */
  --line: rgba(255,255,255,0.08);  /* Borders */
}
```

### Update Personal Information

- **Contact Links**: Update GitHub and email URLs in `App.jsx` and `Home.jsx`
- **Skills**: Edit the pill list in `Home.jsx`
- **Bio**: Modify the hero section text in `Home.jsx`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project can be deployed to any static hosting service:

- **Cloudflare Pages** - Automatic builds from Git
- **Vercel** - Zero-config deployment
- **Netlify** - Drag-and-drop or Git integration
- **GitHub Pages** - Free hosting for public repos

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome via issues or pull requests.

---

Built with ❤️ by DSG Development
