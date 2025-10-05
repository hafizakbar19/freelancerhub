import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Welcome, {user?.name}</h1>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="space-y-4">
        <Link
          to="/create-job"
          className="block px-4 py-3 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Create New Job
        </Link>

        <Link
          to="/jobs"
          className="block px-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          View All Jobs
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;