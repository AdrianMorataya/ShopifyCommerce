# 🛍️ ShopifyStorefront

### A Custom E-Commerce Experience Built with Angular, .NET & Shopify

<p align="center">
  <img src="https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge" alt="Project Status" />
  <img src="https://img.shields.io/badge/Angular-Frontend-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/ASP.NET%20Core-Backend-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt="ASP.NET Core" />
  <img src="https://img.shields.io/badge/Shopify-Commerce-7AB55C?style=for-the-badge&logo=shopify&logoColor=white" alt="Shopify" />
</p>

<p align="center">
  A full-stack e-commerce platform combining a custom storefront with Shopify's commerce infrastructure.
  <br />
  Designed for a seamless shopping experience, secure checkout, and reliable order management.
</p>

<p align="center">
  <b>Custom Frontend</b> · <b>Dedicated Backend</b> · <b>Shopify Integration</b>
</p>

---

## 📌 Overview

**ShopifyStorefront** is a full-stack e-commerce project focused on building a custom shopping experience powered by Shopify.

The platform is designed to give customers an intuitive interface for browsing products, managing their shopping cart, and completing purchases, while Shopify handles core commerce operations such as checkout and order administration.

By combining **Angular**, **ASP.NET Core Web API**, and **Shopify APIs**, the project aims to create a modular, maintainable, and extensible application.

> 🚧 This project is currently under development. Features and integrations will be implemented progressively.

## ✨ Key Features

| Feature | Description |
|:--|:--|
| 🛍️ **Custom Storefront** | A modern, responsive interface tailored to the shopping experience. |
| 📦 **Product Catalog** | Display products and collections retrieved from Shopify. |
| 🛒 **Shopping Cart** | Manage selected products before proceeding to checkout. |
| 💳 **Shopify Checkout** | Redirect customers to Shopify's checkout for payment processing. |
| 📋 **Order Management** | Use Shopify to manage purchases and order information. |
| ⚙️ **Backend API** | Centralize server-side logic and integrations using ASP.NET Core. |
| 🔗 **Shopify Integration** | Connect the storefront and backend with Shopify services. |
| 🔔 **Webhook Processing** | Receive and validate Shopify events for relevant order workflows. |
| 📱 **Responsive Design** | Provide a consistent experience across desktop, tablet, and mobile. |

## 🧰 Tech Stack

### Frontend

<p>
  <img src="https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white" alt="SCSS" />
</p>

- Component-based architecture
- Responsive layouts and reusable UI elements
- Typed application logic with TypeScript

### Backend

<p>
  <img src="https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=csharp&logoColor=white" alt="C#" />
  <img src="https://img.shields.io/badge/ASP.NET%20Core-512BD4?style=flat-square&logo=dotnet&logoColor=white" alt="ASP.NET Core" />
  <img src="https://img.shields.io/badge/REST%20API-02569B?style=flat-square&logo=fastapi&logoColor=white" alt="REST API" />
</p>

- RESTful API development
- Server-side integration logic
- Secure configuration and request validation
- Shopify webhook handling

### Commerce & Tools

<p>
  <img src="https://img.shields.io/badge/Shopify-7AB55C?style=flat-square&logo=shopify&logoColor=white" alt="Shopify" />
  <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
</p>

- Shopify Storefront API
- Shopify Checkout
- Shopify Admin API, where required for privileged operations
- Shopify Webhooks
- Git-based version control

## 🏗️ System Architecture

The application separates the customer-facing storefront, commerce infrastructure, and server-side integration logic.

```text
┌─────────────────────────────────────┐
│             FRONTEND                │
│                                     │
│          Angular + SCSS             │
│                                     │
│   Product Catalog · Shopping Cart   │
│            Checkout UI              │
└──────────────────┬──────────────────┘
                   │
            Storefront API
                   │
                   ▼
┌─────────────────────────────────────┐
│               SHOPIFY               │
│                                     │
│    Products · Collections           │
│    Checkout · Payments · Orders     │
└──────────────────┬──────────────────┘
                   │
             Order Webhooks
                   │
                   ▼
┌─────────────────────────────────────┐
│               BACKEND               │
│                                     │
│        C# + ASP.NET Core             │
│                                     │
│    REST API · Integration Logic     │
│    Webhook Validation · Processing  │
└─────────────────────────────────────┘
```

### 🔄 How It Works

