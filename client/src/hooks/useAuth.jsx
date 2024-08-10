import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const { user, login, register, logout } = useContext(AuthContext);

  return { user, login, register, logout };
};

export default useAuth;
