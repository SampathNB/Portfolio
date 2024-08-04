import { configureStore } from "@reduxjs/toolkit";
import { portfolioAPI } from "../apis";

export const store = configureStore({
  reducer: {
    [portfolioAPI.reducerPath]: portfolioAPI.reducer
  },
  middleware: (gDM) => gDM().concat(portfolioAPI.middleware)
})