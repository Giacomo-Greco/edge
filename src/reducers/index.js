import { combineReducers } from 'redux';

import nodes from './nodes';
import filters from './filters';
import calendar from './calendar';

const rootReducer = combineReducers({
    filters: filters,
    calendar: calendar,
    nodes: nodes
})

export default rootReducer;