# Opportunis Job Portal (MERN Stack)

A powerful job portal application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack, offering job seekers and employers a smooth, efficient experience to connect with the right opportunities.

## Features

- **User Authentication:** Secure JWT-based authentication for both job seekers and employers.
- **Job Listings:** Browse extensive job opportunities stored in MongoDB.
- **Application Management:** Employers can manage job applications while job seekers can track theirs.
- **Responsive Design:** Optimized for seamless use on any device.

## Technologies

- **Frontend:** React.js, React Router, Bootstrap
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT, Bcrypt (password hashing)
- **Image Uploads:** Cloudinary (for image storage)
- **Deployment:** Vercel (Frontend), Render (Backend), MongoDB Atlas (Database)

## Getting Started

Follow the steps below to set up the application locally.

### Prerequisites

- **Node.js:** v22.2.0+ installed
- **MongoDB Atlas:** or a local MongoDB server
- **Cloudinary:** account for image management

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/sundaram-rai/Opportunis-Job-Portal.git
   ```

2. Install Dependencies:
   ```sh
   cd react-job-portal
   cd backend && npm install
   cd ../frontend && npm install
   ```
   
3. Configure environment variables:
   - Create a `config.env` file inside `backend/config/` directory and add the following:
   ```env
   PORT=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
   CLOUDINARY_CLOUD_NAME=
   FRONTEND_URL=
   DB_URL=
   JWT_SECRET_KEY=
   JWT_EXPIRE=
   COOKIE_EXPIRE=
   ```

4. Start the application:
   ```sh
   cd frontend
   npm run dev
   ```
5. Open your browser and visit `http://localhost:3000` to see the app in action.

