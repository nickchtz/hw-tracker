import { PRIORITIES } from '../constants.js';
import { storage } from "../storage.js";


export const tasks = () => {
    Alpine.data('tasks', () => ({
        get tasks() {
            return storage.get('tasks').reverse();
        },
        subject(task){
            return storage.get('subjects')[task.taskSubject].subjectName;
        },
        priority(task){
            return PRIORITIES[task.taskPriority];
        },
        priorityColor(task){
            const priority = task.taskPriority;
            return priority == 0 ? 'text-priority-low' : priority == 1 ? 'text-priority-medium' : 'text-priority-high'; 
        },
        deadline(task){
            return new Intl.DateTimeFormat('en', {
                dateStyle: 'medium',
                timeStyle: 'short' 
            }).format(new Date(task.taskDeadline));
        },
        newTask() {
            dialog.create('Add new task', `
                <div x-data="{ message: '' }">
                    <input type="text" x-model="message">
                
                    <span x-text="message"></span>
                </div>
           `);
        }
    }));
}