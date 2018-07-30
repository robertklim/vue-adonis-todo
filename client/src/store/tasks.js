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
        createTask({ commit, state, rootState }) {
            return HTTP().post(`/projects/${rootState.projects.currentProject.id}/tasks`, {
                description: state.newTaskName,
            })
                .then(({ data }) => {
                    commit('appendTask', data);
                    commit('setNewTaskName', null);
                });
        },
    },
    getters: {
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        setNewTaskName(state, name) {
            state.newTaskName = name;
        },
        appendTask(state, task) {
            state.tasks.push(task);
        },
    },
};
