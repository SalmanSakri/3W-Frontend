📌 Point Claiming System
A full-stack application that allows users to claim random points and view real-time leaderboards.
Features

✅ User selection from dropdown
✅ Random point claiming (1-10 points)
✅ Real-time leaderboard updates
✅ Add new users dynamically
✅ Point history tracking
✅ Socket.io for real-time updates
✅ Responsive design

- Frontend GitHup URL:https://3w-frontend-code.netlify.app
- Backend URL:https://github.com/SalmanSakri/3W
- Live Demo Url:https://3w-frontend-code.netlify.app/


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

## 📁 Project Structure

```bash
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


```
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
