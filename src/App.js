import './App.css';
// Import Components
import Form from './components/form';
import TodoList from './components/todoList';
// Import Hooks
import { useState } from "react";

function App() {
  // Add the State here
  const [inputText, setInputText] = useState("");
  // State to store todo's
  const [todos, setTodos] = useState([]);
  // State for filter
  const [filter, setFilter] = useState('all');
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
        <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
