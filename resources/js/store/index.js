import { createStore } from 'vuex';

const store = createStore({
    state: {
        data : {},
        activeNavbar : '',
    },
    mutations: {
        addNewData(state, {data, key}) {
            if (state.data[key]) {
               return
            }else {
                state.data = {
                    ...state.data,
                    [key] : data
                }
            }
        },

        setActiveNavbar(state, data) {
            state.activeNavbar = data;
        },
        updateComponent (state, {key, data}) {
            state.data[state.activeNavbar].components = {
                ...state.data[state.activeNavbar].components,
                [key] : data
            }
        }
    },
    actions: {
        addNewData({ commit }, data) {
            commit('addNewData', data);
        },
        setActiveNavbar({ commit }, data) {
            commit('setActiveNavbar', data);
        },
        updateComponent({ commit }, data) {
            commit('updateComponent', data);
        }
    },
    getters: {
        userComponents(state) {
            return state.data[state.activeNavbar].components
        }
    }
});

export default store;
