import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CloseModal } from '../../actions/ui';



;

Modal.setAppElement('#root');


export const CalendarModal = () => {
    
  const {openModal} = useSelector(state => state.ui);
  
  const dispatch = useDispatch()

  const isCloseModal = () => {
    dispatch(CloseModal())
  }
    return (
        <Modal
        isOpen={openModal}
        onRequestClose={isCloseModal}
        closeTimeoutMS={200}
        className='modal'
        overlayClassName='modal-fondo'
      >
           

        <h1>HEllo people</h1>
      </Modal>
    )
}
