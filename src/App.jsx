import { useState } from 'react'
import './App.css'

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addListItem = () => {
    if (inputValue.trim() !== "") { //The use of trim here ensures that there is no empty space before or after the input, keeping the to do list tidy and within the provided space, also prevents the user from adding an empty string
      setTaskList([...taskList, inputValue]);
      setInputValue("");
    }
  };

  // asked ChatGPT why this code wasn't working, the _ on line 18 is needed as a placeholder. Even if it has no value, javaScript functions need at least one parameter to work.
  const removeListItem = (index) => {
    const removeTask = taskList.filter((_, i) => i !== index); //.filter method returns new array without affecting the original (have I made it too complicated, or is this required to isolate and remove a single task?)
    setTaskList(removeTask);
  };

  return (
    <div>
      {taskList.map((task, index) => (
        <div key={index}>
          <p className="listItem">{task}</p>
          <button onClick={() => removeListItem(index)}>Delete</button>
        </div>
      ))}
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addListItem}>Add</button>
    </div>
  );
}

export default App


// const addListItem = () =>{
//       let storedTasks = [...taskList];
//       storedTasks.push(storedTasks[storedTasks.length - 1] + 1)
//       addTaskList(storedTasks)


// return (
//   <div>
//     {taskList.map((task, index) => {
//       return <p key={index}></p>;
//     })}
//     <input></input>
//     <button onClick={addListItem}>Add</button>
//   </div>
// );