import React from "react";
import Trash from "../assets/Trash.svg";
import Check from "../assets/Check.svg";
export const ToDo = (props) => {
  const {
    task = "Task",
    date = { day: 10, month: 9, year: 1999 },
    id,
    toDoList,
    setTodoList,
  } = props;
  const deleteItem = (e) => {
    setTodoList((prev) => {
      let newList = toDoList.filter((e) => e.id !== id);
      return newList;
    });
  };
  return (
    <div className="todo flex flex-row bg-remolacha-fruit w-[90%] border-black border-[5px] rounded-[1rem] overflow-hidden">
      <div className=" flex-1 text-start pl-4 overflow-hidden">
        <h3 className=" text-[1.5rem] text-white font-bold">{task}</h3>
        <hr className=" border-black border-b-var(--outline-width) " />
        <p className="text-[14px] text-white font-semibold">
          {date.month + "/" + date.day + "/" + date.year}
        </p>
      </div>
      <button
        onClick={deleteItem}
        className="flex-2 flex items-center justify-center w-[4rem] bg-green-400 border-black border-l-[5px] transition-all hover:bg-green-300"
      >
        <img src={Check} width="35" alt="" />
      </button>
    </div>
  );
};
