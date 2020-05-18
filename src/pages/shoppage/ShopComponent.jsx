import React, { useState } from "react";
import { Route } from "react-router-dom";
// import SHOP_DATA from "./ShopData.js";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collectionPage/CollectionPage";

const ShopPage = ({ match }) => {
  console.log("match", match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
