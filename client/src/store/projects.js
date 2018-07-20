// import router from '../router';
import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        projects: [],
        newProjectName: null,
    },
    actions: {
        createProject({ commit, state }) {
            return HTTP().post('/projects', {
            title: state.newProjectName,
            })
                .then(({ data }) => {
                    commit('appendProject', data);
                    commit('setNewProjectName', null);
                });
        },
        fetchProjects({ commit }) {
            return HTTP().get('/projects')
                    .then(({ data }) => {
                        commit('setProjects', data);
                    });
        },
    },
    getters: {
    },
    mutations: {
        setNewProjectName(state, name) {
            state.newProjectName = name;
        },
        appendProject(state, project) {
            state.projects.push(project);
        },
        setProjects(state, projects) {
            state.projects = projects;
        },
    },
};
