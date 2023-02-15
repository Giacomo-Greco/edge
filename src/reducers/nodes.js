const initialState = [];

const Nodes = (state = initialState, action) => {
    switch(action.type) {
        case 'Nodes': 
            return state = action.nodes
        default:
            return state
    }
}

export default Nodes;