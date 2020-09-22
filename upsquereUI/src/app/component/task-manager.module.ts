import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskItemComponent } from './task-list/task-item/task-item.component';




@NgModule({
  declarations: [TaskDetailComponent, TaskFormComponent, TaskListComponent, TaskItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TaskDetailComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskItemComponent
  ]
})
export class TaskManagerModule { }
