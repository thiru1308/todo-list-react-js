import React from "react";

export const Footer = ({ toDoList }) => {
  let countList = toDoList.length;
  return (
    <div className="footer">
      <p className="notify">
        {countList === 0
          ? "You got everything!"
          : `You have ${countList} item(s) on your list.`}
      </p>
    </div>
  );
};
