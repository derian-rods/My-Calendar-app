import {types} from '../types'

const initialState = {
    msgError: null,
    loading: false,
    lastView: localStorage.getItem('lastView'),
    openModal: false,
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
            case types.uiUpgradeLastView:
              return{
                  ...state,
                  lastView: action.payload
              }
              case types.uiOpenModal:
                return{
                  ...state,
                  openModal: action.payload,
                }
              case types.uiCloseModal:
                return{
                  ...state,
                  openModal: action.payload,
                }
        default:
            return state
    }
}