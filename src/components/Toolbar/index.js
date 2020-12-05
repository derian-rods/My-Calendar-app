import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import logout from '../../assets/cerrar-sesion.svg'

export default function Toolbar() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(startLogout());
    }
    return (
        <nav className='toolbar'>
            <div className='toolbar__text'>
            </div>
            <div className='toolbar__buttons'>
                <img className='btn-toolbar' src={logout} alt='logout' onClick={handleLogout}/>
            </div>
        </nav>
    )
}
