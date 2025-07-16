// import React, { useState, useEffect } from 'react';
// import HistorySection from "../components/HistorySection"
// import { Trophy, Star, Plus, User, Award } from 'lucide-react';
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const PointClaimingSystem = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [newUserName, setNewUserName] = useState('');
//   const [showAddUser, setShowAddUser] = useState(false);
//   const [ setHistory] = useState([]);

//   // Fetch users from backend
//   const fetchUsers = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/users`);
//       const data = await response.json();
//       setUsers(data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   // Fetch claim history
//   const fetchHistory = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/history`);
//       const data = await response.json();
//       setHistory(data);
//     } catch (error) {
//       console.error('Error fetching history:', error);
//     }
//   };

//   // Add new user
//   const addUser = async () => {
//     if (!newUserName.trim()) return;

//     try {
//       const response = await fetch(`${API_BASE_URL}/users`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name: newUserName.trim() })
//       });

//       if (response.ok) {
//         const updatedUsers = await response.json();
//         setUsers(updatedUsers);
//         setNewUserName('');
//         setShowAddUser(false);
//         setMessage(`User "${newUserName.trim()}" added successfully!`);
//         setTimeout(() => setMessage(''), 3000);
//       } else {
//         const error = await response.json();
//         setMessage(`Error: ${error.error}`);
//         setTimeout(() => setMessage(''), 3000);
//       }
//     } catch (error) {
//       console.error('Error adding user:', error);
//       setMessage('Error adding user');
//       setTimeout(() => setMessage(''), 3000);
//     }
//   };

//   // Claim points for selected user
//   const claimPoints = async () => {
//     if (!selectedUser) {
//       setMessage('Please select a user first!');
//       setTimeout(() => setMessage(''), 3000);
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(`${API_BASE_URL}/claim-points`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ userId: selectedUser })
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setUsers(data.users);
//         setMessage(`🎉 ${data.user} claimed ${data.pointsAwarded} points!`);
//         setTimeout(() => setMessage(''), 3000);
//         fetchHistory(); // Refresh history
//       } else {
//         const error = await response.json();
//         setMessage(`Error: ${error.error}`);
//         setTimeout(() => setMessage(''), 3000);
//       }
//     } catch (error) {
//       console.error('Error claiming points:', error);
//       setMessage('Error claiming points');
//       setTimeout(() => setMessage(''), 3000);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Get rank badge color
//   const getRankBadgeColor = (rank) => {
//     switch (rank) {
//       case 1: return 'bg-yellow-500 text-white';
//       case 2: return 'bg-gray-400 text-white';
//       case 3: return 'bg-amber-600 text-white';
//       default: return 'bg-blue-500 text-white';
//     }
//   };

//   // Get rank icon
//   const getRankIcon = (rank) => {
//     switch (rank) {
//       case 1: return <Trophy className="w-4 h-4" />;
//       case 2: return <Award className="w-4 h-4" />;
//       case 3: return <Star className="w-4 h-4" />;
//       default: return <span className="font-bold text-sm">#{rank}</span>;
//     }
//   };



//   useEffect(() => {
//     fetchUsers();
//     fetchHistory();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">
//             🎯 Point Claiming System
//           </h1>
//           <p className="text-gray-600">Select a user, claim points, and climb the leaderboard!</p>
//         </div>

//         {/* Message Display */}
//         {message && (
//           <div className="mb-6 p-4 bg-blue-100 border border-blue-300 rounded-lg text-center">
//             <span className="text-blue-800 font-medium">{message}</span>
//           </div>
//         )}

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* User Selection and Claim Section */}
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
//               <User className="w-6 h-6" />
//               Select User & Claim Points
//             </h2>

//             {/* User Selection */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Choose a user:
//               </label>
//               <select
//                 value={selectedUser}
//                 onChange={(e) => setSelectedUser(e.target.value)}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="">-- Select User --</option>
//                 {users.map((user) => (
//                   <option key={user._id} value={user._id}>
//                     {user.name} ({user.totalPoints} points)
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Claim Button */}
//             <button
//               onClick={claimPoints}
//               disabled={loading || !selectedUser}
//               className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
//             >
//               {loading ? (
//                 <div className="flex items-center justify-center gap-2">
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                   Claiming...
//                 </div>
//               ) : (
//                 '🎲 Claim Random Points (1-10)'
//               )}
//             </button>

