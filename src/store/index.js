import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

import comment from "./modules/comment";


export default new Vuex.Store({
	/**
     * Assign the modules to the store.
     */
	modules: {
    comment
	},
});
