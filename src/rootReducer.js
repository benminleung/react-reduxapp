import { combineReducers } from 'redux';
import { NEW_POST, DELETE_POST } from './actions';

// const reducers = (state = [], action) => {
// 	switch (action.type) {
// 		case 'GET_DATA':
// 			return [...state, ...action.data];
// 		default:
// 			return state;
// 	}
// };

const postsReducer = (statePosts = [], action) => {
    switch (action.type) {
		case NEW_POST:
			return [action.data, ...statePosts,];
		case DELETE_POST:
			return [...statePosts].filter(item => item.id !== action.data.id);
		default:
			return statePosts;
	}
}



export const rootReducer = combineReducers({
	posts: postsReducer,
})