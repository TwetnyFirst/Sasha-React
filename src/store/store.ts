import { configureStore } from "@reduxjs/toolkit";

import postsReducer from '../slice/posts';

const rootReducer = {
    posts:postsReducer,
}


const store = configureStore({
    reducer:rootReducer

})

export default store