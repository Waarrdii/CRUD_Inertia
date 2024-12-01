import { createStore } from 'vuex';

const store = createStore({
    state: {
        data : [],
    },
    mutations: {
        addNewData(state, data) {
            state.data.push(data);
        }
    },
    actions: {
        addNewData({ commit }, data) {
            commit('addNewData', data);
        }
    },
});

export default store;
