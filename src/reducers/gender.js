const genderReducer = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_GENDER':
            return action.payload;
        default:
            return state;
    }
}

export default genderReducer