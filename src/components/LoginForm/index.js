import React from 'react'
import {useForm} from '../../hooks/useForm';
import validator from 'validator';
import google_logo from '../../assets/Google__G__Logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startLoginWithGoogle } from '../../actions/auth';
export const LoginForm = () => {

    // redux
    const dispatch = useDispatch();
    const {msgError, loading} = useSelector(state => state.ui);
    // handle Form
    const [ value, handleInputChange] = useForm({
        email: '',
        password: ''
    });
    const {email, password} = value;
    
    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleFormValio()){
            dispatch();
        }
    }
    // Google Login

    const handleGoogleLogin = () => {
        dispatch(startLoginWithGoogle());
    }
 
    const handleFormValio  = () => {
        switch (true) {
            case email.trim().length === 0: 
                dispatch(setError('Email is required'));
                return false

            case !validator.isEmail(email):
                    dispatch(setError('Email no is valid'));
                    return false

            case password.trim().length === 0:
                    dispatch(setError('The password is required'));
                    return false

            case password.length < 5:
                dispatch(setError("The password you've entered is incorrect. "));
                return false

            default:
                dispatch(removeError());
                return true
        }   
       }
    return (
        <div className='login__form'>
            {
                msgError !== null && (
                <div className='msg__error'>
                    <span>{msgError}</span>
                </div>
            )
            }
            <form onSubmit={handleSubmit}>
                <div className='form__group'>
                    <label className='form__label'>E-mail</label>
                    <input type='text' name='email'  placeholder='E-mail' autoComplete='off' onChange={handleInputChange} value={email}/>
                </div>
                <div className='form__group'>
                    <label className='form__label'>Password</label>
                    <input type='password' name='password'  placeholder='Password' onChange={handleInputChange} value={password}/>
                </div>
                <button className='btn btn-primary btn-block' type='submit' disabled={loading}>Login</button>
            </form>
            <div className='login__social-networks' onClick={handleGoogleLogin}>
                    <p className='login__social-text'>Login With Social Networks</p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src={google_logo} alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
            <div className='login__footer-register'>
                <input className='tabs__input' id='sing-in' type='radio' name = 'tabs'/>
                <label htmlFor='sing-in'>Create new account</label>
            </div>
        </div>
    )
}
