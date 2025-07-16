import React, { useState, useEffect } from 'react';
import { Trophy, Star, Plus, Clock, User, Award } from 'lucide-react';
const API_BASE_URL = 'http://localhost:7867/api';
const HistorySection = () => {
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

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

    // Format date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString();
    };
    useEffect(() => {

        fetchHistory();
    }, []);

    return (
        <>
            <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Clock className="w-6 h-6 text-blue-500" />
                        Recent Claims History
                    </h2>
                    <button
                        onClick={() => setShowHistory(!showHistory)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        {showHistory ? 'Hide' : 'Show'} History
                    </button>
                </div>

                {showHistory && (
                    <div className="max-h-96 overflow-y-auto">
                        {history.length === 0 ? (
                            <p className="text-gray-500 text-center py-4">No claims yet</p>
                        ) : (
                            <div className="space-y-2">
                                {history.map((claim, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                    >
                                        <div>
                                            <span className="font-medium text-gray-800">{claim.userName}</span>
                                            <span className="text-green-600 font-bold ml-2">+{claim.pointsAwarded} pts</span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-600">
                                                Total: {claim.totalPointsAfter} pts
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {formatDate(claim.claimedAt)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}

export default HistorySection