const lastnameReducer = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_LASTNAME':
            return action.payload;
        default:
            return state;
    }
}

export default lastnameReducer