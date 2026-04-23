## Next.js CRUD App

A simple User CRUD application built with Next.js App Router and JSONPlaceholder API.

## Live Demo:
Live : https://anilbevysquare.vercel.app

## This project demonstrates:

Fetching all users
Viewing a single user
Updating user details
Deleting a user
Dynamic routing using Next.js App Router
## 🚀 Tech Stack
Next.js 16
React
TypeScript
Tailwind CSS
Axios
## 📌 Features
✅ Users List Page

## Fetch all users using:

GET /users
Display:
Name
Email
View button for each user
✅ Dynamic User Page (/users/[id])
Fetch Single User
GET /users/:id
Update User
Editable form
Pre-filled user data
Update using:
PUT /users/:id
Delete User

Delete using:

DELETE /users/:id
Redirects back to /users
## 📂 Folder Structure
nextjs-crud-app/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   │
│   └── users/
│       ├── page.tsx
│       └── [id]/
│           └── page.tsx
│
├── components/
│   ├── Loader.tsx
│   ├── UserCard.tsx
│   └── UserForm.tsx
│
├── services/
│   └── api.ts
│
├── public/
├── package.json
└── README.md
## 🌐 API Used

Base URL:

https://jsonplaceholder.typicode.com

Endpoints used:

GET     /users
GET     /users/:id
PUT     /users/:id
DELETE  /users/:id
## ⚙️ Installation
1️⃣ Clone Repository
git clone https://github.com/your-username/nextjs-crud-app.git
2️⃣ Navigate to Project
cd nextjs-crud-app
3️⃣ Install Dependencies
npm install
4️⃣ Run Development Server
npm run dev
▶️ Open In Browser
http://localhost:3000

## 🧠 Concepts Used
Next.js App Router
Dynamic Routing
Client Components
API Integration
Axios
React Hooks
State Management
Conditional Rendering
Tailwind CSS
## ⚠️ Note

JSONPlaceholder is a fake API.

Changes made using:

PUT
DELETE


## 👨‍💻 Author

Anil Kumar
