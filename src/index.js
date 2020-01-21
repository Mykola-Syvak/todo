import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';

import './main.css';

const App = () => {
     
     const todoData = [
          { label: 'Drink Coffeee', important: false, id: 1 },
          { label: 'Make Awesome App', important: true, id: 2 },
          { label: 'Have a lunch', important: false, id: 3 }
     ];

     return (
          <div className="indexClass">
               <AppHeader />
               <div className="search-panel">
                    <SearchPanel />
                    <ItemStatusFilter />
               </div>
               <TodoList todos={todoData} />
          </div>
     );
};

ReactDOM.render(<App />,
     document.getElementById('root'));

