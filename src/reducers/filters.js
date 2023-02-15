const initialState = [];

const newUp = 'CK02&CK06';

const Filters = (state = initialState, action) => {
    switch(action.type) {
        case 'Filter': 
            if (state.includes(action.filter)) {
                return state.filter((filter) => filter !== action.filter)
            }else{
                return state = [...state, action.filter]

            }
        default:
            return state
    }
}

export default Filters;