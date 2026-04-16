🚀 Modern MERN Stack Auth & Profile SystemA high-performance, full-stack application featuring a secure authentication ecosystem and a comprehensive user dashboard. This project implements a complete CRUD workflow for user profiles, secure account management, and a premium UI/UX experience using the latest tech industry standards.✨ Core Features🔐 Advanced AuthenticationSecure Signup & Login: Validation-heavy registration flow with unique email/mobile checks.JWT & Cookie Security: Session management using JSON Web Tokens with cookie-parser for enhanced security.Password Protection: Industry-standard hashing using bcrypt (10 salt rounds).Email Services: Integrated nodemailer with EJS templates for automated welcome and verification emails.Protected Routing: Robust frontend access control using react-router.👤 Profile Management (Full CRUD)Real-time Data Sync: Instant profile data fetching and caching with @tanstack/react-query.Profile Customization: Users can update their Full Name, City, and Mobile Number seamlessly.Security Hub: A dedicated interface to change passwords, requiring current password verification to prevent unauthorized changes.Optimized Forms: Zero-latency form handling with react-hook-form.🎨 Premium UI/UX DesignPinterest-Style Layout: A beautiful, split-screen split-screen branding/auth interface.Zero-Scroll Experience: A modern, fixed-viewport height design that eliminates vertical page scrolling for a native app feel.Glassmorphism: High-end UI elements featuring backdrop blurs, soft shadows, and vibrant gradients.Responsive Design: Fully optimized for Mobile, Tablet, and Desktop using Tailwind CSS 4.0.🛠️ Tech StackFrontendFramework: React 19 (Vite)Styling: Tailwind CSS 4.0 (using @tailwindcss/vite)State Management: TanStack Query v5 (React Query)Routing: React Router 7Icons: Lucide ReactNotifications: React ToastifyBackendServer: Express 5.0Database: MongoDB & MongooseSecurity: JWT, Bcrypt, Cookie-ParserEmail: Nodemailer & EJSDevelopment: Nodemon, Dotenv, CORS📦 Project StructurePlaintext├── frontend/             # React application (Vite)
│   ├── src/
│   │   ├── apis/         # Axios instance & Tanstack Query hooks
│   │   ├── components/   # Reusable UI (Display, EditProfile, UpdatePass)
│   │   ├── layouts/      # AuthLayout & Homelayout
│   │   └── App.jsx       # Routing & Providers
├── backend/              # Express server
│   ├── models/           # Mongoose schemas (User Model)
│   ├── routes/           # Auth & User API endpoints
│   ├── middleware/       # JWT Auth & Error Handling
│   ├── utils/            # Email helpers & Token generators
│   └── index.js          # Entry point
⚙️ Setup & Installation1. Backend SetupBashcd backend
npm install
Create a .env file in the backend root:Code snippetPORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_specific_password
Start the server:Bashnpm run dev
2. Frontend SetupBashcd frontend
npm install
npm run dev
📡 API ReferenceAuth EndpointsActionMethodEndpointDescriptionRegisterPOST/api/auth/registerCreate a new accountLoginPOST/api/auth/loginAuthenticate & get tokenUser Endpoints (Protected)ActionMethodEndpointDescriptionGet ProfileGET/api/profileFetch logged-in user dataUpdate ProfilePUT/api/profile/updateUpdate user details (CRUD)Change PassPUT/api/profile/change-passwordUpdate account password📄 LicenseThis project is licensed under the MIT License. Created as a technical assessment for Full-Stack Development.
