import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateCard from "./pages/CreateCard";
import EditCard from "./pages/EditCard";
import About from "./pages/About";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import FavouriteCards from "./pages/FavouriteCards";
const App = () => {
  useEffect(() => {
    // if theme in local storage is dark, add dark class to the root element
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-card" element={<CreateCard />} />
        <Route path="/edit-card/:id" element={<EditCard />} />
        <Route path="/favourite-cards" element={<FavouriteCards />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
