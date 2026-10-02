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
                <div class="form">
                    <div class="input">
                        <label>Task Name</label>
                        <input type="text" name="taskName" placeholder="e.g Revise pages 73-80">
                    </div>
                    <div class="input">
                        <label>Task Name</label>
                        <input type="text" name="taskName" placeholder="e.g Revise pages 73-80">
                    </div>
                    <div class="input">
                        <label>Task Name</label>
                        <input type="text" name="taskName" placeholder="e.g Revise pages 73-80">
                    </div>
                    <div class="input">
                        <label>Task Name</label>
                        <input type="text" name="taskName" placeholder="e.g Revise pages 73-80">
                    </div>
                    <button class="btn">Create task</button>
                </div>
           `);
        }
    }));
}