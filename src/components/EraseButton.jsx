import React, { useState } from "react";
import Trash from "../assets/TrashF.svg";
import TrashOpen from "../assets/TrashFOpen.svg";

export const EraseButton = ({ toDoList, setTodoList }) => {
  const [isMouseIn, setMouseIn] = useState(false);
  const handleErase = (e) => {
    if (toDoList.length < 1) {
      return;
    }
    setTodoList([]);
  };
  return (
    <button
      onMouseEnter={(e) => setMouseIn(true)}
      onMouseLeave={(e) => setMouseIn(false)}
      className=" transition-all h-[110px] w-[100%] bg-red-500 border-t-black border-t-[5px] flex justify-center items-center hover:bg-red-800"
      onClick={handleErase}
    >
      {!isMouseIn ? (
        <img className="w-[60px]" src={Trash} alt="" />
      ) : (
        <img className="w-[60px]" src={TrashOpen} alt="" />
      )}
      <h2 className=" delete text-[40px] text-white ">DELETE ALL?</h2>
    </button>
  );
};
