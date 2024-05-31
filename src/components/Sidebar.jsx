import React from 'react'

function Sidebar(props) {
    const { handleShowSidebar, data } = props
    return (
        <div className='sidebar'>
            <div className="sidebar-bg" onClick={handleShowSidebar}></div>
            <div className="sidebar-content">

                <h2>{data?.title}</h2>

                <div className='sidebar-desc-container'>
                    <p className='sidebar-desc-date'>{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleShowSidebar}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Sidebar
