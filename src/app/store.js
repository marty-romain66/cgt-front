import { configureStore } from "@reduxjs/toolkit";
import animationReducer from "../features/animation.slice";
export default configureStore({
    reducer: {
        animation : animationReducer
    },
});