import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/helpers';
import { HomeComponent } from './home';
import { EditListComponent } from './component/list/edit-list/edit-list.component';
import { TaskViewComponent } from './component/task/task-view/task-view.component';
import { EditTaskComponent } from './component/task/edit-task/edit-task.component';
import { CreateListComponent } from './component/list/create-list/create-list.component';
import { CreateTaskComponent } from './component/task/create-task/create-task.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const routes: Routes = [
  { path: '', redirectTo: 'lists', pathMatch: 'full'},
  /* { path: }, */
  {path: 'new-list', component: CreateListComponent},
  {path: 'edit-list/:listId', component: EditListComponent},
  {path: 'lists', component: TaskViewComponent},
  {path: 'lists/:listId', component: TaskViewComponent},
  {path: 'lists/:listId/new-task', component: CreateTaskComponent},
  {path: 'lists/:listId/edit-task/:taskId', component: EditTaskComponent}

/*   // otherwise redirect to home
  { path: '**', redirectTo: '' } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
