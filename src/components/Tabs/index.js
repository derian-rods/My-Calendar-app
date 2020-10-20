import React  from 'react'
import { LoginForm } from '../LoginForm'
import { RegisterForm } from '../RegisterForm'

export const Tabs = () => {

    return (
        <div className='tabs'>
            <input className='tabs__input' id='login' type='radio' name = 'tabs' defaultChecked/>
            <label className='tabs__label' htmlFor='login'>Login</label>
            <input className='tabs__input' id='sing-in' type='radio' name = 'tabs'/>
            <label className='tabs__label' htmlFor='sing-in'>Sing in</label>
          <div className='tabs__container'>
              <div className='tabs__content'>
                  <LoginForm />
              </div>
              <div className='tabs__content'>
                 <RegisterForm />
              </div>
          </div>
        </div>
    )
}
