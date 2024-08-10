import React, { useState, useRef } from 'react';
import './SearchBox.css';

const SearchBox = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');

    const containerRef = useRef(null);

    const handleFocus = () => {
        setIsExpanded(true);
    };

    const handleBlur = (event) => {
        // Using setTimeout to allow clicks on inner elements before collapsing
        setTimeout(() => {
            if (containerRef.current && !containerRef.current.contains(document.activeElement)) {
                setIsExpanded(false);
            }
        }, 100);
    };

    const handleSearch = () => {
        console.log('Job Type:', jobType);
        console.log('Location:', location);
        // Add your search logic here
    };

    return (
        <div
            className="search-container"
            onBlur={handleBlur}
            onFocus={handleFocus}
            ref={containerRef}
        >
            {!isExpanded && (
                <input
                    type="text"
                    className="search-box"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={handleFocus}
                />
            )}
            {isExpanded && (
                <div className="expanded-search">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Job Type"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    />
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <button className="search-button" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            )}
        </div>
    );
};

export default SearchBox;
