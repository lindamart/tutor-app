import React from 'react';

function SearchBar({ placeholder, data}) {
    return (
        <div className="search">
            <div className="Searching" ></div>
            <input type="text" placeholder={placeholder}></input>
            <div className="searchIcon"></div>
            <div className="results"></div>
                <div className="suggestContainer">
                    <div className="row">
                        <div className="col">
                            <ul className="javascript">
                                <li>Javascript</li>
                            </ul>

                        </div>
                        <div className="col">
                            <ul className="css">
                                <li>CSS</li>
                            </ul>

                        </div>
                        <div className="col">
                            <ul className="apis">
                                <li>APIs</li>
                            </ul>

                        </div>
                        <div className="col">
                            <ul className="mern">
                                <li>MERN</li>
                            </ul>

                        </div>
                        <div className="col">
                            <ul className="sql">
                                <li>SQL</li>
                            </ul>

                        </div>
                        <div className="col">
                            <ul className="react">
                                <li>React</li>
                            </ul>

                        </div>
                        <div className="dataResult"></div>

                    </div>

                </div>
        </div>
    )
}

export default SearchBar