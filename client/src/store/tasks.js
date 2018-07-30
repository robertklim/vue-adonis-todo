// import router from '../router';
// import Vue from 'vue';
import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        tasks: [],
        newTaskName: null,
    },
    actions: {
        fetchTasksForProject({ commit }, project) {
            return HTTP().get(`/projects/${project.id}/tasks/`)
                .then(({ data }) => {
                    commit('setTasks', data);
                });
        },
    },
    getters: {
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
    },
};
