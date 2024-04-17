import { configureStore } from "@reduxjs/toolkit"
import InputReducer from "../features/InputSlice"

const store = configureStore({
  reducer: {
    input: InputReducer,
  },
})

export default store
