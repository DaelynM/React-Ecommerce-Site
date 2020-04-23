import React from "react";

import "./CollectionPreview.scss";
import CollectionItem from "../collection-item/CollectionItem.jsx";

const CollectionPreview = (props) => {
  //limits the array to 4 peices of inventory
  const newArr = props.items.slice(0, 4);

  // console.log(newArr);
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {newArr.map((e) => (
          <CollectionItem
            key={e.id}
            name={e.name}
            price={e.price}
            imageUrl={e.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
