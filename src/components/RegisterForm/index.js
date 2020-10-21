import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { startRegister } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import {useForm} from '../../hooks/useForm';

export const RegisterForm = () => {
    // handleFormInput
    const [ value, handleInputChange] = useForm({
        username: '',
        email: '',
        password: '',
        password2: '',
    });
    const {username, email, password, password2} = value;
    
    //message error  

    const {msgError} = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const handleFormValio  = () => {
        switch (true) {
            case username.trim().length === 0: 
                dispatch(setError('Username is required'));
                return false
            case username.trim().length < 3:
                dispatch(setError('The username is not valid, it must be more than 3 characters'));
                return false
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
            case password !== password2:
                dispatch(setError('password does not match'));
                return false
            default:
                dispatch(removeError());
                return true
        }   
       }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleFormValio()){
            dispatch(startRegister(email, password, username));
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
                <label className='form__label'>User Name</label>
                <input type='text' name='username' placeholder='E-mail' autoComplete='off' onChange={handleInputChange} value={username}/>
            </div>
            <div className='form__group'>
                <label className='form__label'>E-mail</label>
                <input type='text' name='email'  placeholder='E-mail' autoComplete='off' onChange={handleInputChange} value={email}/>
            </div>
            <div className='form__group'>
                <label className='form__label'>Password</label>
                <input type='password' name='password' placeholder='Password' onChange={handleInputChange} value={password}/>
            </div>
            <div className='form__group'>
                <label className='form__label'>Confirm password</label>
                <input type='password' name='password2'  placeholder='Confirm password' onChange={handleInputChange} value={password2}/>
            </div>
            <button className='btn btn-primary btn-block' type='submit'>Sing in</button>
        </form>
        <div className='login__footer-register'>
            <input className='tabs__input' id='login' type='radio' name = 'tabs'/>
            <label htmlFor='login'>You already have an account</label>
        </div>
    </div>
    )
}
