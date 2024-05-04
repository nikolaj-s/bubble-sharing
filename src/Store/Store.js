import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../Features/Post/PostSlice";

const Store = configureStore({
    reducer: {
        PostSlice: PostSlice
    }
})

export default Store;