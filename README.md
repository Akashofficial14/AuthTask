# 🚀 Modern MERN Stack Auth & Profile System

A high-performance, full-stack application featuring a secure authentication ecosystem and a comprehensive user dashboard. This project implements a complete **CRUD workflow** for user profiles, secure account management, and a premium UI/UX experience using the latest tech industry standards.

---

## ✨ Core Features

### 🔐 Advanced Authentication
- **Secure Signup & Login** — Validation-heavy registration flow with unique email/mobile checks.
- **JWT & Cookie Security** — Session management using JSON Web Tokens with `cookie-parser` for enhanced security.
- **Password Protection** — Industry-standard hashing using `bcrypt` (10 salt rounds).
- **Email Services** — Integrated `nodemailer` with `EJS` templates for automated welcome and verification emails.
- **Protected Routing** — Robust frontend access control using `react-router`.

### 👤 Profile Management (Full CRUD)
- **Real-time Data Sync** — Instant profile data fetching and caching with `@tanstack/react-query`.
- **Profile Customization** — Users can update their Full Name, City, and Mobile Number seamlessly.
- **Security Hub** — A dedicated interface to change passwords, requiring current password verification to prevent unauthorized changes.
- **Optimized Forms** — Zero-latency form handling with `react-hook-form`.

### 🎨 Premium UI/UX Design
- **Pinterest-Style Layout** — A beautiful, split-screen branding/auth interface.
- **Zero-Scroll Experience** — A modern, fixed-viewport design that eliminates vertical scrolling for a native app feel.
- **Glassmorphism** — High-end UI elements featuring backdrop blurs, soft shadows, and vibrant gradients.
- **Responsive Design** — Fully optimized for Mobile, Tablet, and Desktop using **Tailwind CSS 4.0**.

---

## 🛠️ Tech Stack

### Frontend
| Technology | Details |
|---|---|
| **Framework** | React 19 (Vite) |
| **Styling** | Tailwind CSS 4.0 (`@tailwindcss/vite`) |
| **State Management** | TanStack Query v5 (React Query) |
| **Routing** | React Router 7 |
| **Icons** | Lucide React |
| **Notifications** | React Toastify |

### Backend
| Technology | Details |
|---|---|
| **Server** | Express 5.0 |
| **Database** | MongoDB & Mongoose |
| **Security** | JWT, Bcrypt, Cookie-Parser |
| **Email** | Nodemailer & EJS |
| **Development** | Nodemon, Dotenv, CORS |

---

## 📦 Project Structure

```plaintext
├── frontend/                  # React application (Vite)
│   ├── src/
│   │   ├── apis/              # Axios instance & TanStack Query hooks
│   │   ├── components/        # Reusable UI (Display, EditProfile, UpdatePass)
│   │   ├── layouts/           # AuthLayout & HomeLayout
│   │   └── App.jsx            # Routing & Providers
│
├── backend/                   # Express server
│   ├── models/                # Mongoose schemas (User Model)
│   ├── routes/                # Auth & User API endpoints
│   ├── middleware/            # JWT Auth & Error Handling
│   ├── utils/                 # Email helpers & Token generators
│   └── index.js               # Entry point
```

---

## ⚙️ Setup & Installation

### 1. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file inside the `/backend` folder and configure the following variables:

```env
PORT=3000
JWT_TOKEN=your_token_for_login_
```

Start the backend server:

```bash
npm run dev
```

### 2. Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

---

## 📡 API Reference

### 🔐 Authentication Endpoints

| Action | Method | Endpoint | Description |
|---|---|---|---|
| Register | `POST` | `/api/auth/register` | Create a new user account |
| Login | `POST` | `/api/auth/login` | Authenticate user and return token |

### 👤 User Endpoints *(Protected — requires valid JWT)*

| Action | Method | Endpoint | Description |
|---|---|---|---|
| Get Profile | `GET` | `/api/profile` | Fetch logged-in user details |
| Update Profile | `PUT` | `/api/profile/update` | Update user information |
| Change Password | `PUT` | `/api/profile/change-password` | Securely update account password |

---

## 📄 License

This project is licensed under the **MIT License**.  
Created as a technical assessment for Full-Stack Development.
