import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json';

// create an object that represents the currently
// logged in user which contains profile information
// such as username, their avatar logo, and handle.
// Later this will come from users login in
const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.png"
};

// create a template tuit object with some default
// values and copy over the fields userName, handle and
// image from the currentUser
const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0, "retuits": 0,
  "likes": 0,
};

// add createTuit reducer function which appends
// the new tuit in the payload at the beginning of the
// array of tuits contained in the state. Also copy
// all fields from templateTuit and initialize
// the unique identifier with a timestamp
const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: {tuits: tuits},
  reducers: {
    deleteTuit(state, action) {
      const index = state.tuits
      .findIndex(tuit =>
          tuit._id === action.payload);
      state.tuits.splice(index, 1);
    },
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    }
  }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;