import { useState } from 'react'
import './App.css'

const App = () => {

  const [taskList, setTaskList] = useState([]);
  const[inputValue, setInputValue] = useState('');

  const addListItem = () =>{
      if (inputValue.trim() !== "") {          //The use of trim here ensures that there is no empty space before or after the input, keeping the to do list tidy and within the provided space, also prevents the user from adding an empty string
        setTaskList([...taskList, inputValue]);
        setInputValue('')
      }
  }

  return (
    <div>
        {
          taskList.map((task, index) => (
            <p key={index}>{task}</p>
          ))
        }
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
        <button onClick={addListItem}>Add</button>
    </div>
  )
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