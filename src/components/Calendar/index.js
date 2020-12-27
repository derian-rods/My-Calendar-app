import React from 'react';
import {Calendar, momentLocalizer}from 'react-big-calendar'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import { openModal, upgradeLastView } from '../../actions/ui';
import { CalendarModal } from '../CalendarModal';


const localizer = momentLocalizer(moment) // or globalizeLocalizer

export const BigCalendar = () => {
    
    const {lastView} = useSelector(state => state.ui);
    const {events} = useSelector(state => state.calendar);
    const dispatch = useDispatch();
    

    
    
    const onViewChange = (e) => {
        localStorage.setItem('lastView', e);
        dispatch(upgradeLastView(e));
    }
    
    const isSelectEvent = (e) => {
        
    }
    
    const onDoubleClick = () => {
        dispatch(openModal());
    }
    return(
        <>
        <Calendar
          titleAccessor='title'
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          View={'may'}
          events={events}
          onView={onViewChange}
          onSelectEvent={isSelectEvent}
          onDoubleClickEvent={onDoubleClick}
          view={lastView}
          style={{
              height:'92vh',
              padding: '1em',
            }}
        />
        <CalendarModal />
      </>
    )
}