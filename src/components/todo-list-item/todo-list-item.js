import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState({
            done: true
        });
    };

    onMarkImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            };
        });
    };

    render() {

        const { label } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }
        
        return (
        <span className={classNames}>
            <span className="todo-list-item-label"
                onClick={ this.onLabelClick }>
                { label }
            </span>
            <span className="todo-list-button">
                <button type="button"
                        className="btn btn-outline-success btn-sm"
                        onClick={this.onMarkImportant}>
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