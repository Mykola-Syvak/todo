import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    onLabelClick = () => {
        console.log(`Done: ${this.props.label}`);
    };

    render() {

        const { label, important = false } = this.props;

        const style = {
            color: important ? 'tomato' : 'black'
        }
        
        return (
        <span className="todo-list-item">
            <span className="todo-list-item-label"
                style={style}
                onClick={ this.onLabelClick }>
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
    }
};