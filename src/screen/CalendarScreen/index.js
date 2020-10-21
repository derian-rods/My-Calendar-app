import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';

export const CalendarScreen = () => {
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(startLogout());
    }
    return (
        <div>
            <h1>Calander Screen</h1>
            <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
        </div>
    )
}
