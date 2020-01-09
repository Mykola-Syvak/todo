import React from 'react';

import TodoListItem from './tofo-list-item';

const TodoList = () => {

    return (
         <ul>
              <li><TodoListItem label="Drink Coffee" /></li>
              <li><TodoListItem 
               label="Built React App"
               important /></li>
         </ul>
    );
};

export default TodoList;