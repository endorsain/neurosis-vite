import { createSlice } from '@reduxjs/toolkit';
import { activities } from './test-activities';

const initialState = {
  activities,
  current: {
    // podria ir la actividad aqui.
    start: null,
    type: null, // focus o break
  },
};

const activitiesSlice = createSlice({
  name: 'activitiesSlice',
  initialState,
  reducers: {
    startActivity(state, action) {
      const currentActivity = action.payload.activity;
      state.activities = activities.map(activity => {
        if (activity.title === currentActivity.title) {
          return {
            ...activity,
            start: action.payload.start,
            [action.payload.type]: action.payload.start,
            type: action.payload.type,
          };
        }
        return activity;
      });
    },
  },
  // extraReducers: builder => {},
});

export const { startActivity } = activitiesSlice.actions;
export default activitiesSlice.reducer;
