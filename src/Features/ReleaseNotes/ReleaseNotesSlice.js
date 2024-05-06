import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { URL } from "../../Util/Validation";

export const FetchReleaseNotes = createAsyncThunk(
    'ReleaseNotesSlice/FetchReleaseNotes',
    async (_ , {rejectWithValue}) => {
        try {

            const data = await Axios({
                method: "GET",
                url: URL + "/fetch-release-notes"
            }).then(res => res.data);

            if (data.error) return rejectWithValue({errorMessage: data.errorMessage});

            if (!data.release_notes) return rejectWithValue({errorMessage: "No release notes to display at this time"});

            return data.release_notes;

        } catch (error) {
            console.log(error);
            return rejectWithValue({errorMessage: error.message});
        }
    }
)

const ReleaseNotesSlice = createSlice({
    name: "ReleaseNotesSlice",
    initialState: {
        loading: true,
        release_notes: [],
        error: false,
        errorMessage: "",
    },
    reducers: {

    },
    extraReducers: {
        [FetchReleaseNotes.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
            state.errorMessage = "";
        },
        [FetchReleaseNotes.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = false;
            state.errorMessage = "";
            state.release_notes = action.payload;
        },
        [FetchReleaseNotes.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload.errorMessage;
        }
    }
})

export const selectLoadingReleaseNotes = state => state.ReleaseNotesSlice.loading;

export const selectReleaseNotes = state => state.ReleaseNotesSlice.release_notes;

export const selectReleaseNotesErrorState = state => state.ReleaseNotesSlice.error;

export const selectReleaseNotesErrorMessage = state => state.ReleaseNotesSlice.errorMessage;

export default ReleaseNotesSlice.reducer;