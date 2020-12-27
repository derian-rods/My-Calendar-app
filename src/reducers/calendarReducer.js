import {types} from '../types'
import moment from 'moment'
const initialState = {
    events: [{
        title: 'Mi cumpleaños',
        start: moment().toDate(),
        end: moment().add(5, 'hours').toDate(),
        bgColor: 'red'
    }    
],
}


export const calendarReducer = (state=initialState, action) => {
    switch (action.type) {
        case types:
            
            break;
    
        default:
            return state;
    }
}