import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';


const routes: Routes = [
  { path: 'task', component: TaskManagerComponent },
  { path: 'task/:id', component: TaskDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagerRoutingRoutingModule { }
