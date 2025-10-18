# 🚨 IoT-AI Public Safety - Frontend# 🚨 IoT-AI Public Safety - Frontend# React + Vite



Modern, interactive React frontend for the IoT-AI Public Safety emergency alert system with smooth animations and minimal design.



---Modern, interactive React frontend for the IoT-AI Public Safety emergency alert system with smooth animations and minimal design.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## ✨ Features



- 🎨 **Minimal UI Design** - Clean, modern interface with dark/light theme## ✨ FeaturesCurrently, two official plugins are available:

- 🌓 **Dark/Light Mode** - Seamless theme switching with localStorage persistence

- 🚀 **Smooth Animations** - Powered by Framer Motion

- 📱 **Fully Responsive** - Works on all devices

- 🎭 **Interactive Components** - Hover effects and smooth transitions- 🎨 **Minimal UI Design** - Clean, modern interface with dark theme- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- 📊 **Real-time Dashboard** - Monitor alerts and system status

- 🗺️ **Map Integration Ready** - Prepared for Google Maps API- 🚀 **Smooth Shuttle Animations** - Powered by Framer Motion- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- 🧭 **Multi-Page Navigation** - Landing, Dashboard, About, How It Works, Contact

- 📱 **Fully Responsive** - Works on all devices

---

- 🎭 **Interactive Components** - Hover effects and transitions## React Compiler

## 🛠️ Tech Stack

- 📊 **Real-time Dashboard** - Monitor alerts and system status

| Technology | Purpose |

|------------|---------|- 🗺️ **Map Integration Ready** - Prepared for Google Maps APIThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

| **React 19.1.1** | UI Framework with latest features |

| **Vite 7.1.9** | Lightning-fast build tool and dev server |

| **Framer Motion 12.x** | Smooth animations and transitions |

| **React Router DOM 7.x** | Client-side routing |## 🛠️ Tech Stack## Expanding the ESLint configuration

| **React Icons 5.x** | Comprehensive icon library |

| **CSS3** | Custom styling with CSS variables for theming |



---- **React.js** - UI FrameworkIf you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## 📁 Project Structure- **Vite** - Build tool for faster development

- **Framer Motion** - Animation library

```- **React Router DOM** - Navigation

frontend/- **React Icons** - Icon library

├── public/                     # Static assets- **CSS3** - Custom styling with animations

├── src/

│   ├── assets/                 # Images, fonts, etc.## 🚀 Getting Started

│   ├── components/             # Reusable components

│   │   ├── Navbar.jsx          # Navigation bar with theme toggle### Prerequisites

│   │   └── Navbar.css

│   ├── context/                # React Context providers- Node.js (v14 or higher)

│   │   └── ThemeContext.jsx    # Theme management- npm or yarn

│   ├── pages/                  # Page components

│   │   ├── LandingPage.jsx     # Home page with hero section### Installation

│   │   ├── Dashboard.jsx       # Alert monitoring dashboard

│   │   ├── About.jsx           # About the project1. Navigate to the frontend directory:

│   │   ├── HowItWorks.jsx      # System workflow explanation```bash

│   │   ├── Contact.jsx         # Contact form and FAQcd frontend

│   │   └── *.css               # Page-specific styles```

│   ├── App.jsx                 # Main app component

│   ├── App.css                 # Global styles with theme variables2. Install dependencies:

│   ├── main.jsx                # Application entry point```bash

│   └── index.css               # Base stylesnpm install

├── index.html                  # HTML template```

├── package.json                # Dependencies and scripts

├── vite.config.js              # Vite configuration3. Start the development server:

└── README.md                   # This file```bash

```npm run dev

```

---

4. Open your browser and visit:

## 🚀 Getting Started```

http://localhost:5173

### Prerequisites```



- **Node.js** (v18 or higher)## 📁 Project Structure

- **npm** or **yarn** or **pnpm**

