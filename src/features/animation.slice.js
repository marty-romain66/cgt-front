import { createSlice } from "@reduxjs/toolkit";

export const animationSlice = createSlice({
    name: "animation",
    initialState: {
        animation: false,
        animation2: false,
    },
    reducers: {
        setAnimation: (state, action) => {
            state.animation = action.payload;
        },
        setAnimation2: (state, action) => {
            state.animation2 = action.payload;
        }


    }
});
export const { animation, setAnimation, setAnimation2  } = animationSlice.actions;
export default animationSlice.reducer;
