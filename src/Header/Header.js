import React from 'react'

const Header = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-light py-3" style={{boxShadow:"0px 0px 3px 0px grey"}}>
                <div className="container">
                    <h3>Movies App</h3>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header
