// import component
import Todo from "./Todo";

// Parent Component
const TodoList = ({todos}) => {
    console.log(todos);
    return ( 
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    // Remember to add a key for all list items
                    <Todo key={todo.id} text={todo.text} />
                ))}
            </ul>
        </div>
     );
}
 
export default TodoList;