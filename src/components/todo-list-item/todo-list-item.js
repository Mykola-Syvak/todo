import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
    
    const style = {
        color: important ? 'tomato' : 'black'
    }
    
    return (
    <span className="todo-list-item">
        <span className="todo-list-item-label"
            style={style}>
            { label }
        </span>
        <span className="todo-list-button">
            <button type="button"
                    className="btn btn-outline-success btn-sm">
                <i className="fa fa-exclamation" />
            </button>
            <button type="button"
                    className="btn btn-outline-danger btn-sm">
                <i className="fa fa-trash-o" />
            </button>
        </span>
    </span>
    );
};

export default TodoListItem;