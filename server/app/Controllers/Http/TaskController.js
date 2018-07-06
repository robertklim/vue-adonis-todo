'use strict'

const Project = use('App/Models/Project');
const Task = use('App/Models/Task');

class TaskController {
    async create({ auth, request, params }) {
        const user = await auth.getUser();
        const { description } = request.all();
        const { id } = params;
        const project = await Project.find(id);
        AuthorizationService.verifyPermission(project, user);
        const task = new Task();
        task.fill({
            description,
        });
        await project.tasks().save(task);
        return task;
    }
}

module.exports = TaskController
