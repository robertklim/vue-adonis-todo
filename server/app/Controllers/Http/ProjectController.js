'use strict'

class ProjectController {
    // return all projects associated with user
    async index({ auth }) {
        const user = await auth.getUser();
        return await user.projects().fetch();
    }
}

module.exports = ProjectController
