// components/UserSelector.jsx
import React, { useState } from 'react';
import { User, Plus } from 'lucide-react';

const UserSelector = ({ 
  users, 
  selectedUser, 
  onUserSelect, 
  onClaimPoints, 
  onAddUser, 
  loading 
}) => {
  const [newUserName, setNewUserName] = useState('');
  const [showAddUser, setShowAddUser] = useState(false);

  const handleAddUser = () => {
    if (newUserName.trim()) {
      onAddUser(newUserName.trim());
      setNewUserName('');
      setShowAddUser(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <User className="w-6 h-6" />
        Select User & Claim Points
      </h2>

      {/* User Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Choose a user:
        </label>
        <select
          value={selectedUser}
          onChange={(e) => onUserSelect(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">-- Select User --</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name} ({user.totalPoints} points)
            </option>
          ))}
        </select>
      </div>

      {/* Claim Button */}
      <button
        onClick={onClaimPoints}
        disabled={loading || !selectedUser}
        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Claiming...
          </div>
        ) : (
          '🎲 Claim Random Points (1-10)'
        )}
      </button>

      {/* Add User Section */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-gray-700">Add New User</h3>
          <button
            onClick={() => setShowAddUser(!showAddUser)}
            className="text-blue-600 hover:text-blue-800"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {showAddUser && (
          <div className="flex gap-2">
            <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              placeholder="Enter user name"
              className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && handleAddUser()}
            />
            <button
              onClick={handleAddUser}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSelector;