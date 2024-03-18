import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const decodeToken = (token) => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('Decoded Token:', payload); // Log the decoded token
      return payload;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };
  

 
  const [user, setUser] = useState(() => {
    const storedToken = localStorage.getItem('token');
    console.log('Stored Token:', storedToken); // Log stored token
    if (storedToken) {
      try {
        const decodedToken = decodeToken(storedToken);
        console.log('Decoded Token:', decodedToken); // Log decoded token
       
        return decodedToken.sub;
        
      } catch (error) {
        console.error('Error decoding token:', error); // Log decoding error
        return null;
      }
    }
    return null;
  });
  
  console.log('User:', user)

  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      const decodedToken = decodeToken(storedToken);
      setUser(decodedToken.sub); // Set the username as the logged-in user
    }
    setIsLoading(false);
  }, []);

  const login = (token) => {
    // Set the token in localStorage
    localStorage.setItem('token', token);
  
    // Decode the token to get the username
    const decodedToken = decodeToken(token);
    if (decodedToken) {
      // Set the username as the logged-in user
      setUser(decodedToken.sub);
    } else {
      // Handle error if decoding fails
      setUser(null);
    }
  };
  
  

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const getToken = () => {
    const storedToken = localStorage.getItem('token');
    return storedToken;
  };

  const authValues = {
    user,
    isLoading,
    login,
    logout,
    getToken,
  };

  return <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
