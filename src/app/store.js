import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from '../components/features/Counter/counterSlice';
const rootReducer = {
    counter:counterReducer,
};
const store = configureStore ({
    reducer:rootReducer
});

export default store;