1. **Browse** — Customers explore products displayed by the Angular storefront.
2. **Select** — The shopping cart manages selected products.
3. **Checkout** — Customers proceed to Shopify Checkout to complete their purchase.
4. **Process** — Shopify manages the order and payment workflow.
5. **Synchronize** — Configured webhooks notify the backend of relevant Shopify events.

*The final data flow will depend on the implementation of each integration.*

## 📁 Project Structure

The planned repository structure separates the frontend and backend into independent applications.

```text
ShopifyStorefront/
│
├── frontend/
│   └── Angular application
│
├── backend/
│   └── ASP.NET Core Web API
│
├── .gitignore
└── README.md
```

| Directory | Responsibility |
|:--|:--|
| `frontend/` | User interface, product browsing, and shopping cart |
| `backend/` | REST endpoints, server-side logic, and Shopify integrations |
| `.gitignore` | Exclude local files and sensitive configuration |

## 🚀 Getting Started

### Prerequisites

Before running the project, make sure you have:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.dev/tools/cli)
- [.NET SDK](https://dotnet.microsoft.com/download)
- [Git](https://git-scm.com/)
- A Shopify development store with the required API access

### 1. Clone the Repository

```bash
git clone https://github.com/AdrianMorataya/ShopifyStorefront.git
cd ShopifyStorefront
```

### 2. Run the Frontend

```bash
cd frontend
npm install
ng serve
```

Open `http://localhost:4200` in your browser.

### 3. Run the Backend

Open a separate terminal:

```bash
cd backend
dotnet restore
dotnet run
```

The terminal will display the local address where the API is running.

> ℹ️ These commands assume both applications have already been created in the planned directories.

## 🔐 Security

Security is an important part of integrating an external commerce platform.

- 🔑 **Protect credentials:** Never commit API tokens, secrets, or passwords.
- 🛡️ **Keep privileged access server-side:** Shopify Admin API credentials must not be exposed in frontend code.
- 🔏 **Validate webhooks:** Verify Shopify webhook signatures before processing events.
- 💳 **Use Shopify Checkout:** Avoid handling raw card details directly in the application.
- ⚙️ **Manage configuration:** Use environment variables or .NET user secrets for sensitive settings.
- ✅ **Validate requests:** Apply appropriate input validation and error handling.

## 🗺️ Development Roadmap

The project will be developed incrementally, prioritizing the core shopping experience before additional functionality.

- [ ] 🏗️ Initialize the Angular frontend and ASP.NET Core backend.
- [ ] 🔗 Configure Shopify API access.
- [ ] 📦 Retrieve products and collections.
- [ ] 🎨 Build the storefront UI and responsive layouts.
- [ ] 🛒 Implement the shopping cart.
- [ ] 💳 Integrate Shopify Checkout.
- [ ] ⚙️ Develop backend integration endpoints.
- [ ] 🔔 Configure and validate Shopify webhooks.
- [ ] 🧪 Add automated tests and error handling.
- [ ] 🚀 Prepare deployment and CI/CD workflows.

## 🧩 Engineering Principles

| Principle | Goal |
|:--|:--|
| 🧱 **Modularity** | Keep components and responsibilities clearly separated. |
| 🔒 **Security** | Protect credentials and validate external requests. |
| ♻️ **Maintainability** | Write clean, organized, and reusable code. |
| 📱 **Accessibility** | Build an inclusive and responsive interface. |
| 📈 **Scalability** | Allow the platform to grow with future requirements. |

## 🔮 Future Improvements

Potential future enhancements include:

- 👤 Customer authentication and account management
- 📦 Order tracking and customer order history
- 🔍 Product search, filtering, and sorting
- 🧪 Expanded automated test coverage
- ☁️ Cloud deployment and CI/CD pipelines
- 📊 Logging, monitoring, and performance optimization

These improvements will be considered as the core storefront and Shopify integrations mature.

---

## 👨‍💻 Author

**Adrian Morataya**
**Alexis Monroy**

[![GitHub](https://img.shields.io/badge/GitHub-AdrianMorataya-181717?style=for-the-badge&logo=github)](https://github.com/AdrianMorataya)
[![GitHub](https://img.shields.io/badge/GitHub-LissandroMonroy4-181717?style=for-the-badge&logo=github)](https://github.com/LissandroMonroy4)

---

<p align="center">
  <i>Building a modern shopping experience through full-stack development and Shopify integration.</i>
</p>
