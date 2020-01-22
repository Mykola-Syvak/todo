import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    state = {
        done: false
    };

    onLabelClick = () => {
        this.setState({
            done: true
        });
    };

    render() {

        const { label, important = false } = this.props;
        const { done } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        const style = {
            color: important ? 'tomato' : 'black'
        }
        
        return (
        <span className={classNames}>
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