import React from "react";
import "./DirectoryComponent.scss";

import MenuItem from "../menu-items/MenuItemsComponent.jsx";
import { useSelector } from "react-redux";

const Directory = () => {
  const sections = useSelector((state) => state.directory.sections);
  console.log("sections", sections);

  return (
    <div className="directory-menu">
      {sections.map((e) => (
        <MenuItem
          key={e.id}
          title={e.title}
          img={e.imageUrl}
          size={e.size}
          linkUrl={e.linkUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
