# 🌍 Travlio Tours
 
A full-stack travel agency web application where users can explore destinations, book tours, write blogs, and manage their profiles — built with React, Node.js, and MongoDB.
 
[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-travlio--tours.onrender.com-4CAF50?style=for-the-badge)](https://travlio-tours.onrender.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?flat-square&logo=node.js)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?flat-square&logo=mongodb)](https://mongodb.com)
 
---
 
## ✨ Features
 
### 🧭 Tours
- Browse all available tours with filtering by category, price, and duration
- Detailed tour pages with image gallery, itinerary, and reviews
- Popular tours section sorted by rating
### 🔐 Authentication
- Email/password signup and login with JWT (httpOnly cookies)
- Google OAuth 2.0 sign-in via Passport.js
- Auto-login on page refresh via protected `/api/auth/me` endpoint
- Role-based access control (user / admin)
### 📅 Booking
- Multi-step booking flow with date picker and guest count
- Booking confirmation page with summary
- User booking history in profile
### 👤 Profile
- View and update personal information
- Upload profile photo (Cloudinary)
- View booking history and submitted reviews
### 📝 Blog
- Create, edit, and delete blog posts with image upload
- Public blog feed and individual post pages
- Author-only edit/delete permissions
### 📬 Contact
- Contact form with email delivery via Nodemailer
---
 
## 🛠️ Tech Stack
 
### Frontend
| Technology | Purpose |
|---|---|
| React 19 + Vite | UI framework & build tool |
| React Router v6 | Client-side routing |
| Tailwind CSS v4 | Styling |
| shadcn/ui + Radix UI | UI components |
| GSAP | Animations |
| Embla Carousel | Image carousel |
| Axios | HTTP requests |
| date-fns | Date formatting |
 
### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | Server framework |
| MongoDB + Mongoose | Database & ODM |
| JWT + bcrypt | Authentication & password hashing |
| Passport.js | Google OAuth 2.0 |
| Cloudinary + Multer | Image upload & storage |
| Nodemailer | Email delivery |
| cookie-parser | httpOnly cookie handling |
 
---
 
## 📁 Project Structure
 
```
Travlio-Tours/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Home/
│   │   │   ├── Tours/
│   │   │   ├── Booking/
│   │   │   ├── Blog/
│   │   │   ├── Profile/
│   │   │   └── ui/          # shadcn components
│   │   ├── pages/           # Route-level pages
│   │   │   ├── Home.jsx
│   │   │   ├── Tours.jsx
│   │   │   ├── TourDetails.jsx
│   │   │   ├── Booking.jsx
│   │   │   ├── Confirmation.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── context/         # React Context (Auth, Tours, Search)
│   │   ├── utils/           # API utility functions
│   │   └── App.jsx
│   └── package.json
│
├── server/                  # Node.js backend
│   ├── controller/          # Route controllers
│   │   ├── auth.controller.js
│   │   ├── tours.controller.js
│   │   ├── bookings.controller.js
│   │   ├── reviews.controller.js
│   │   ├── blogs.controller.js
│   │   └── message.controller.js
│   ├── model/               # Mongoose models
│   ├── router/              # Express routers
│   ├── utils/               # JWT, Passport config
│   ├── scripts/             # One-time admin seeder (gitignored)
│   └── app.js
└── README.md
```
 
---
 
## 🚀 Getting Started
 
### Prerequisites
- Node.js `v18+`
- MongoDB database (local or [MongoDB Atlas](https://cloud.mongodb.com))
- Cloudinary account
- Google OAuth credentials
### 1. Clone the repository
```bash
git clone https://github.com/Giorgixmaladze/Travlio-Tours.git
cd Travlio-Tours
```
 
### 2. Set up environment variables
 
Create `server/.env`:
```env
MONGO_URL=mongodb+srv://<user>:<password>@cluster.mongodb.net/travlio
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
COOKIE_EXPIRES_IN=7
 
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
 
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/google/callback
 
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
 
CLIENT_URL=http://localhost:5173
```
 
Create `client/.env`:
```env
VITE_API_URL=http://localhost:3000
```
 
### 3. Install dependencies & run
 
```bash
# Run server (terminal 1)
cd server && npm install && node app.js
 
# Run client (terminal 2)
cd client && npm install && npm run dev
```
 
Open [http://localhost:5173](http://localhost:5173) in your browser.
 
---
 
## ☁️ Deployment (Render)
 
This project is deployed as a single Web Service on [Render](https://render.com).
 
| Setting | Value |
|---|---|
| **Build Command** | `cd client && npm install && npm run build` |
| **Start Command** | `cd server && npm install && node app.js` |
| **Root Directory** | *(leave empty)* |
 
The Express server serves the React build (`client/dist`) as static files in production. Add all `server/.env` variables to Render's **Environment Variables** section.
 
---
 
## 🔑 Creating an Admin User
 
Admin accounts cannot be created through the signup form — role is always set to `"user"` on the backend. Use the seeder script:
 
```bash
# Edit the credentials in server/scripts/createAdmin.js first, then:
cd server
node scripts/createAdmin.js
```
 
Delete the script after use and never commit it to Git.
 
---
 
## 📄 License
 
MIT — see [LICENSE](LICENSE) for details.
 
---
 
<p align="center">Made with ❤️ by <a href="https://github.com/Giorgixmaladze">Giorgi Xmaladze</a></p>
