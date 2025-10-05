import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateJob from './pages/CreateJob.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/createjob' element={<CreateJob />} />
      </Routes>
    </Router>
  );
}

export default App;