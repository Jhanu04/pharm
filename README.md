# React Frontend E-Commerce Platform (Pharmacy Store)

This project is a React single-page application (SPA) simulating a frontend-only e-commerce platform for a pharmacy store. It allows users to browse pharmaceutical products, manage a shopping cart, and simulate booking. Cart data is saved in browser local storage, avoiding backend complexity and focusing on frontend skills.

## Key Features

- Browse pharmaceutical products in a responsive grid layout  
- Add and remove items from the cart with dynamic total price updates  
- Cart contents persist across browser sessions using local storage  
- Checkout simulation that shows cart summary and clears cart on confirmation  
- Responsive design adapts across devices from mobile to desktop  
- Client-side routing for smooth navigation without page reloads  
- Modular React components for maintainable and scalable code  

## Components

- `App.js`: Root component managing routing and layout  
- `NavBar.jsx`: Navigation bar linking Shop, Cart, Booking, and About pages  
- `LandingPage.jsx`: Welcome page with clean, minimal design  
- `Shop.jsx`: Displays product list with "Add to Cart" buttons using static data  
- `Cart.jsx`: Shows selected cart items, total cost, and supports item removal  
- `Booking.jsx`: Simulates checkout process and clears cart on confirmation  
- `AboutUs.jsx`: Provides project information and purpose  

## Technologies Used

- React.js for building the UI  
- JavaScript (ES6+) for logic and interactivity  
- JSX and HTML5 for markup structure  
- CSS3 for styling and responsive layouts  
- React Router DOM for client-side routing  
- Browser localStorage API to persist cart data  

## How It Works

1. Users browse products and add them to their cart  
2. Cart data is saved and loaded from browser localStorage to persist across sessions  
3. Users can view and modify the cart contents dynamically  
4. Checkout simulates purchase confirmation and clears the cart  

## Usage

- Clone the repository and navigate to the project folder  
- Install dependencies using `npm install` or `yarn install`  
- Start the development server with `npm start` or `yarn start`  
- Open `http://localhost:3000` in your browser to use the application  

