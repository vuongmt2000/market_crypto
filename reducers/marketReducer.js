import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    data: null
}

const marketSlice = createSlice({
    name:'market',
    initialState,
    reducers:{
        dataMarketSuccess: (state, {payload}) =>{
            state.data = payload
        },
        requestMarket: (state) =>{}
    }
})

export const marketAction = marketSlice.actions
export const marketReducer = marketSlice.reducer