import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskItemComponent } from './task-list/task-item/task-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TaskManagerRoutingRoutingModule } from './task-manager-routing-routing.module';
import { RouterModule } from '@angular/router';
import { TaskManagerComponent } from './task-manager/task-manager.component';

@NgModule({
  declarations: [TaskManagerComponent, TaskDetailComponent, TaskFormComponent, TaskListComponent, TaskItemComponent],
  imports: [
    CommonModule,
    TaskManagerRoutingRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    TaskManagerComponent,
    TaskDetailComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskItemComponent
  ]
})
export class TaskManagerModule { }
