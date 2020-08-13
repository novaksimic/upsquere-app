import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { TaskListComponent } from './modules/task-list/task-list.component';
import { TeamTaskListComponent } from './modules/team-task-list/team-task-list.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: TaskListComponent
  }, {
    path: 'teamTasks',
    component: TeamTaskListComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
