import React, { Component } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Member from "./pages/Member";
import Book from "./pages/Book";
import Borrow from "./pages/Borrow";
import History from "./pages/History";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import AddBook from "./pages/Book/AddBook";
import EditBook from "./pages/Book/EditBook";
import AddMember from "./pages/Member/AddMember";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="App">
        {location.pathname !== "/Login" &&
          location.pathname !== "/login" &&
          location.pathname !== "*" && <Navbar />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="Login" element={<Login />} />
          <Route path="Member" element={<Member />} />
          <Route path="Book" element={<Book />} />
          <Route path="Borrow" element={<Borrow />} />
          <Route path="History" element={<History />} />
          <Route path="Register" element={<Register />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Book/AddBook" element={<AddBook />} />
          <Route path="Book/EditBook" element={<EditBook />} />
          <Route path="Member/AddMember" element={<AddMember />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
