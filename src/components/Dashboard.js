// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../AuthService';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const healthServices = [
    'Hospital care',
    'Primary care',
    'Emergency services',
    'Mental health services',
    'Dental care',
    'Rehabilitation services',
    'Pharmacy services',
    'Diagnostic services',
    'Maternity and newborn care',
    'Preventive services',
  ];

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Dashboard</span>
          <button onClick={handleLogout} className="btn btn-light">
            Logout
          </button>
        </div>
      </nav>
      <div className="container mt-4">
        <h1>Health Services</h1>
        <div className="row">
          {healthServices.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4 mt-2 mb-3">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">{service}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-dark text-light p-3 text-center fixed-bottom">
        <p className="mb-0">
          &copy; 2023 Credo Health Services Pvt. Ltd. |{' '}
          <a href="/terms-and-conditions" className="text-light">
            Terms and Conditions
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
