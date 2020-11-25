import React from "react";

const RecpieDetail = (props) => {
  const data = props.data.recipe;

  const renderIngridentsList = (ingLists) => {
    const ingridentList = ingLists.slice(0, 5);
    const list = ingridentList.map((inglist, key) => {
      return (
        <div key={key} className="item">
          <div className="content">
            <a className="header">{inglist.text}</a>
          </div>
        </div>
      );
    });
    return <div className="ui list">{list}</div>;
  };

  const renderLabel = (labels) => {
    const renderedlist = labels.map((label, key) => {
      return (
        <div key={key} className="ui blue horizontal label">
          {label}
        </div>
      );
    });
    return <div className="meta">{renderedlist}</div>;
  };

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{data.label}</div>
        {renderLabel(data.healthLabels)}
        <div className="description">
          {renderIngridentsList(data.ingredients)}
        </div>
      </div>
    </div>
  );
};
export default RecpieDetail;
