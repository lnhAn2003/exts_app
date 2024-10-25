import { TaskController } from '../controllers/task.controller.js';

const routes = (option, req, res) => {
    switch (option) {
        case '1':
            TaskController.showAll(req, res);
            break;
        case '2':
            TaskController.addTask(req, res);
            break;
        case '3':
            TaskController.showAll(req, res);
            TaskController.updateTask(req, res);
            break;
        case '4':
            TaskController.showAll(req, res);
            TaskController.deleteTask(req, res);
            break;
        default:
            console.log('Invalid option.');
            res();
            break;
    }
};

export default routes;
