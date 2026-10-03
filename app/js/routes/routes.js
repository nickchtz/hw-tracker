import { tasks } from '../controllers/tasks.js';
import { addTask } from '../controllers/addTask.js';
import { subjects } from '../controllers/subjects.js';
import { addSubject } from '../controllers/addSubject.js';  

export const routes = {
    '#notFound': {
        file: 'notFound.html',
        title: 'Page not found',
    },
    '#overview': {
        file: 'overview.html',
        title: 'Overview',
    },
    '#settings': {
        file: 'settings.html',
        title: 'Settings',        
    },
    '#tasks': {
        file: 'tasks.html',
        title: 'Tasks',
        onload: tasks
    },
    // '#add-task': {
    //     file: 'tasks/add-task.html',
    //     title: 'Add Task',
    //     onload: addTask
    // },
    // '#calendar': {
    //     file: 'calendar.html',
    //     title: 'Calendar',
    // },
    // '#subjects': {
    //     file: 'subjects/subjects.html',
    //     title: 'Subjects',
    //     onload: subjects
    // },
    // '#add-subject': {
    //     file: 'subjects/add-subject.html',
    //     title: 'Add Subject',
    //     onload: addSubject
    // },
};