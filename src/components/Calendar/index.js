import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, upgradeLastView } from '../../actions/ui';
import { CalendarModal } from '../CalendarModal';



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
  
  
    //  Calendar events
   const isDoubleClickEvent = (e) => {
        console.log(e)
    } 
    
    const isSelectEvent = (e) => {
        // dispatch(openModal())
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
                onSelectEvent={isSelectEvent}
                onView={onViewChange}
                onDoubleClickEvent={(e)=>console.log(e)}
                view={lastView}
                style={{ padding: '1em', width: '100%', height: '92vh'}}
            />
            <CalendarModal />
        </div>
    )
}
