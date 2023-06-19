import {combineReducers} from "redux";
import * as postReducer from './posts/post.reducer';

export const rootReducer = combineReducers({
    [postReducer.postsFeatureKey] : postReducer.reducer
});
