import { GETCONTACTS, GETONECONTACT } from "./ActionTypes"

const initialState= {
    contacts : [],
    contact : {}
}

const Reducer=(state = initialState,action)=>{
    switch (action.type) {
         case GETCONTACTS : return {...state, contacts : action.payload}   
         case GETONECONTACT : return {...state, contact : action.payload}
         default: return state

    }
}

export default Reducer