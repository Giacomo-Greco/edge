const Calendar = (state = [], action) => {
    switch(action.type) {
        case 'Calendar': 
            return state = action.state
        default:
            return state
    }
}

export default Calendar;