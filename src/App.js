import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Users from "./pages/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
