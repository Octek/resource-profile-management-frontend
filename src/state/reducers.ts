import { Reducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { resetAll } from "~/state/actions";

import coreReducer, { resetCore } from "~/modules/_core/state/coreSlice";

const appReducer = combineReducers({
  core: coreReducer,
});

type AppState = ReturnType<typeof appReducer>;

const rootReducer: Reducer<AppState> = (state, action) => {
  if (action.type === resetAll.type) {
    // Reset the state of each slice
    // eslint-disable-next-line no-param-reassign
    state = {
      core: coreReducer(undefined, resetCore()),
    } as AppState;
  }
  return appReducer(state, action);
};

export default rootReducer;
