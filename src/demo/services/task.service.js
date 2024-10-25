import db from '../config/database.js';
import Task from '../models/task.model.js';

class TaskService {
    static getAllTasks(callback) {
        db.query('SELECT * FROM tasks', (err, results) => {
            if (err) throw err;
            const tasks = results.map((task) => new Task(task.id, task.title, task.completed));
            callback(tasks);
        }); 
    }

    static createTask(title, callback) {
        const sql = 'INSERT INTO tasks (title) VALUES (?)';
        db.query(sql, [title], (err, result) => {
            if (err) throw err;
            callback(result.insertId);
        });
    }

    static updateTask(id, updates, callback) {
        const sql = 'UPDATE tasks SET title = ?, completed = ? WHERE id = ?';
        db.query(sql, [updates.title, updates.completed, id], (err) => {
            if (err) throw err;
            callback();
        });
    }

    static deleteTask(id, callback) {
        const sql = 'DELETE FROM tasks WHERE id = ?';
        db.query(sql, [id], (err) => {
            if (err) throw err;
            callback();
        });
    }
}

export default TaskService;
