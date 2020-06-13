import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function App() {

  const listIcon = <FontAwesomeIcon icon={faClipboardList} />
  const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />
  
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([]) 

  function handleNewTodoChange(event){
    event.preventDefault()
    setNewTodo(event.target.value)
  }

  function handleNewTodo(event){
    event.preventDefault()
    if (newTodo === "") return
    setTodos([...todos, {id: Date.now(), text: newTodo}])
    event.target.reset()
  }

  function removeTodo(id){
    setTodos(todos.filter((todo)=> todo.id !== id))
  }
  
  return (
    <div className="container">
      <h1>Todo List <span>{listIcon}</span></h1>
      <form onSubmit={handleNewTodo}>
        <div className="input-group flex-nowrap">
          <input onChange={handleNewTodoChange} type="text" className="form-control" placeholder={todos.length === 0 ? "No task, rest day!" : "What needs to be done?"} aria-label="Username" aria-describedby="addon-wrapping" />
        </div>
        <ul className="list-group">
          {todos.map((todo) =>(<li class="list-group-item" key={todo.id}>{todo.text}<span class="" onClick={()=> removeTodo(todo.id)}> {trashIcon}</span></li>
          ))}
        </ul>
           
      </form>
    </div>
  );
}

export default App;

