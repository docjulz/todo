import './App.css';
// Import Components
import Form from './components/form';
import TodoList from './components/todoList';
// Import Hooks
import { useState } from "react";

function App() {
  // Add the State here
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
        <header>
          <h1>SouthCounty<span>.</span>Creative Todo List</h1>
        </header>
        <Form setInputText={setInputText} />
        
        {/* Add setInputText to copy from form input to items in list */}
        <TodoList setInputText={setInputText} />
    </div>
  );
}

export default App;
