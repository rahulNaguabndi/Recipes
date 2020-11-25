import React from "react";
import RecpieDetails from "./RecpieDetails";

const RecpieGrid = (props) => {
  const renderRecpieDetails = (recpies) => {
    const renderedList = recpies.map((recpie, key) => {
      return <RecpieDetails key={key} data={recpie} />;
    });
    return renderedList;
  };

  return (
    <div className="ui four stackable cards">
      {renderRecpieDetails(props.data.hits)}
    </div>
  );
};

export default RecpieGrid;
