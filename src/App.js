import './App.css';
// Import Components
import Form from './components/form';
import TodoList from './components/todoList';
// Import Hooks
import { useState, useEffect } from "react";

function App() {
  // Add the State here
  const [inputText, setInputText] = useState("");
  // State to store todo's
  const [todos, setTodos] = useState([]);
  // State for filter
  const [filter, setFilter] = useState('all');
  // State for filtered list
  const [filterdedTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  // useEffect
  useEffect(() => {
    // console.log("HEEEYYY");
    filterHandler();
    saveLocalTodos();
  }, [todos, filter]); 

  // Functions for Handers
  const filterHandler = () => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  };

  // Save to Local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos')===null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };

  return (
    <div className="App">
        <header>
          <h1>SouthCounty<span>.</span>Creative Todo List</h1>
        </header>
        <Form 
          inputText={inputText} 
          todos={todos}         
          setTodos={setTodos} 
          setInputText={setInputText} 
          setFilter={setFilter}          
        />

        {/* Add setInputText to copy from form input to items in list */}
        <TodoList 
          setTodos={setTodos} 
          todos={todos} 
          filterdedTodos={filterdedTodos}
        />
    </div>
  );
}

export default App;