```

### Installationfrontend/

├── src/

1. **Navigate to the frontend directory:**│   ├── components/      # Reusable components

   ```bash│   ├── pages/          # Page components

   cd frontend│   │   ├── LandingPage.jsx

   ```│   │   ├── LandingPage.css

│   │   ├── Dashboard.jsx

2. **Install dependencies:**│   │   └── Dashboard.css

   ```bash│   ├── styles/         # Global styles

   npm install│   ├── App.jsx         # Main app component

   # or│   ├── App.css         # App styles

   yarn install│   ├── main.jsx        # Entry point

   # or│   └── index.css       # Global CSS

   pnpm install├── public/             # Static assets

   ```├── package.json

└── vite.config.js

3. **Start the development server:**```

   ```bash

   npm run dev## 🎨 Pages

   # or

   yarn dev### Landing Page (`/`)

   # or- Hero section with shuttle animation

   pnpm dev- Key features showcase

   ```- Tech stack display

- Call-to-action buttons

4. **Open your browser:**- Animated background with gradient orbs

   ```

   http://localhost:5173### Dashboard (`/dashboard`)

   ```- Real-time alert monitoring

- System statistics cards

---- Alert list with status indicators

- Interactive map placeholder (ready for Google Maps)

## 📜 Available Scripts- Filter and sort functionality



| Command | Description |## 🎭 Animation Features

|---------|-------------|

| `npm run dev` | Start development server with HMR |- **Shuttle Animation** - Floating emergency icon in hero

| `npm run build` | Build for production |- **Fade In** - Smooth entrance animations

| `npm run preview` | Preview production build locally |- **Hover Effects** - Interactive card transformations

| `npm run lint` | Run ESLint to check code quality |- **Stagger Children** - Sequential element animations

- **Pulse Effects** - Active status indicators

---- **Gradient Orbs** - Floating background elements



## 🌓 Theme System## 🎨 Color Scheme



The app includes a robust dark/light theme toggle:```css

--primary-color: #00C853    /* Green */

### Features--secondary-color: #00E676  /* Light Green */

- **Toggle Button:** Sun/moon icon in navbar--dark-bg: #0a0a0a         /* Dark Background */

- **Smooth Transitions:** CSS transitions for all theme changes--card-bg: #1a1a1a         /* Card Background */

- **Persistent:** Saves preference in localStorage--text-primary: #ffffff     /* White Text */

- **CSS Variables:** Dynamic theming with `[data-theme]` attribute--text-secondary: #b0b0b0   /* Gray Text */

--accent-red: #ff3d00       /* Alert Red */

### Theme Variables--accent-blue: #2196f3      /* Info Blue */

```css```

/* Dark Theme (Default) */

--dark-bg: #0a0a0a## 🔧 Available Scripts

--card-bg: #1a1a1a

--text-primary: #ffffff```bash

--text-secondary: #b0b0b0# Start development server

npm run dev

/* Light Theme */

--dark-bg: #f5f5f5# Build for production

--card-bg: #ffffffnpm run build

--text-primary: #1a1a1a

--text-secondary: #666666# Preview production build

```npm run preview



### Usage# Lint code

```jsxnpm run lint

import { useTheme } from './context/ThemeContext';```



function MyComponent() {## 📦 Dependencies

  const { isDarkMode, toggleTheme } = useTheme();

  ```json

  return ({

    <button onClick={toggleTheme}>  "react": "^18.3.1",

      {isDarkMode ? '☀️' : '🌙'}  "react-dom": "^18.3.1",

    </button>  "react-router-dom": "^6.x.x",

  );  "framer-motion": "^11.x.x",

}  "react-icons": "^5.x.x"

```}

```

---

## 🚧 Future Enhancements

## 📄 Pages

- [ ] Google Maps API integration

### 1. **Landing Page** (`/`)- [ ] Real-time Firebase data connection

- Hero section with animated shuttle emoji- [ ] User authentication

- Key features showcase- [ ] Advanced filtering and search

- Stats and metrics- [ ] Export reports functionality

- Call-to-action buttons- [ ] Mobile app version

- [ ] Dark/Light theme toggle

### 2. **Dashboard** (`/dashboard`)- [ ] Multiple language support

- Real-time alert monitoring

- Alert cards with pulse animations## 🤝 Contributing

- Status indicators (Active, Resolved, Pending)

- Map placeholder for location tracking1. Fork the repository

- Statistics overview2. Create your feature branch (`git checkout -b feature/AmazingFeature`)

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)

### 3. **About** (`/about`)4. Push to the branch (`git push origin feature/AmazingFeature`)

