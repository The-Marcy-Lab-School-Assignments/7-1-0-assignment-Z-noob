// TODO: Make this a controlled component. On each stroke of the key, it should filter the displayed pokemon
import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        onFilterChange(newQuery); // Notify parent component about the change
    };

    return (
        <div className="ui search">
            <div className="ui icon input">
                <input
                    className="prompt"
                    placeholder="Search by Name..."
                    value={query}
                    onChange={handleChange}
                />
                <i className="search icon" />
            </div>
        </div>
    );
};

export default Filter;