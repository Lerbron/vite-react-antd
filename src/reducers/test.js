import * as actionTypes from '@/actions/actionTypes';

const initState = {
  num: 5,
  activityList: []
};

export default function test(state = initState, action) {
	switch (action.type) {
		case actionTypes.TEST_NUM:
			return Object.assign({}, state, {num: state.num + 1});
    case actionTypes.GET_ACTIVITY_LIST:
      return Object.assign({}, state, {activityList: action.payload})
		default :
			return state;
	}
}