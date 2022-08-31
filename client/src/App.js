// import React, { useEffect, useState } from "react";
// import AlertContext from "./utils/ContextAPI/AlertContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
// import "./App.css";
// import axios from "axios";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Profile from "./containers/Profile/Profile";
import Contact from "./containers/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./containers/NotFound/NotFound";
// import AuthContext from "./utils/ContextAPI/AuthContext";
// import Alert from "./components/Alert";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Profile" element={<Profile />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
