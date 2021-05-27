const submitReducer = (state = false, action) => {
    switch(action.type) {
        case 'SUBMIT':
            return true;
        default:
            return state;
    }
}

export default submitReducer;