import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../modules/task.model';

@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() statusChange = new EventEmitter<void>();
  @Output() deleteTask = new EventEmitter<void>();

  isEditing = false;
  isMenuOpen = false; 
  changeStatus() {
    this.statusChange.emit();
    
  }

  enableEditing() {
    this.isEditing = true;
    this.isMenuOpen = false; 
  }

  saveEdit(event: any) {
    if (event.key === 'Enter') {
      this.isEditing = false;
    }
  }

  removeTask() {
    this.deleteTask.emit();
  }

  uploadImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.task.image = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
    this.isMenuOpen = false; 
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
