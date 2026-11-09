# Janodi Chamodya - Portfolio

This is my portfolio website. The site presents professional experience, education, technical skills, projects, leadership activities, certifications, and contact information through an interactive, responsive interface.

## Features

- Responsive portfolio layout for desktop, tablet and mobile
- Dark and light themes with persisted user preference
- Animated hero section with video background
- Interactive project cards with detailed project modals
- Experience, education, skills, leadership, and certification sections
- AI Digital Twin with a built-in portfolio knowledge engine
- Optional OpenAI integration for the AI Digital Twin
- Contact section and CV request workflow
- Scroll progress indicator and interactive visual effects

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/Chamodya678442/Portfolio.git
cd Portfolio
npm install
```

### Development

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

### Production Build

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Optional OpenAI Configuration

The AI Digital Twin works without an API key using the built-in knowledge engine. To enable OpenAI integration, create a local `.env` file:

```env
VITE_OPENAI_API_KEY=your_openai_api_key
```

Never commit `.env` files or API keys. Use `.env.example` as the configuration template.

## Project Structure

```text
Public/                 Static assets, CV, images, and video
src/
  components/           Reusable portfolio sections and UI components
  data/                 Portfolio content and structured data
  types/                TypeScript type definitions
  utils/                AI Digital Twin logic
  App.tsx               Main application composition
  index.css             Global styles and Tailwind layers
  main.tsx              Application entry point
```

## Deployment

Build the project with `npm run build`, then deploy the generated `dist/` directory to a static hosting provider such as GitHub Pages, Netlify, or Vercel.

## License

This project is a personal portfolio. Please contact the author before reusing its content, branding, images, or personal information.

## Contact

- LinkedIn: [Janodi Chamodya](https://www.linkedin.com/in/janodi-chamodya)
- GitHub: [Chamodya678442](https://github.com/Chamodya678442)
