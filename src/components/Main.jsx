import React from 'react'

function Main(props) {
    const { data } = props
    return (
        <div className="img-box">
            <img src={data.hdurl} alt={data.title || 'bg-img'} className='bg-img' />
        </div>

    )
}

export default Main
