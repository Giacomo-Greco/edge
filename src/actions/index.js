export const nodes = (nodes) => {
    return {
        type: 'Nodes',
        nodes: nodes
    }
}

export const addFilter = (filter) => {
    return {
        type: 'Filter',
        filter: filter
    }
}

export const addCalendar = (state) => {
    return {
        type: 'Calendar',
        state: state
    }
}


