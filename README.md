📌 Project Title: 3W Business Dashboard
A full-stack web application for meeting invitation system, OTP authentication, role-based dashboards, and admin-user management — built using the MERN stack (MongoDB, Express.js, React.js, Node.js).


Frontend	https://3w-frontend-code.netlify.app (Update if changed)
Backend	https://3w-backend-api-url.com (e.g., Render, AWS EC2, etc.)


🧩 Tech Stack
Frontend	Backend	Database	Other
React.js (Vite)
Tailwind CSS,
dotenv


✅ Frontend Setup
bash
Copy
Edit
# Clone the frontend
git clone https://github.com/SalmanSakri/3W-Frontend.git
cd 3W-Frontend

# Install dependencies
npm install

# Create a `.env` file
touch .env
.env file example:

env
Copy
Edit
VITE_API_BASE_URL=http://localhost:5000/api
bash
Copy
Edit
# Run frontend dev server
npm run dev
🛠️ Folder Structure Overview
Backend (3W)
pgsql
Copy
Edit
3W/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── .env
├── server.js
└── package.json
Frontend (3W-Frontend)
css
Copy
Edit
3W-Frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── .env
└── package.json
🧪 API Endpoints (Examples)
Method	Endpoint	Description
POST	/api/auth/otp-send	Send OTP to mobile/email
POST	/api/auth/verify-otp	Verify OTP and login
GET	/api/meetings	Fetch all meetings
POST	/api/meetings/create	Create a meeting
POST	/api/feedback	Submit feedback
GET	/api/users	Get user data (Admin only)


📌 Deployment
You can deploy using:

Frontend: Netlify / Vercel

Database: MongoDB Atlas
