import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    isTradeModalVisible: false
}

const tabSlice = createSlice({
    name:'tab',
    initialState,
    reducers:{
        requestTradeModalVisibility: (state, {payload}) =>{
            state.isTradeModalVisible = !payload
        }
    }
})

export const tabAction = tabSlice.actions
export const tabReducer = tabSlice.reducer