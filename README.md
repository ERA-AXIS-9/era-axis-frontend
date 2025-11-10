# ERA AXIS Website

A modern, responsive web application for ERA AXIS - Empowering Innovators, Transforming Communities. This platform showcases STEM education, circular manufacturing, open-source software, and community makerspaces across Africa.

## 🚀 Overview

ERA AXIS is an innovation ecosystem advancing technology education, circular manufacturing, and open software to solve real community challenges across Africa. The website serves as a comprehensive platform for:

- **Education Programs** - Technology education and skill development
- **Circular Manufacturing** - Sustainable e-waste transformation and upcycling
- **Open Source Software** - Community-driven digital solutions
- **Open Labs** - Collaborative makerspaces and innovation hubs
- **Partnerships & Donations** - Community engagement and support

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.7** - Fast development server and build tool
- **React Router 6.23.1** - Client-side routing
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Redux Toolkit 2.2.5** - State management
- **Framer Motion 11.2.10** - Animations and transitions
- **Lucide React** - Modern icon library
- **Axios 1.7.2** - HTTP client for API requests

### Development Tools
- **ESLint 9.36.0** - Code linting and quality
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
era-axis-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx      # Main navigation
│   │   ├── Footer.jsx      # Footer component
│   │   ├── modals/         # Modal components
│   │   └── pages/          # Page-specific components
│   │       ├── about/      # About page components
│   │       ├── contact/    # Contact page components
│   │       ├── donate/     # Donation components
│   │       ├── education/  # Education components
│   │       ├── manufacturing/ # Manufacturing components
│   │       ├── open-labs/  # Open labs components
│   │       ├── partnership/ # Partnership components
│   │       └── software/   # Software components
│   ├── pages/              # Page components
│   │   ├── public/         # Public-facing pages
│   │   ├── admin/          # Admin dashboard
│   │   ├── auth/           # Authentication pages
│   │   └── support/        # Support pages
│   ├── services/           # API services
│   ├── store/              # Redux store configuration
│   ├── App.jsx             # Main App component
│   └── main.jsx            # Entry point
├── .env                    # Environment variables
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd era-axis-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy .env.example to .env (if exists)
   # Update VITE_API_BASE_URL with your backend URL
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📋 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🌐 Features

### Core Pages
- **Home** - Hero carousel with service showcase
- **About** - Organization story, mission, and team
- **Education** - Program details and enrollment
- **Manufacturing** - Circular manufacturing services
- **Software** - Open-source software solutions
- **Open Labs** - Makerspace facilities and booking
- **Projects** - Impact stories and case studies
- **Contact** - Get in touch and support

### Interactive Features
- **Dynamic Hero Carousel** - Auto-rotating service showcase
- **Multi-step Enrollment** - Education program registration
- **Service Booking** - Lab and technician scheduling
- **Donation System** - Multiple payment options
- **Contact Forms** - Service-specific inquiries
- **Responsive Design** - Mobile-first approach

### Navigation & Routing
- **Service-specific Navbars** - Context-aware navigation
- **Breadcrumb Navigation** - Clear page hierarchy
- **Redirect Handling** - Seamless URL management
- **Mobile Navigation** - Optimized mobile experience

##  Design System

### Color Palette
- **Primary**: `#39366F` (Deep Purple)
- **Secondary**: `#2a2850` (Dark Purple)
- **Accent**: `#5B9BD5` (Blue)
- **Success**: `#002D25` (Dark Green)

### Typography
- **Headings**: Font-black, tight tracking
- **Body**: Medium weight, good readability
- **Responsive**: Adaptive sizing across devices

### Components
- **Cards** - Rounded corners, shadow effects
- **Buttons** - Hover states, transitions
- **Forms** - Clean, accessible inputs
- **Modals** - Overlay dialogs for actions

## 🔧 Configuration

### Environment Variables
```bash
VITE_API_BASE_URL=http://localhost:5000/api
```

### Build Configuration
- **Vite** - Optimized bundling and HMR
- **Tailwind CSS** - Utility-first styling
- **React Plugin** - Fast refresh support

##  Responsive Design

The website is fully responsive with:
- **Mobile-first approach** (< 640px)
- **Tablet optimization** (640px - 1024px)
- **Desktop experience** (> 1024px)
- **Large screen support** (> 1280px)

## Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Environment Setup
- Update `VITE_API_BASE_URL` for production API
- Configure build optimizations as needed
- Set up proper hosting for static assets

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  Development Notes

### State Management
- Redux Toolkit configured and ready for implementation
- Slices for auth, content, and UI state planned
- Currently using local component state

### API Integration
- Axios configured with base URL
- Request interceptors for auth tokens
- Form submissions ready for backend integration

### Code Quality
- ESLint configuration for consistent code style
- React hooks and refresh plugins
- Component-based architecture

## Known Issues

- Backend API integration pending
- Form submissions use console.log (placeholder)
- Payment processing needs implementation
- Redux state management not fully implemented

## 📄 License

This project is private property of ERA AXIS. All rights reserved.

##  Support

For questions or support:
- **Email**: info@eraaxis.com
- **Address**: ERA AXIS HQ – Essikado, Ghana
- **Phone**: +233 [insert]

---

**Built with ❤️ for the ERA AXIS community**

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
