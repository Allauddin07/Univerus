import React from 'react'

function Search(props) {

   

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark blue lighten-2 mb-4">


                <div className="collapse navbar-collapse" id="navbarSupportedContent">


                    <input type="text" value={props.val} onChange={props.change} placeholder="Search by name" aria-label="Search" />


                </div>

            </nav>
        </div>
    )
}

export default Search