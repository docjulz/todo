// import React from "react";

const Form = ({setInputText, todos, setTodos, inputText, setFilter}) => {
    // Create function to create hook. Name 'Handler' to specify action
    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    }
    // Create a function for the submit Handler
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        // Reset input text on button click
        setInputText("");
    };
    
    const statusHandler = (e) => {
        // console.log(e.target.value);
        setFilter(e.target.value);
    };

    return ( 
        <form>
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input" 
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
     );
}
 
export default Form;