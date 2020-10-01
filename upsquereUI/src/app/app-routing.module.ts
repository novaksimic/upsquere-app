import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/helpers';
import { TaskManagerComponent } from './component/task-manager/task-manager.component';
import { TaskDetailComponent } from './component/task-detail/task-detail.component';
import { HomeComponent } from './home';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const taskModule = () => import('./component/task-manager.module').then(x => x.TaskManagerModule); 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'task', component: TaskManagerComponent },
  { path: 'task/:id', component: TaskDetailComponent},

/*   // otherwise redirect to home
  { path: '**', redirectTo: '' } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
