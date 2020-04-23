import React, { useState } from "react";
import SHOP_DATA from "./ShopData.js";
import CollectionPreview from "../../components/collection-preview/CollectionPreview.jsx";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map((e) => (
        <CollectionPreview key={e.id} title={e.title} items={e.items} />
      ))}
    </div>
  );
};

export default ShopPage;
