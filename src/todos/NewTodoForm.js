import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './Actions';
// import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <div class="input-group mb-3 p-3 ">
                <span class="input-group-text btn-warning">ToDo</span>
                <input 
                type="text" 
                class="form-control"  
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} 
                aria-label="Amount (to the nearest dollar)"/>
                <button
                type="submit" 
                class="input-group-text btn-info"
                onClick={() => {
                    const isDuplicateText =
                        todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
                >Create ToDo</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);