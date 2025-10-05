import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to FreelancerHub</h1>
      <p className="text-lg text-gray-700 mb-6">
        A professional platform for freelancers and clients to connect, collaborate, and grow.
      </p>

      {user ? (
        <p className="text-green-600 font-semibold">Logged in as: {user.name}</p>
      ) : (
        <div className="space-x-4">
          <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;