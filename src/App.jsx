import { useState } from 'react'
import './App.css'

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inProgressTasks, setInProgressTasks] = useState([]);
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
    const removeFinishedTask = finishedTasks.filter((_, i) => i !== index);
    const removeInProgressTask = inProgressTasks.filter((_, i) => i !== index);
    setTaskList(removeTask);
    setFinishedTasks(removeFinishedTask);
    setInProgressTasks(removeInProgressTask);
  };

  const taskInProgress = (index) => {
    const inProgressTask = taskList[index];
    removeListItem(index);
    setInProgressTasks([...inProgressTasks, inProgressTask])
  }

  const finishTask = (index) => {
    const finishedTask = inProgressTasks[index];
    removeListItem(index);
    setFinishedTasks([...finishedTasks, finishedTask]);
  }

  return (
    <>
      <div className="inputBoxWrapper">
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={addListItem}>Add</button>
      </div>
      <div className="parentContainer">
        <div className="listWrapperMain">
          <div className="toCompleteList">
            <h2 className="textConfig">Tasks to complete</h2>
            {taskList.map((task, index) => (
              <div key={index}>
                <p className="listItem">{task}</p>
                <button onClick={() => removeListItem(index)}>Delete</button>
                <button className="buttonStyle" onClick={() => taskInProgress(index)}>Active</button>
              </div>
            ))}
          </div>

          <div className="inProgressList">
            <h2 className="textConfig">Tasks in Progress</h2>
            {inProgressTasks.map((task, index) => (
              <div key={index}>
                <p className="listItem">{task}</p>
                <button onClick={() => finishTask(index)}>Complete</button>
                <button onClick={() => removeListItem(index)}>Delete</button>
              </div>
            ))}
          </div>

          <div className="completedList">
            <h2 className="textConfig">Completed Tasks</h2>
            {finishedTasks.map((task, index) => (
              <div key={index}>
                <p className="listItem">
                  {task}
                </p>
                <button onClick={() => removeListItem(index)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App

