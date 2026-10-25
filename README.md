# ShopifyStorefront

### Custom E-Commerce Platform Powered by Angular, ASP.NET Core & Shopify

A modern e-commerce storefront designed to deliver a seamless online shopping experience, combining a custom-built frontend and backend with Shopify's commerce infrastructure.

The goal is to build a scalable, maintainable, and secure platform where customers can browse products, manage their shopping cart, and complete purchases through Shopify-powered checkout.

---

## Overview

**ShopifyStorefront** is a full-stack e-commerce project that integrates a custom web application with Shopify to handle essential commerce operations.

Instead of relying entirely on a pre-built storefront, this project aims to provide greater control over the user interface, application architecture, and customer experience while leveraging Shopify for product management, checkout, and order administration.

### Key Features

- **Custom Storefront** — Responsive and user-friendly shopping experience.
- **Product Catalog** — Retrieve and display products using Shopify's Storefront API.
- **Shopping Cart** — Add, remove, and manage products before checkout.
- **Secure Checkout** — Redirect customers to Shopify Checkout for payment processing.
- **Order Management** — Leverage Shopify to manage orders and sales.
- **Backend API** — ASP.NET Core Web API for server-side operations and integration logic.
- **Shopify Integration** — Connect the custom application with Shopify's commerce ecosystem.
- **Webhook Integration** — Planned support for receiving Shopify order events and synchronizing relevant information.
- **Responsive Design** — Interface designed for desktop, tablet, and mobile devices.

> Features are being developed incrementally. The list describes the project's goals, not necessarily functionality already implemented.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Angular | Frontend framework |
| TypeScript | Frontend application logic |
| HTML5 | Application structure |
| SCSS | Styling and responsive design |
| C# | Backend development |
| ASP.NET Core Web API | REST API and server-side logic |
| Shopify Storefront API | Product catalog and cart integration |
| Shopify Checkout | Checkout and payment flow |
| Shopify Webhooks | Order event notifications and synchronization |
| Git & GitHub | Version control and collaboration |

---

## Architecture

The application is designed around three main components:

```text
┌──────────────────────────────┐
│          Frontend            │
│       Angular + SCSS         │
│                              │
│  Product Catalog             │
│  Shopping Cart               │
│  Checkout Experience         │
└──────────────┬───────────────┘
               │
        Storefront API
               │
               ▼
┌──────────────────────────────┐
│           Shopify            │
│                              │
│  Products & Collections      │
│  Checkout & Payments         │
│  Orders & Notifications      │
└──────────────┬───────────────┘
               │
          Webhooks
               │
               ▼
┌──────────────────────────────┐
│           Backend            │
│     C# + ASP.NET Core        │
│                              │
│  REST API                    │
│  Shopify Integration         │
│  Webhook Validation          │
│  Order Event Processing      │
└──────────────────────────────┘
```

The final integration flow will depend on the features implemented. Shopify will remain responsible for checkout and payment processing, while the backend will handle the server-side operations that require it.

---

## Project Structure

The repository is intended to follow a modular structure:

```text
ShopifyStorefront/
├── frontend/
│   └── Angular application
│
├── backend/
│   └── ASP.NET Core Web API
│
├── .gitignore
└── README.md
```

Each application will have its own responsibilities, making the codebase easier to maintain, test, and extend.

---

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.dev/tools/cli)
- [.NET SDK](https://dotnet.microsoft.com/download)
- [Git](https://git-scm.com/)
- A Shopify development store with the required API access

### 1. Clone the repository

```bash
git clone https://github.com/AdrianMorataya/ShopifyStorefront.git
cd ShopifyStorefront
```

### 2. Set up the frontend

```bash
cd frontend
npm install
ng serve
```

Open `http://localhost:4200` in your browser.

### 3. Set up the backend

In a separate terminal:

```bash
cd backend
dotnet restore
dotnet run
```

Use the URL displayed by the .NET application to access the API.

> These commands assume the Angular and ASP.NET Core projects have already been created in their respective directories.

---

## Configuration

Shopify credentials and API settings will be configured through environment-specific settings.

Typical configuration values may include:

- Shopify store domain
- Storefront API access token
- Backend Shopify Admin API credentials, if required
- Webhook configuration
- Frontend API base URL

**Security considerations:**

- Never commit API tokens, client secrets, or passwords to version control.
- Keep privileged Shopify Admin API credentials exclusively on the backend.
- Use environment variables or .NET user secrets for sensitive configuration.
- Validate Shopify webhook signatures before processing incoming events.
- Never store or process raw credit card numbers or CVV codes in the application.

---

## Development Roadmap

- [ ] Initialize the Angular frontend.
- [ ] Create the ASP.NET Core Web API.
- [ ] Establish the frontend and backend architecture.
- [ ] Connect the storefront to Shopify.
- [ ] Retrieve and display products and collections.
- [ ] Implement the shopping cart.
- [ ] Integrate Shopify Checkout.
- [ ] Configure backend Shopify integration.
- [ ] Implement and validate order-related webhooks.
- [ ] Add loading states, error handling, and form validation.
- [ ] Improve accessibility and responsive design.
- [ ] Add automated tests and deployment configuration.

---

## Design Principles

- **Separation of concerns** — Keep presentation, business logic, and commerce operations organized.
- **Security first** — Protect credentials and validate trusted communication between services.
- **Maintainability** — Use modular components and clear naming conventions.
- **Responsive UX** — Provide a consistent shopping experience across devices.
- **Scalability** — Build a foundation that can accommodate future features.

---

## Future Improvements

Potential extensions include customer authentication, order tracking, automated testing, CI/CD pipelines, monitoring, and cloud deployment.

These features will be evaluated as the core shopping and checkout flow becomes functional.

---

## Author

**Adrian Morataya**

- GitHub: [@AdrianMorataya](https://github.com/AdrianMorataya)

---

*Built to explore modern full-stack development and Shopify commerce integration.*
