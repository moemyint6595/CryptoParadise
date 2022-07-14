import { createSlice } from '@reduxjs/toolkit'

const openSlice = createSlice({
    name : 'openmenu',
    initialState : false,

    reducers : {
        toggleopen : (state, action) => !state
    }
})

export const { toggleopen } = openSlice.actions
export default openSlice.reducer