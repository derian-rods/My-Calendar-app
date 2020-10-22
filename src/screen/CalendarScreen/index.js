import React from 'react'
import { BigCalendar } from '../../components/Calendar';
import Toolbar from '../../components/Toolbar';

export const CalendarScreen = () => {

    return (
        <div className='calendar__screen'>
            <Toolbar />
            <main>
                <BigCalendar />
            </main>
        </div>
    )
}
