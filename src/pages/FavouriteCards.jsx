import React, { Fragment } from "react";
import Favourites from "../components/Favourites";

const FavouriteCards = () => {
  return (
    <Fragment>
      <div className="min-h-[90vh] ">
        <Favourites />
      </div>
    </Fragment>
  );
};

export default FavouriteCards;
