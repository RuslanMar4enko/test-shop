import * as types from "./mutation-types";


export default {

	[types.COMMENT](state, payload) {
		state.comment.push(payload);
	},

};
