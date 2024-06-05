import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilter: (state, action) => {
      // see mutation but it is immutation=]] (toolkit using IMMER library)
      state.search = action.payload;
    }, // => action creator {type: 'filters/searchFilter'}
    statusFilter: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilter: (state, action) => {
      state.priorities = action.payload;
    },
  },
});
