import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CloseModal } from '../../actions/ui';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';



Modal.setAppElement('#root');


export const CalendarModal = ({title='Add event'}) => {

  /* Time */
  const now = moment().minutes(0).seconds(0).add(1,'hours'); // 3:00:00
  const nowPlus1 = now.clone().add(1, 'hours');

  /* dataPicker time */

  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());

  const {openModal} = useSelector(state => state.ui);
  
  const dispatch = useDispatch()

  const isCloseModal = () => {
    dispatch(CloseModal())
  }

  const handleStartDateChange = (e) => {
    setDateStart(e);
  }

  console.log(dateStart)

  const handleEndDateChange = (e) => {
    console.log(e)
  } 

    return (
        <Modal
        isOpen={openModal}
        onRequestClose={isCloseModal}
        closeTimeoutMS={200}
        className='modal'
        overlayClassName='modal-fondo'
      >
       <h1 className='modal__title'>{title}</h1>
       <form>
         <div className='form__group'>
           <label className='form__label'>Start date and time</label>
           <DateTimePicker
            onChange={handleStartDateChange}
            value={dateStart}
           />
           <label className='form__label'>End date and time</label>
            <DateTimePicker
            onChange={handleEndDateChange}
            value={dateEnd}
           />
         </div>
       </form>
      </Modal>
    )
}
