import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Body from "./Components/Body"
import Header from "./Components/Header"
import About from "./Components/About"
import Cart from "./Components/Cart";
import ResturantMenu from "./Components/ResturantMenu";
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()
 // const user=undefined;
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Body /> : <Navigate to="/login" />}
            />
            <Route
              path="/about"
              element={user ? <About /> : <Navigate to="/login" />}
            />
            <Route
              path="/resturant/:resId"
              element={user ? <ResturantMenu /> : <Navigate to="/login" />}
            />
            <Route
              path="/cart"
              element={user ? <Cart /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
           
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
