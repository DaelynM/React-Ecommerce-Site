import React from "react";
import "./CollectionOverview.scss";
import CollectionPreview from "../../components/collection-preview/CollectionPreview.jsx";
import { useSelector } from "react-redux";

const CollectionsOverview = () => {
  const collections = useSelector((state) => state.shop.collections);
  const collectionsObjToKeys = () => {};

  console.log("collecionsOverview", collections);

  return (
    <div className="collections-overview">
      {collections.map((e) => (
        <CollectionPreview key={e.id} title={e.title} items={e.items} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
