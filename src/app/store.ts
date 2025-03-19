import { configureStore } from "@reduxjs/toolkit";
import playgroundReducer from "../components/playground/store/slices";

export const store = configureStore({
  reducer: {
    playground: playgroundReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
