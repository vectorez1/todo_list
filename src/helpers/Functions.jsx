
export const AddItem = (e) =>{
    //e.preventDefault();
    let value = e.target.todoInput.value;
    let todo = {
      title:value,
      date : {day:new Date().getDate(),
              month:new Date().getMonth(),
              year:new Date().getFullYear()},
      id:Math.random()*100
    };
    if(!value){return}
    if(localStorage.getItem("todoList")){
      let item = JSON.parse(localStorage.getItem("todoList"));
      item.push(todo);
      localStorage.setItem("todoList",JSON.stringify(item));
    }else{
      localStorage.setItem("todoList",JSON.stringify([todo]));
    }
    e.target.todoInput.value = "";
}
/* export const AddItems = (e,setList) =>{
  e.preventDefault();
  let value = e.target.todoInput.value;
  let todo = {
    title:value,
    date : {day:new Date().getDate(),
            month:new Date().getMonth(),
            year:new Date().getFullYear()},
    id:Math.random()*100
  };
  setList(prev=>[...prev,todo]);
  e.target.todoInput.value = "";
} */

export const getItem = (listName = 'todoList') =>{
    return JSON.parse(localStorage.getItem(listName));
}