import React from 'react'

export const LoadingPage = () => {
    return (
        <div className='loading'>
            <div className='loading__container'>
                <h1 className="title">Loading</h1>
                <div className="rainbow-marker-loader"></div>
            </div>
        </div>
    )
}
