# My-enjoyable-shopping

Demo - live version available at:
[**My enjoyable shopping – GitHub Pages Demo**](https://wojciechsadowskinwd.github.io/My-enjoyable-shopping/)

A fully responsive RWD single-page React application (SPA) designed for both mobile devices and larger screens.  
The project includes a home page and several additional subpages. Through the login form, the user gains access to the core of the application – an interactive tool for creating colourful shopping lists for selected shops. Lists can be freely managed thanks to a wide range of available options.

### Project Goals

- Build a fast, efficient, responsive and visually appealing SPA leading to a functional shopping list application.
- Showcase the ability to manage state with **Context API** (handling data from more complex objects) and hooks such as **useReducer**.
- Demonstrate the integration of external libraries (e.g. **react-slick**, **react-intersection-observer**).
- Apply practical skills in building React components, using hooks, and styling with **Sass/SCSS**.
- Present original, creative UI design.
- Configure a reliable build process and host the project on GitHub Pages.

### Technology Stack

- **React 18**
- **React Router** – SPA routing with `basename` support
- **context API** – global state management prepared for further extension
- **Sass/SCSS** – layout, responsiveness, variables, module files

## Technologies and Solutions Used in the Project

The project is built with modern React and several additional libraries.  
Below is an overview of React hooks, external libraries, custom hooks, and SCSS techniques applied in the code.

### Libraries

- **react** – base library, component model and state management
- **react-router-dom** – client-side routing
- **react-transition-group** – simple animations and transitions
- **uuid** – generation of unique UUID identifiers
- **react-slick** - responsive carousel/slider component based on _slick-carousel_
- **react-intersection-observer** - tracking element visibility within the viewport

#### Core React

- **useState** – manages local component state
- **useEffect** – handles side effects (e.g. setTimeout, fetching data, DOM updates) after rendering
- **useContext** – consumes values provided via Context API
- **useReducer** – state management with reducer logic (similar to Redux)
- **useRef** – stores mutable values across renders (e.g. DOM references)

#### React Router

- **useLocation** – Provides information about the current route (path, query params)
- **useNavigate** – Enables programmatic navigation between routes

### Custom Hooks

- **useLists** – simplifies working with shopping lists stored in context
- **useLogin** – simplifies user login logic with context

### SCSS (Sass)

- Variables (`$variable`)
- Module system (`@import`)
- CSS Modules integration (`*.module.scss`)

## Screenshots

### Mobile views

![Mobile 1](docs/screenshots/mobile_1.jpg)
![Mobile 2](docs/screenshots/mobile_2.jpg)
![Mobile 3](docs/screenshots/mobile_3.jpg)
![Mobile 4](docs/screenshots/mobile_4.jpg)

### Desktop views (Homepage)

![Desktop 1](docs/screenshots/desktop_1.jpg)
![Desktop 2](docs/screenshots/desktop_2.jpg)
![Desktop 3](docs/screenshots/desktop_3.jpg)
![Desktop 4](docs/screenshots/desktop_4.jpg)
![Desktop 5](docs/screenshots/desktop_5.jpg)
![Desktop 6](docs/screenshots/desktop_6.jpg)
![Desktop 7](docs/screenshots/desktop_7.jpg)

#### Contact page

![Desktop 8](docs/screenshots/contact_1.jpg)

#### OrderPremium page

![Desktop 9](docs/screenshots/order_1.jpg)
![Desktop 10](docs/screenshots/order_2.jpg)

#### AboutUs page

![Desktop 11](docs/screenshots/aboutUs_1.jpg)

#### Login page
![Desktop 12](docs/screenshots/desktop_login_1.jpg)
![Desktop 13](docs/screenshots/desktop_login_2.jpg)

#### App page

![Desktop 14](docs/screenshots/app_1.jpg)
![Desktop 15](docs/screenshots/app_2.jpg)
![Desktop 16](docs/screenshots/app_3.jpg)
![Desktop 17](docs/screenshots/app_4.jpg)
![Desktop 18](docs/screenshots/app_5.jpg)

## Installation
Follow the steps below to run the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/wojciechsadowskinwd/My-enjoyable-shopping.git
   cd My-enjoyable-shopping
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

   Or with yarn:
    ```bash
    yarn install
    ```

3. **Start the development server**
   ```bash
   npm start
   ```

 * The app will be available at: http://localhost:3000 

4. **Build the project for production**

   ```bash
   npm run build
   ```
   * This will create an optimized production build in the build/ directory.

   ```

5. **Deploy to GitHub Pages**
   The project is configured for deployment on GitHub Pages.
   To publish the latest version, run:
    ```bash
    npm run deploy


## 📄 License

This project is open source and licensed under the MIT License.  
You are free to use, modify, and distribute it under the terms of this license.
* The project uses logos of well-known stores. The application is not intended for commercial use and serves educational purposes only, showcasing the author's skills.
