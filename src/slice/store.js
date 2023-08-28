import { configureStore } from "@reduxjs/toolkit";
import book from "./bookSlice";

const store = configureStore({
  reducer: {
    book
  }
})

export default store;