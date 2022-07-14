import { combineReducers } from 'redux'
import userReducer from './user.reducer'
import usersReducer from './users.reducer'
import postReducer from './post.reducer'
import allPostsReducer from './allPosts.reducer'
import errorReducer from './error.reducer'

export default combineReducers({
    userReducer,
    postReducer,
    usersReducer,
    allPostsReducer,
    errorReducer,
})