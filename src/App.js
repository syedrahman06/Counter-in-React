import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';


function App() {

  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const inputTask = useRef(null);

  const addTask = () => {
    setTodoList([...todoList, currentTask]);
    inputTask.current.value = "";
    setCurrentTask("");

  }

  return (
    <div className="App">
      <div className='head'>

        <h1>To Do List App</h1>
        <div className='task-head'>
          <input
            type="text"
            placeholder='Task...'
            ref={inputTask}
            onChange={(event) => {
              setCurrentTask(event.target.value)
            }} />

          <button onClick={addTask}>Add Task</button>
        </div>

      </div>

      <hr />

      <div>
        <ul>
          {todoList.map((val, key) => {
            return <li key={key}>{val}</li>
          })}
        </ul>
      </div>

    </div >

  );
}

export default App;
