const nutritionUtils = (state = {}, action) => {
    switch(action.type) {
        case 'NUTRTION_UTILS_LOADED':
            return action.payload
        default:
            return state
    }
}

export default nutritionUtils;
