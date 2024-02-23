import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateCard from "./pages/CreateCard";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-card" element={<CreateCard />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
