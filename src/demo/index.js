import readline from "readline";
import routes from './routes/task.routes.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log('\nTask Manager');
    console.log('1. Show all tasks');
    console.log('2. Add a task');
    console.log('3. Update a task');
    console.log('4. Delete a task');
    console.log('5. Exit\n');
    rl.question('Choose an option: ', handleMenu);
}

async function handleMenu(option) {
    switch (option) {
        case '1':
            routes(option, {}, (tasks) => {
                console.log('Task List:');
                tasks.forEach(task => {
                    console.log(`[${task.completed ? 'x' : ' '}] ${task.id}: ${task.title}`);
                });
                showMenu();
            });
            break;
        case '2':
            rl.question('Enter task title: ', (title) => {
                routes(option, { title }, (message) => {
                    console.log(message);
                    showMenu();
                });
            });
            break;
        case '3':
            rl.question('Enter task ID: ', (id) => {
                rl.question('Enter new title: ', (title) => {
                    rl.question('Is it completed? (yes/no): ', (completed) => {
                        const req = { id: parseInt(id), title, completed: completed.toLowerCase() === 'yes' };
                        routes(option, req, (message) => {
                            console.log(message);
                            showMenu();
                        });
                    });
                });
            });
            break;
        case '4':
            rl.question('Enter task ID to delete: ', (id) => {
                routes(option, { id: parseInt(id) }, (message) => {
                    console.log(message);
                    showMenu();
                });
            });
            break;
        case '5':
            rl.close();
            break;
        default:
            console.log('Invalid option, please try again.');
            showMenu();
            break;
    }
}

showMenu();
