import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskModule } from './task/task.module';
import { NoteComponent } from './components/note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskBoardComponent,
    TaskListComponent,
    TaskItemComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule ,
    FormsModule,
  ],
  providers: [
    // provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
