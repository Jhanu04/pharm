React Frontend E-Commerce Platform (Pharmacy Store)
Project Overview
This project is a single-page application (SPA) built using React.js, simulating a frontend-only e-commerce platform for a pharmacy store. It provides an interactive and modular user experience with features like product browsing, cart management, and a booking simulation. A key design choice was to utilize browser local storage for managing and persisting user data, specifically cart contents, instead of a traditional backend and database. This approach simplifies the infrastructure while demonstrating core frontend engineering principles and prepares the ground for future full-stack expansion.

Features
Product Browse
Users can view a list of pharmaceutical products displayed in a responsive grid layout.

Cart Management
Users can add products to their cart, view selected items, dynamically calculate the total price, and remove items.

Persistent Cart
Cart contents are saved across user sessions using browser local storage.

Booking Simulation
A checkout page simulates the final purchase step, displaying a cart summary and clearing the cart upon confirmation.

Responsive Design
The application is designed to adapt fluidly across various device sizes, from smartphones to desktops.

Client-Side Routing
Seamless navigation between different views (Landing, Shop, Cart, Booking, About Us) without page reloads, using react-router-dom.

Modular Component Architecture
Clean code structure using reusable React components for maintainability and scalability.

Technology Stack
React.js: A JavaScript library for building user interfaces.

JavaScript (ES6+): For scripting and component logic.

HTML5 with JSX: To define UI structures inside React components.

CSS3: For styling and layout.

React Router DOM: For client-side navigation and route handling.

Browser Local Storage API: To persist user data such as cart contents across sessions.

System Architecture
The application follows a modular, component-based architecture and is designed as a Single Page Application (SPA). It comprises the following major views/components:

App.js: The root component defining the layout and managing routing.

NavBar.jsx: A reusable navigation bar providing links to main sections (Shop, Cart, Booking).

LandingPage.jsx: The initial page introducing the application with a minimalist, responsive design.

Shop.jsx: Displays a list of pharmaceutical products with "Add to Cart" functionality. Product data is imported from a static data.js file.

Cart.jsx: Manages selected products, displaying items, total cost, and allowing item removal. It uses localStorage for persistence.

Booking.jsx: Simulates the checkout process, displaying a cart summary and clearing the cart from localStorage upon confirmation.

AboutUs.jsx: Provides information about the project's purpose, adding realism and building trust.

Data Management
Data persistence is handled locally within the browser using the localStorage API. Cart data and booking-related states are stored as serialized JSON strings and retrieved upon page load to maintain state across sessions.

Storing data:
localStorage.setItem("cart", JSON.stringify(cartItems));

Retrieving data:
const savedCart = JSON.parse(localStorage.getItem("cart"));

This approach simulates backend-like behavior for persistent cart functionality without server integration.

Setup and Installation
Clone the repository:
git clone <your-repository-url>
cd <your-project-folder>

Install dependencies:
npm install
or
yarn install

Start the development server:
npm start
or
yarn start

The application should open in your browser at http://localhost:3000.

Limitations
Client-Side Data Storage: localStorage is not suitable for sensitive or large amounts of data.

No Authentication: The platform lacks user authentication or an admin interface.

Hardcoded Data: All product data is static and hardcoded; it cannot be modified dynamically.

Simulated Booking: The booking confirmation is simulated and does not include actual transaction or delivery processes.

Future Enhancements
Backend Integration: Integrate with a backend (e.g., Node.js and MongoDB) to manage users, products, and orders.

Authentication System: Implement user registration, login, and session handling.

Admin Dashboard: Create an interface for product management (add, edit, remove).

Search and Filter: Add functionality to search and filter products by categories, price, etc.

Payment Gateway Integration: Implement real transaction capabilities using services like Stripe or Razorpay.

Image Hosting: Serve product images via a Content Delivery Network (CDN) or cloud storage.

Detailed Product Pages: Include user reviews, ratings, and more comprehensive product information.

