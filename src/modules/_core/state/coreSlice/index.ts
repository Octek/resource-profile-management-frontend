/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import initialState from "~/modules/_core/state/coreSlice/initState";

export const coreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    reset: () => initialState,
    setAuthUser: (state, action) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.validity = action.payload.validity;
      state.refreshValidity = action.payload.refreshValidity;
      state.tokenType = action.payload.tokenType;
    },
    setResponseMessage: (state, action) => {
      state.message = action.payload.message;
      state.messageType = action.payload.messageType;
      state.isSnackOpen = !state.isSnackOpen;
    },
    closeSnack: (state) => {
      state.isSnackOpen = false;
    },
    setParentItem: (state, action) => {
      state.parentItem = action.payload;
    },

    setChildItem: (state, action) => {
      state.childItem = action.payload;
    },
    toggleModal: (state, action) => {
      state.openModal = !state.openModal;
      state.modalTitle = action.payload.title;
    },
    togglePopOver: (state, action) => {
      state.openPopOver = action.payload;
    },
  },
});

export const {
  setAuthUser,
  setResponseMessage,
  closeSnack,
  setChildItem,
  setParentItem,
  toggleModal,
  togglePopOver,
  reset: resetCore,
} = coreSlice.actions;

// exporting the reducer here, as we need to add this to the store
export default coreSlice.reducer;
