import TaskService from '../services/task.service.js';

export class TaskController {
    static showAll(req, res) {
        TaskService.getAllTasks((tasks) => {
            res(tasks);
        });
    }

    static addTask(req, res) {
        const { title } = req;
        TaskService.createTask(title, (id) => {
            res(`Task created ${title}`);
        });
    }

    static updateTask(req, res) {
        const { id, title, completed } = req;
        const updates = { title, completed };
        TaskService.updateTask(id, updates, () => {
            res(`Task ${id} updated.`);
        });
    }

    static deleteTask(req, res) {
        const { id } = req;
        TaskService.deleteTask(id, () => {
            res(`Task ${id} deleted.`);
        });
    }
}
