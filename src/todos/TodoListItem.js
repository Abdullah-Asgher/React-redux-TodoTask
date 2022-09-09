import React from 'react';
// import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed, onEditPressed }) => (
    <div className="todo-item-container text-center ">
        <h3>{todo.text}</h3>
        <div className="buttons-container input-group d-flex justify-content-center">
            {todo.isCompleted
                ? null
                : <button
                    onClick={() => onCompletedPressed(todo.text)}
                    class="input-group-text mx-1 btn-success">Mark As Completed</button>}
                    {/* <button
                onClick={() => onEditPressed(todo.text)}
                className="remove-button">Edit</button> */}
            <button
                onClick={() => onRemovePressed(todo.text)}
                class="input-group-text btn-danger">Remove</button>
        </div>
    </div>
);

export default TodoListItem;