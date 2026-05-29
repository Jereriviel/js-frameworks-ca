# JavaScript Frameworks Course Assignment

![image](https://jereriviel-js-frameworks.netlify.app/images/meerkat_thumbnail.webp)

## Goal

Build a fully functional, responsive online shop using React or Next.js with TypeScript, demonstrating the ability to integrate APIs, manage state, apply software architecture principles, and justify framework choices in a real-world digital solution.

## Description

Build a fully functional online shop using React and Next.js. The app must fetch products from a REST API, display them in a user-friendly layout, provide product detail pages, implement search and sorting behaviour, and include a complete shopping cart and checkout flow. You must also create a validated contact form and ensure the full site works well on desktop and mobile.

The application allows users to:

- Browse a list of products
- View detailed information about each product
- Search for products from the homepage
- Add and remove items from a shopping cart
- Adjust quantities and view total cost
- Complete a checkout flow
- Send a message through a validated contact form

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- React Router

## UI & UX Libraries

- React Toastify – Displays toast notifications for user feedback
- Headless UI – Provides fully accessible and customizable UI components
- Framer Motion - Used for smooth animations and transitions

## Form Handling

- React Hook Form - Efficient form state management
- Zod -Schema-based validation integrated with React Hook Form

## State Management

- Zusand - Lightweight state management used to manage the shopping cart state

## Data Fetching

- Tanstack Query - Handles server state, data fetching, caching, and loading/error states

## Installing

1. Clone the repo:

```bash
git clone https://github.com/Jereriviel/js-frameworks-ca.git
```

2. Install dependencies

```bash
npm install
```

3. Start the local dev server:

```bash
npm run dev
```

4. Build the project for production:

```bash
npm run build
```

## Linting and Formatting

Run Prettier:

```bash
npm run format
```

Run ESLint:

```bash
npm run lint
```

## Pre-Commit Hooks with Husky

Husky is configured to automatically check linting and formatting before each commit:

```bash
npm run prepare
```

## Deployment

This site is deployed using Netlify: https://jereriviel-js-frameworks.netlify.app/

## Contact

If you have any questions or feedback, feel free to contact me on [LinkedIn](www.linkedin.com/in/carina-mariell-pedersen-2a8648403).
