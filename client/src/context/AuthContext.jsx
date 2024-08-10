import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Logic to handle login
    console.log('Logging in...');
    setUser({ email });
  };

  const register = (email, password) => {
    // Logic to handle registration
    console.log('Registering...');
    setUser({ email });
  };

  const logout = () => {
    // Logic to handle logout
    console.log('Logging out...');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
