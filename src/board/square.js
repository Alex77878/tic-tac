import React from "react";

export const Square = ({ value, onClick }) => {
  //i dont undertend why function
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
