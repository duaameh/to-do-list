import { Component } from '@angular/core';
import { Task } from '../../modules/task.model';

@Component({
  selector: 'app-task-board',
  standalone: false,
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.css'
})
export class TaskBoardComponent {
  tasks: Task[] = [
    { id: 1, title: 'Task 1', status: 'To Do' },
    { id: 2, title: 'Task 2', status: 'Doing' },
    { id: 3, title: 'Task 3', status: 'Done' }
  ];

  newTaskTitle: string = '';  

  addTask() {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: this.tasks.length + 1,
        title: this.newTaskTitle,
        status: 'To Do'  
      };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
        }
  }

  updateTaskStatus(event: { task: Task; newStatus: Task['status'] }) {
    event.task.status = event.newStatus;
  }
}
