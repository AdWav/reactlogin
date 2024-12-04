
import '../styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Planning from './Planning';
import DataComponent from './DataComponent';
import Menu from './Menu';
import "bulma/css/bulma.min.css";
import { useState } from 'react';

function App() {
  
  const getUserFromSession = () => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return null;
  };

  const [user, setUser] = useState(getUserFromSession());
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    setUser(data);
    sessionStorage.setItem('user', JSON.stringify(data));
  };

  return (
    <BrowserRouter>
      <div>
        <Header /* isLoggedIn={isLoggedIn} */ />
        <Menu />
        <div>
          <Routes>
            <Route 
            path="/" 
            element={!isLoggedIn ? <DataComponent/> : <Navigate to="/planning" />
            } />
            <Route 
              path="/planning" 
              element={isLoggedIn ? <Planning userData={user} /> : <Navigate to="/planning" />} 
            />
        </Routes>
        </div>
      </div>
    </BrowserRouter>

  );

}

export default App;
