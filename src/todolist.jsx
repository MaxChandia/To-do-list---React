import React, { useState } from "react";


function ToDoList() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]); 

  const enterTask = (e) => {
    if (e.key === 'Enter') {
      setTodoList(todoList.concat ([inputValue])); 
      setInputValue(''); 
    }
  };

  function countTasks() {
    const taskCount = todoList.length;
    if (taskCount === 0) {
      return "No task pending";
    } 
    else if (taskCount === 1) {
        return "1 task pending"
    }
    else {return taskCount + " tasks pending"
        
    }
    };
  

return (
    <div className="container">
      <h1 className="Title">To do List</h1>
      <div className="taskContainer" >
      <ul>
      <input
        className="List"
        type="text"
        placeholder="What needs to be done?"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={enterTask}
      />
       {todoList.map((item, index) => (
          <li key={index}>{item}
           <button onClick={() => setTodoList(todoList.filter(
            (item, currentIndex) =>
            index != currentIndex))} > X</button> 
          </li> 
        ))}
      </ul>
      <p>{countTasks()}</p>
      </div>
    </div>
  );
        }


export default ToDoList;