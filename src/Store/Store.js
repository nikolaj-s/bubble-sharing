import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../Features/Post/PostSlice";
import ReleaseNotesSlice from "../Features/ReleaseNotes/ReleaseNotesSlice";

const Store = configureStore({
    reducer: {
        PostSlice: PostSlice,
        ReleaseNotesSlice: ReleaseNotesSlice
    }
})

export default Store;