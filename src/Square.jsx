import React from "react";

const Square = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid",
        height: "80px",
        width: "80px",
      }}
      onClick={props.onClick}
    >
      <h4>{props.value ? props.value : "/"}</h4>
    </div>
  );
};

export default Square;
