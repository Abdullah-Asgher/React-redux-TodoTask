import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, markTodoAsCompleted, editTodo } from './Actions';
// import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, onEditPressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem
            todo={todo}
            onEditPressed={onEditPressed}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}/>)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
    onEditPressed: text => dispatch(editTodo(text)),

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);