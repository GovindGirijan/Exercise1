const ageReducer = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_AGE':
            return action.payload;
        default:
            return state;
    }
}

export default ageReducer