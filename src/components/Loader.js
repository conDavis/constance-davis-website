import React from "react";
import Loader from "react-loader-spinner";

const ConLoader = () => {
  return (
    <Loader
      type="Circles"
      color="#b05490"
      height={80}
      width={80}
      style={{ paddingTop: "10%" }}

    />
  );
};

export default ConLoader;
