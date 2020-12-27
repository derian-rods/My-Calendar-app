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
  const [formValue, setformValue] = useState({
    dateStart,
    dateEnd,
  })

  const {openModal} = useSelector(state => state.ui);
  
  const dispatch = useDispatch()

  const isCloseModal = () => {
    dispatch(CloseModal())
  }

  
  const handleStartDateChange = (e) => {
    setDateStart(e);
  }


  const handleEndDateChange = (e) => {
      setDateEnd(e);
  } 

    /*Handle Form */

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formValue);
    }
  const handleOnChange = ({target}) => {
    setformValue({
      ...formValue,
      [ target.name ]: target.value
    })
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
       <form onSubmit={handleSubmit}>
         <div className='form__group'>
           <label className='form__label'>Start date and time</label>
           <DateTimePicker
            onChange={handleStartDateChange}
            value={dateStart}
           />
         </div>
         <div className='form__group'>
           <label className='form__label'>End date and time</label>
            <DateTimePicker
            onChange={handleEndDateChange}
            value={dateEnd}
           />
         </div>
         <hr />
         <div className='form__group'>
          <label className='form__label'>title and note</label>
          <input 
            type='text'
            placeholder='Title'
            name='title'
            autoComplete='off'
            onChange={handleOnChange}

          />
          <small id='emailHelp' className='text__muted' >short description</small>
         </div>
         <div className='form__group'>
            <textarea
              type='text'
              className='form-control'
              placeholder='Notes'
              name='notes'
              onChange={handleOnChange}
            ></textarea>
          <small id='emailHelp' className='text__muted' >Additional Information</small>
         </div>
         <div className='form_bottons-center'>
          <button type='submit' className='btn btn-primary'>
            <i className="far fa-save"></i>
            <span className='ml-2'>Guardar</span>
          </button>
         </div>
       </form>
      </Modal>
    )
}
