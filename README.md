#React Frontend E-Commerce Platform (Pharmacy Store)
This project is a React single-page application (SPA) simulating a frontend-only e-commerce platform for a pharmacy store. It allows users to browse pharmaceutical products, manage a shopping cart, and simulate booking. Cart data is persisted in browser local storage, eliminating backend complexity and focusing on frontend skills.

#Key Features
Displays pharmaceutical products in a responsive grid layout.

Add and remove items from the cart with dynamic total price updates.

Cart contents persist across sessions using browser local storage.

Checkout simulation that shows cart summary and clears cart on confirmation.

Responsive design adapts across devices from mobile to desktop.

Client-side routing enables smooth navigation without page reloads.

Modular React components ensure maintainable and scalable code.

#Components
App.js: Root component managing routing and layout.

NavBar.jsx: Navigation bar with links to Shop, Cart, Booking, and About pages.

LandingPage.jsx: Welcome page with clean, minimal design.

Shop.jsx: Displays product list with "Add to Cart" buttons using static data.

Cart.jsx: Shows selected cart items, total cost, and supports item removal.

Booking.jsx: Simulates checkout process and clears cart on confirmation.

AboutUs.jsx: Provides project information and purpose.

#Technologies Used
React.js for building the UI.

JavaScript (ES6+) for logic and interactivity.

JSX and HTML5 for markup structure.

CSS3 for styling and responsive layouts.

React Router DOM for client-side routing.

Browser localStorage API to persist cart data.

#How It Works
Users browse products and add them to their cart.

Cart data is saved and loaded from browser localStorage to persist across sessions.

Users can view and modify the cart contents dynamically.

Checkout simulates purchase confirmation and clears the cart.

#Usage
Clone the repository and navigate to the project folder.

Install dependencies using npm install or yarn install.

Start the development server with npm start or yarn start.

Open http://localhost:3000 in your browser to use the application.
