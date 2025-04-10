import { Component } from '@angular/core';
import { Note } from '../../modules/note.modules';

@Component({
  selector: 'app-note',
  standalone: false,
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  notes: Note[] = [];
  newNoteContent = '';

  addNote() {

    if (this.newNoteContent.trim()) {
      this.notes.push({
        id: Date.now(),
        content: this.newNoteContent
      });
    }
    this.newNoteContent = '';

  }

  deleteNote(id: number) {
    if(id)
    this.notes = this.notes.filter(note => note.id !== id);
  }
}
