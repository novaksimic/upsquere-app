import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskItemComponent } from './task-list/task-item/task-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TaskManagerRoutingRoutingModule } from './task-manager-routing-routing.module';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from '../shared/components/header/header.component';

@NgModule({
  declarations: [TaskDetailComponent, TaskFormComponent, TaskListComponent, TaskItemComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    TaskManagerRoutingRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TaskDetailComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskItemComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class TaskManagerModule { }
