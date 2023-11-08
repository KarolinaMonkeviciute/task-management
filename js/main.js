import { Todo } from "./Todo.js"

const kanban = new Todo(
    '#kanban',
    ['Backlog','Todo', 'In Progress', 'Done']);

    kanban.addTask({
        columnIndex: 0,
        title: 'First task',
        desc: 'full description of first task',
        createdOn: '2023-11-08 09:03:15',
        deadline: '2023-12-24 00:00:00',
        tags: [
            {text: 'Design', color: '#79c2d0'}
        ],
    });
    
    kanban.addTask({
        columnIndex: 1,
        title: 'Second task',
        desc: 'full description of second task',
        createdOn: '2023-11-08 10:03:15',
        deadline: '2023-12-24 00:00:00',
        tags: [
            {text: 'UX', color: '#ffcab0'}, 
            {text: 'UI', color: '#ffb5b5'}
        ],
    });

    kanban.addTask({
        columnIndex: 0,
        title: 'Third task',
        desc: 'full description of third task',
        createdOn: '2023-11-08 10:13:15',
        deadline: '2023-12-20 00:00:00',
        tags: [
            {text: 'Development', color: '#f70776'}
        ],
    });
