const usernameReducer = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_USER':
            return action.payload;
        default:
            return state;
    }
}

export default usernameReducer