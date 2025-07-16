// components/Leaderboard.jsx
import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

const Leaderboard = ({ users, selectedUser }) => {
  // Get rank badge color
  const getRankBadgeColor = (rank) => {
    switch (rank) {
      case 1: return 'bg-yellow-500 text-white';
      case 2: return 'bg-gray-400 text-white';
      case 3: return 'bg-amber-600 text-white';
      default: return 'bg-blue-500 text-white';
    }
  };

  // Get rank icon
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <Trophy className="w-4 h-4" />;
      case 2: return <Award className="w-4 h-4" />;
      case 3: return <Star className="w-4 h-4" />;
      default: return <span className="font-bold text-sm">#{rank}</span>;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Trophy className="w-6 h-6 text-yellow-500" />
        Leaderboard
      </h2>

      <div className="space-y-3">
        {users.map((user, index) => (
          <div
            key={user._id}
            className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all duration-200 ${
              selectedUser === user._id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className={`px-2 py-1 rounded-full flex items-center gap-1 ${getRankBadgeColor(user.rank)}`}>
              {getRankIcon(user.rank)}
            </div>

            <div className="flex-1">
              <div className="font-medium text-gray-800">{user.name}</div>
              <div className="text-sm text-gray-600">{user.totalPoints} points</div>
            </div>

            <div className="text-right">
              <div className="text-lg font-bold text-gray-800">{user.totalPoints}</div>
              <div className="text-xs text-gray-500">pts</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;