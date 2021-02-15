import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import TodoForm from './components/TodoForm';
import Todo from './components/Todo'

function App() {

  // can only have up to 7 todo's on the list 

    const [todos, setTodos] = useState([
      {
        text:"",
        description: "",
        isCompleted: false,
        date: new Date().toLocaleDateString()
      }
    ])

    const addTodo = (text) => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos)
    }

    const completeTodo = (index) => {
      const newTodos = [...todos]
      newTodos[index].isCompleted = true
      setTodos(newTodos)
    }

    const removeTodo = (index) => {
      const newTodos = [...todos]
      newTodos.splice(index,1)
      setTodos(newTodos)
      console.log(newTodos)
    }

  return (
    <div className="App">

      <ul>
      {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              todo={todo}
              date={todo.date}
            />
          ))}
      </ul>

      <TodoForm addTodo={addTodo}/>

    </div>
  );
}

export default App;
