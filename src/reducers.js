export const reducers = (state = [], action) => {
	switch (action.type) {
		case 'GET_DATA':
			return [...state, ...action.data];
		default:
			return state;
	}
};