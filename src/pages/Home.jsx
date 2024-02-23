import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <Fragment>
      <div className="min-h-[90vh] ">
        <Cards />
      </div>
    </Fragment>
  );
};

export default Home;
