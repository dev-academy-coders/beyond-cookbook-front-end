const loggedUser = (state = {}, action) => {
    switch(action.type) {
        case 'USER_LOGGING_IN_SUCCESSFUL':
            return action.payload
        default:
            return state
    }
}

export default loggedUser;
