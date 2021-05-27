const firstnameReducer = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_FIRSTNAME':
            return action.payload;
        default:
            return state;
    }
}

export default firstnameReducer