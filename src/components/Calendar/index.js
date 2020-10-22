import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { upgradeLastView } from '../../actions/ui';



const localizer = momentLocalizer(moment); //or globalizeLocalizer

const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: 'red'
}]

export const BigCalendar = () => {

   const {lastView} = useSelector(state => state.ui);
   const dispatch = useDispatch();
   const doubleClickEvent = (e) => {
        console.log(e)
   } 

   const isSelectEvent = (e) => {
    console.log(e)
} 

    const onViewChange = (e) => {
        localStorage.setItem('lastView', e)
        dispatch(upgradeLastView(e));
    }

    return (
        <div className='calendar'>
            <Calendar 
                localizer={localizer}
                events={events}
                startAccessor='start'
                endAccessor='end'
                onDoubleClickEvent={doubleClickEvent}
                onSelectEvent={isSelectEvent}
                onView={onViewChange}
                view={lastView}
                style={{ padding: '1em', width: '100%', height: '92vh'}}
            />
        </div>
    )
}
