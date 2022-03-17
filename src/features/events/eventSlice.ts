import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sampleData } from '../../app/api/sampleData';
import { Event } from '../../models/event';

const eventSlice = createSlice({
    name: 'event',
    initialState: sampleData,
    reducers: {
        create: (state, action: PayloadAction<Event>) => {
            state.push(action.payload)
        },
        update: (state, action: PayloadAction<Event>) => {
            const idx = state.findIndex(event => event.id === action.payload.id);
            if (idx !== -1) {
                state[idx] = action.payload;
            }
            return state;
        },
        remove: (state, action: PayloadAction<string>) => {
            return  state.filter(event => event.id === action.payload);
        },
    

    }
});

export const { create, update, remove} = eventSlice.actions
export default eventSlice.reducer
