import {types} from '../types'

const initialState = {
    msgError: null,
    loading: false,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
          return{
            ...state,
            msgError: action.payload
           
          }
    
        case types.uiRemoveError:
          return{
            ...state,
            msgError: null
           
          }
        case types.uiStartLoading:
          return{
            ...state,
            loading: action.payload
          }
          case types.uifinishLoading:
            return{
              ...state,
              loading: action.payload
            }
        default:
            return state
    }
}