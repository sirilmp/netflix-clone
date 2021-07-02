import { createSlice } from '@reduxjs/toolkit';

export const planSlice = createSlice({
    name: 'selected_plan',
    initialState: {
        plan: ""
    },

    reducers: {

      user_selected_plan:(state,action)=>{
          state.plan=action.payload.plan
      }
    },
});

export const {user_selected_plan}=planSlice.actions

export default planSlice.reducer