import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "light",
    fontSize: "medium"
}

const themeSlice = createSlice({
    name: "settings",
    initialState,

    reducers:{

        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light"
        },

        setFontSize: (state, action) => {
            state.fontSize = action.payload
        },

        resetSetting: (state) => {
            state.theme = "light",
            state.fontSize = "medium"
        }
    }
})

export const {toggleTheme, setFontSize, resetSetting} = themeSlice.actions;
export default themeSlice.reducer