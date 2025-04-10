import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../modules/task.model';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() status!: string;  
  @Input() tasks!: any[]; 
  @Output() updateTaskStatus: EventEmitter<any> = new EventEmitter<any>(); 

  get filteredTasks() {
    return this.tasks.filter(task => task.status === this.status);
  }

  moveToNextStage(task: any) {
   let newStatus = '';
    if (task.status === 'To Do') newStatus = 'Doing';
    else if (task.status === 'Doing') newStatus = 'Done';

    if (newStatus) {
      this.updateTaskStatus.emit({ task, newStatus });
    }
    
  }
  deleteTask(taskToDelete: Task) {
    this.tasks = this.tasks.filter(task => task.id !== taskToDelete.id);
  }
  
}
