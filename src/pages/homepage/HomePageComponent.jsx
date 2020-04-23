import React from "react";
import "./HomePageComponent.scss";

import Directory from "../../components/directory/DirectoryComponent.jsx";

const HomePage = (props) => {
  console.log(props);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