//             {/* Add User Section */}
//             <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="font-medium text-gray-700">Add New User</h3>
//                 <button
//                   onClick={() => setShowAddUser(!showAddUser)}
//                   className="text-blue-600 hover:text-blue-800"
//                 >
//                   <Plus className="w-5 h-5" />
//                 </button>
//               </div>

//               {showAddUser && (
//                 <div className="flex gap-2">
//                   <input
//                     type="text"
//                     value={newUserName}
//                     onChange={(e) => setNewUserName(e.target.value)}
//                     placeholder="Enter user name"
//                     className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     onKeyPress={(e) => e.key === 'Enter' && addUser()}
//                   />
//                   <button
//                     onClick={addUser}
//                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
//                   >
//                     Add
//                   </button>
//                 </div>
//               )}
//             </div>

//           </div>

//           {/* Leaderboard */}
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
//               <Trophy className="w-6 h-6 text-yellow-500" />
//               Leaderboard
//             </h2>

//             <div className="space-y-3">
//               {users.map((user, index) => (
//                 <div
//                   key={index._id}
//                   className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all duration-200 ${selectedUser === user._id
//                       ? 'border-blue-500 bg-blue-50'
//                       : 'border-gray-200 hover:border-gray-300'
//                     }`}
//                 >
//                   <div className={`px-2 py-1 rounded-full flex items-center gap-1 ${getRankBadgeColor(user.rank)}`}>
//                     {getRankIcon(user.rank)}
//                   </div>

//                   <div className="flex-1">
//                     <div className="font-medium text-gray-800">{user.name}</div>
//                     <div className="text-sm text-gray-600">{user.totalPoints} points</div>
//                   </div>

//                   <div className="text-right">
//                     <div className="text-lg font-bold text-gray-800">{user.totalPoints}</div>
//                     <div className="text-xs text-gray-500">pts</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>


//         </div>

//         {/* History Section */}
//         <HistorySection/>


//       </div>
//     </div>
//   );
// };

// export default PointClaimingSystem;



// PointClaimingSystem.jsx (Main Component)
import React, { useState, useEffect } from 'react';
import HistorySection from "./HistorySection";
import UserSelector from "../components/UserSelector";
import Leaderboard from "../components/Leaderboard";
import MessageDisplay from "../components/MessageDisplay";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const PointClaimingSystem = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Fetch claim history
  const fetchHistory = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/history`);
      const data = await response.json();
      setHistory(data);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  // Show message with auto-dismiss
  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  // Add new user
  const addUser = async (userName) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: userName })
      });

      if (response.ok) {
        const updatedUsers = await response.json();
        setUsers(updatedUsers);
        showMessage(`User "${userName}" added successfully!`);
      } else {
        const error = await response.json();
        showMessage(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error adding user:', error);
      showMessage('Error adding user');
    }
  };

  // Claim points for selected user
  const claimPoints = async () => {
    if (!selectedUser) {
      showMessage('Please select a user first!');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/claim-points`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: selectedUser })
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
        showMessage(`🎉 ${data.user} claimed ${data.pointsAwarded} points!`);
        fetchHistory(); // Refresh history
      } else {
        const error = await response.json();
        showMessage(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error claiming points:', error);
      showMessage('Error claiming points');
    } finally {
      setLoading(false);
    }
  };

  // Handle user selection
  const handleUserSelect = (userId) => {
    setSelectedUser(userId);
  };

  useEffect(() => {
    fetchUsers();
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🎯 Point Claiming System
          </h1>
          <p className="text-gray-600">Select a user, claim points, and climb the leaderboard!</p>
        </div>

        {/* Message Display */}
        <MessageDisplay message={message} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Selection and Claim Section */}
          <UserSelector
            users={users}
            selectedUser={selectedUser}
            onUserSelect={handleUserSelect}
            onClaimPoints={claimPoints}
            onAddUser={addUser}
            loading={loading}
          />

          {/* Leaderboard */}
          <Leaderboard 
            users={users} 
            selectedUser={selectedUser} 
          />
        </div>

        {/* History Section */}
        <HistorySection history={history} />
      </div>
    </div>
  );
};

export default PointClaimingSystem;