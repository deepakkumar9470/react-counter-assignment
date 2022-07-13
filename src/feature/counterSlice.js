import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name : 'Counter',
    initialState,
    reducers : {
        increment :(state,action) =>{
           state.count += action.payload
        },
        decrement: (state,action) => {
            state.count -= action.payload
        },
        saveData: (state,action) => {
            state.count = action.payload
            
        },
    }
});

export const {increment,decrement,saveData} = counterSlice.actions;

export default counterSlice.reducer;