- Mission and vision5. Open a Pull Request

- Core values (Security, Speed, AI-Powered, Reliability)

- Project story## 📝 Notes

- Team information

- GSSoC'25 participation details- The dashboard currently displays mock data for demonstration

- Google Maps integration requires an API key (add to environment variables)

### 4. **How It Works** (`/how-it-works`)- Firebase configuration will be needed for real-time data

- 6-step emergency response workflow

- Technology stack breakdown## 🔗 Links

- Data flow architecture

- Performance metrics- [Main Repository](https://github.com/Nithish-o7/IoT-AI-Public-Safety)

- [Documentation](../Docs/)

### 5. **Contact** (`/contact`)- [Contributing Guidelines](../CONTRIBUTING.md)

- Contact form with validation

- Email, GitHub, location info## 📄 License

- Social media links

- FAQ sectionThis project is part of IoT-AI Public Safety and follows the MIT License.



------



## 🎨 Design Features**Built with ❤️ **


### Animations
- **Framer Motion** variants for smooth enter/exit animations
- **Hover effects** on cards and buttons
- **Stagger animations** for lists and grids
- **Pulse effects** for real-time indicators
- **Floating animations** for hero elements

### Responsive Breakpoints
```css
/* Mobile */
@media (max-width: 768px)

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px)

/* Desktop */
@media (min-width: 1025px)
```

---

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the frontend directory:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_GOOGLE_MAPS_API_KEY=your_maps_api_key
```

### Vite Config
The project uses standard Vite configuration with React plugin:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

---

## 🧩 Component Architecture

### Reusable Components
- **Navbar:** Global navigation with theme toggle
- **ThemeContext:** Global state management for theme

### Page Components
- Each page is self-contained with its own CSS
- Uses Framer Motion for animations
- Responsive design built-in

---

## 🚧 Roadmap

### Completed ✅
- [x] Landing page with animations
- [x] Dashboard with mock alerts
- [x] Dark/light theme toggle
- [x] About, How It Works, Contact pages
- [x] Responsive design
- [x] Navbar component

### In Progress 🚧
- [ ] Backend API integration
- [ ] Firebase real-time data connection
- [ ] Google Maps integration
- [ ] Contact form submission handler

### Planned 📋
- [ ] User authentication
- [ ] Admin panel
- [ ] Push notifications
- [ ] PWA capabilities
- [ ] Multi-language support

---

## 🤝 Contributing

We welcome contributions! This project is part of **GSSoC'25**.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Commit with descriptive messages:**
   ```bash
   git commit -m "feat: add new feature"
   ```
5. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**

### Contribution Areas
- 🎨 UI/UX improvements
- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation
- ♿ Accessibility enhancements
- 🌐 Internationalization

---

## 📚 Documentation

- **[IMPLEMENTATION.md](./IMPLEMENTATION.md)** - Implementation details and summary
- **[THEME_HEADER_IMPROVEMENTS.md](./THEME_HEADER_IMPROVEMENTS.md)** - Theme system documentation
- **[NEW_FEATURES.md](./NEW_FEATURES.md)** - Recent feature additions

---

## 🐛 Known Issues

None currently! Report issues on GitHub.

---

## 📝 Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** compatible formatting
- **Consistent naming conventions**

Run linter:
```bash
npm run lint
```

---

## 🔗 Links

- **GitHub Repository:** [IoT-AI-Public-Safety](https://github.com/0xASR-dev/IoT-AI-Public-Safety)
- **GSSoC'25:** [GirlScript Summer of Code](https://gssoc.girlscript.tech/)
- **Live Demo:** Coming soon!

---

## 📄 License

This project is part of GSSoC'25 and follows the repository's main license.

---

## 🙏 Acknowledgments

- **GSSoC'25** for the opportunity
- **React Team** for the amazing framework
- **Vite Team** for the blazing-fast build tool
- **Framer Motion** for smooth animations
- All contributors and maintainers

---

## 📞 Support

For questions or support:
- 📧 Email: iotai.safety@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/0xASR-dev/IoT-AI-Public-Safety/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/0xASR-dev/IoT-AI-Public-Safety/discussions)

---

**Built with ❤️ for GSSoC'25 by the IoT-AI Public Safety Team**

🚀 **Happy Coding!**
