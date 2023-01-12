import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations"
Vue.use(Vuex)
const state = {
    clickName: "",
    clickCode: "",
    clickId: ""
}

const store = new Vuex.Store({
    state,
    mutations
})
export default store