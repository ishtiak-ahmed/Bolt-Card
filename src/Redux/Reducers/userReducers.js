const user = {
    name: 'Mr. Baakir Qara',
    role: 'Administrator',
    image: 'image..'
}

export const userReducers = (state = user, action) => {
    switch(action.type){
        case 'LOG_OUT':
            return {}
        case 'LOG_IN':
            return action.user
        default:
            return state
    }
}