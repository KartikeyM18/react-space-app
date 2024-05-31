import React from 'react'

function Footer(props) {
    const { handleShowSidebar, data } = props
    return (
        <footer>
            <div className="bg-gradient"></div>
            <div>
                <h1>APOD PROJECT</h1>
                <h2>{data?.title}</h2>

            </div>
            <button onClick={handleShowSidebar}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}

export default Footer
