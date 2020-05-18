import React from "react";

import CollectionItem from "../../components/collection-item/CollectionItem";
import { useSelector } from "react-redux";
import "./CollectionPage.scss";

const COLLECTION_ID_MAPPING = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const CollectionPage = ({ match }) => {
  const currentDir = match.params.categoryId;
  console.log("match", currentDir);
  console.log("match", match);

  //goes through all the collections and grabs the example hat category
  const collections = useSelector((state) => state.shop.collections); //gets all the collections
  //gets the inner collections
  const currentCollection = collections.find(
    (collection) => collection.id === COLLECTION_ID_MAPPING[currentDir]
  );
  console.log("currentCollection", currentCollection);

  return (
    <div className="collection-page">
      <h2 className="title">
        {currentCollection ? currentCollection.title : null}
      </h2>
      <div className="items">
        {currentCollection
          ? currentCollection.items.map((e) => (
              <CollectionItem key={e.id} item={e} />
            ))
          : null}
      </div>
    </div>
  );
};

export default CollectionPage;
