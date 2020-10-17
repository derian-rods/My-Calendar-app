import React from 'react'

export const LoginForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    
    }

    return (
        <div className='login__form'>
            <form onSubmit={handleSubmit}>
                <div className='form__group'>
                    <label className='form__label'>E-mail</label>
                    <input type='text' name='email' id='email' placeholder='E-mail' autoComplete='off'/>
                </div>
                <div className='form__group'>
                    <label className='form__label'>Password</label>
                    <input type='password' name='password' id='password' placeholder='Password'/>
                </div>
                <button className='btn btn-primary btn-block' type='submit'>Login</button>
            </form>
            <div className='login__footer-register'>
                <input className='tabs__input' id='beta' type='radio' name = 'tabs'/>
                <label htmlFor='beta'>Create new account</label>
            </div>
        </div>
    )
}
