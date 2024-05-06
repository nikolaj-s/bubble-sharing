const { createSlice } = require("@reduxjs/toolkit");


const UserProfileSlice = createSlice({
    name: "UserProfileSlice",
    initialState: {
        loading: true,
        profile: {},
        
    }
})