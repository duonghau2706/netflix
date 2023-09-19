import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    enteredName: 'Autumn',
    enteredNickName: '',
    isValid: false,
    isTouched: false,
    isShowLimit: false,
    isTooShort: false,
    isTooLong: false,
    currentLenght: 0
}

const settingSlice = createSlice({
    name: "setting",
    initialState,
    reducers: {
        nameChange(state, action) {
            state.enteredName = action.payload;
        },
        nickNameChange(state, action) {
            state.enteredNickName = action.payload;
            state.isTooShort = action.payload.length < 3;
            state.isValid = action.payload.length > 2 && action.payload.length < 17;
            state.isTooLong = action.payload.length > 16
            state.currentLenght = action.payload.length;
        },
        nickNameBlur(state) {
            state.isTouched = true;
        },
        nickNameClick(state) {
            state.isShowLimit = true;
        }
    }
});

const store = configureStore({
    reducer: {
        setting: settingSlice.reducer
    }
});

export const settingActions = settingSlice.actions;

export default store;