import React from 'react';

function SearchBar({ searchQuery, setSearchQuery, setLocation, weather, errMsg, setErrMsg }) {

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchQuery.trim() === "") {
            setErrMsg("Invalid input, try again!");
        } 
        else if(searchQuery !== weather?.name) {
            setErrMsg(`${searchQuery}: No such location try again!`)
            setSearchQuery
        }
        else {
            setLocation(searchQuery);
            setSearchQuery("");
            setErrMsg(""); 
        }
    }

    return (
        <div className="flex">
            <input
                type="text"
                className="border border-black"
                placeholder="Enter location"
                value={searchQuery}
                onChange={(e) => handleSearch(e)}
            />
            <button onClick={(e) => handleSubmit(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
            {errMsg && <p className="text-red-600">{errMsg}</p>}
        </div>
    );
}

export default SearchBar;
