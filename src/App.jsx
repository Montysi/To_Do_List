import { useState } from 'react'
import './App.css'

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [finishedTasks, setFinishedTasks] = useState([]);

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

  const finishTask = (index) => {
    const finishedTask = taskList[index];
    removeListItem(index);
    setFinishedTasks([...finishedTasks, finishedTask]);
  }

  return (
    <div>
      <h2>Tasks to complete</h2>
      {taskList.map((task, index) => (
        <div key={index}>
          <p className="listItem">{task}</p>
          <button onClick={() => removeListItem(index)}>Delete</button>
          <button onClick={() => finishTask(index)}>Complete</button>
        </div>
      ))}
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addListItem}>Add</button>

      <h2>Completed Tasks</h2>
      {
      finishedTasks.map((task, index) => (
        <div key={index}>
          <p className="listItem">{task}</p>
        </div>
      ))
      }
    </div>
  );
}

export default App

