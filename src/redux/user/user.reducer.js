const INITIAL_STATE = {
    currentUser : null
}

const userReducer = ( state = INITIAL_STATE, action ) => {  //state default value is set (if no value is passed to it)
    switch (action.type){

        case 'SET_CURRENT_USER' : 
        return{
            ...state,
            currentUser : action.payload
        }

        default :
        return state;
    }
}

export default userReducer;