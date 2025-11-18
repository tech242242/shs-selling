import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen glass-dark">
      <div className="modern-spinner"></div>
      <span className="ml-3 text-white text-lg">Loading...</span>
    </div>
  );
  
  return user ? children : <Navigate to="/login" />;
}
