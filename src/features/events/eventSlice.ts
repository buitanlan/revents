import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sampleData } from '../../app/api/sampleData';
import { Event } from '../../models/event';

const eventSlice = createSlice({
    name: 'event',
    initialState: sampleData,
    reducers: {
        create: (state, action: PayloadAction<Event>) => { state.push(action.payload) },
        update: (state, action: PayloadAction<Event>) => {
            const idx = state.findIndex(event => event.id === action.payload.id);
            if (idx !== -1) {
                state[idx] = action.payload;
            }
        },
        remove: (state, action: PayloadAction<string>) => {
            const idx = state.findIndex(event => event.id === action.payload);
            if (idx !== -1) {
                state.splice(idx, 1);
            }
        },
    

    }
});

export const { create, update, remove} = eventSlice.actions
export default eventSlice.reducer