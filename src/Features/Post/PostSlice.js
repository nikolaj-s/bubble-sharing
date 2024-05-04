import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { URL } from "../../Util/Validation";


export const FetchPost = createAsyncThunk(
    'PostSlice/FetchPost',
    async (_, {rejectWithValue}) => {
        try {

            const pathname = window.location.pathname;

            const id = pathname.split('/')[2];

            if (!id) return window.location.pathname = '/';

            const data = await Axios({
                method: "GET",
                url: URL + `/fetch-post`,
                headers: {"MESSAGE_ID": id}
            }).then(res => {
                return res.data;
            })

            if (data.error) return rejectWithValue({errorMessage: data.errorMessage});

            return data.post;

        } catch (error) {
            console.log(error);
            return rejectWithValue({error: true, errorMessage: error.message});
        }
    }
)

const PostSlice = createSlice({
    name: "PostSlice",
    initialState: {
        loading: true,
        post: {},
        error: false,
        errorMessage: ""
    },
    reducers: {

    },
    extraReducers: {
        [FetchPost.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
            state.errorMessage = "";
        },
        [FetchPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = action.payload;
            state.error = false;
            state.errorMessage = "";
        },
        [FetchPost.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload.errorMessage;
        }
    }
})

export const selectPost = state => state.PostSlice.post;

export const selectLoadingPost = state => state.PostSlice.loading;

export const selectPostErrorMessage = state => state.PostSlice.errorMessage;

export const selectPostErrorState = state => state.PostSlice.error;

export default PostSlice.reducer;