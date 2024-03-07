# LMS Frontend 


## Prerequisites

- [Node.js](https://nodejs.org/) (v14.0.0 or newer)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/imanisul/Learning-Management-System-frontend.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Sart the development server:   

  ```
  npm run dev


  ```

  ## Features 

Vite: Lightning-fast build tooling for modern web development.
Vue.js: Progressive JavaScript framework for building user interfaces.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Routing: Client-side routing using Vue Router.
State Management: State management using Vuex.
API Integration: Communicate with backend APIs for data retrieval and storage.
Authentication: User authentication and authorization.
Responsive Design: Ensures a great user experience across devices.

### setting up tailwind css

1 . Install Tailwind CSS

```
npm install -D tailwindcss
npx tailwindcss init
```
2. Configure your template paths

```
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  ```
3. Add the Tailwind directives to your CSS

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```



And run all cmd accordingly 
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
