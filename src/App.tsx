// import { useState } from 'react'



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useRef } from "react"
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";




function App() {

  const isUser = useRef<boolean>(true);
  // manually change login status

  return (
    <div className="dark bg-white dark:bg-black h-full w-full">
      <Router>
        <Routes>
          <Route
            path="/"
            element={isUser.current ? <MainPage /> : <LoginPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App
