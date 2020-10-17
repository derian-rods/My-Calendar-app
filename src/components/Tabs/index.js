import React  from 'react'
import { LoginForm } from '../LoginForm'

export const Tabs = () => {

    return (
        <div className='tabs'>
            <input className='tabs__input' id='login' type='radio' name = 'tabs' defaultChecked/>
            <label className='tabs__label' htmlFor='login'>Login</label>
            <input className='tabs__input' id='beta' type='radio' name = 'tabs'/>
            <label className='tabs__label' htmlFor='beta'>Sing in</label>
          <div className='tabs__container'>
              <div className='tabs__content'>
                  <LoginForm />
              </div>
              <div className='tabs__content'>
                  <h1>Beta</h1>
                  <p>Occaecat dolor minim occaecat fugiat in quis duis officia ex ipsum proident Lorem sunt ea. Laboris ea pariatur elit quis labore labore. Proident aliqua duis eu dolore dolor. Dolore anim pariatur sit officia cillum veniam nulla aute occaecat dolor incididunt.</p>
              </div>
          </div>
        </div>
    )
}
