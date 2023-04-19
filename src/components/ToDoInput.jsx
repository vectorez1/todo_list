import React, { useEffect, useId, useState } from "react";
import Add from "../assets/Add.svg";
//import { AddItem,AddItems } from '../helpers/Functions'

export const ToDoInput = ({ setTodoList }) => {
  const [input, setInput] = useState("");

  const addItems = (e) => {
    e.preventDefault();
    let value = input;
    if (value.length < 1) {
      return;
    }
    let todo = {
      title: value,
      date: {
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      },
      id: Math.random() * 100,
    };

    setTodoList((prev) => [...prev, todo]);
    setInput("");
  };

  return (
    <form
      className="relative w-[80%] h-[70px] bg-remolacha-800 border-black border-b-[5px] border-l-[5px] border-r-[5px] rounded-b-[30px] flex justify-center items-center"
      onSubmit={(e) => addItems(e)}
    >
      <p
        className={`absolute top-[60px] p-1 bg-remolacha-300 rounded-[13px] font-bold text-red-700 transition-all ${
          input.length < 30 ? "invisible" : "visible"
        }`}
      >
        To Many Characters!
      </p>
      <div className="border-inherit border-[5px] rounded-[10px] overflow-hidden w-[90%] h-[40px] flex justify-center items-center">
        <input
          className={`h-[100%] w-[100%] border-r-[5px] border-inherit p-2 bg-remolacha-200 placeholder-remolacha-300 ${
            input.length == 30 && "text-red-600"
          }`}
          type="text"
          value={input}
          name="todoInput"
          maxLength={30}
          placeholder="Just Do It!"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="p-2 bg-remolacha-600 h-[100%] transition-all hover:bg-remolacha-800"
          type="submit"
        >
          <img src={Add} width="15px" />{" "}
        </button>
      </div>
    </form>
  );
};
