import React from 'react';
import {Calendar, momentLocalizer}from 'react-big-calendar'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import { openModal, upgradeLastView } from '../../actions/ui';
import { CalendarModal } from '../CalendarModal';


const localizer = momentLocalizer(moment) // or globalizeLocalizer

export const BigCalendar = () => {
    
    const {lastView} = useSelector(state => state.ui);
    const dispatch = useDispatch();
    
    const Events = [{
        title: 'Mi cumpleaños',
        start: moment().toDate(),
        end: moment().add(5, 'hours').toDate(),
        bgColor: 'red'
    }]
    
    
    const onViewChange = (e) => {
        localStorage.setItem('lastView', e);
        dispatch(upgradeLastView(e));
    }
    
    const isSelectEvent = (e) => {
        console.log(e);
    }
    
    const onDoubleClick = () => {
        dispatch(openModal());
    }
    return(
        <>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          View={'may'}
          events={Events}
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