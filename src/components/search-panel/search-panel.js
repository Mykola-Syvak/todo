import React from 'react';

import './search-panel.css';

const SearchPanel = () => {

    const searchText = '  Type to search';
    const searchStyle = {
         fontSize: '20px'
    };
    return <input
     className="search-panel"
     style={searchStyle}
     placeholder={searchText} />;
};

export default SearchPanel;