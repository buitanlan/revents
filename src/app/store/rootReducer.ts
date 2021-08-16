import { combineReducers } from 'redux';
import eventSlice from '../../features/events/eventSlice';

const rootReducer = combineReducers({
    event: eventSlice
})

export default rootReducer;
