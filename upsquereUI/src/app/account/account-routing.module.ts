import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const routes: Routes = [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'reset-password', component: ResetPasswordComponent }
     // { path: 'confirm-email', component: ConfirmEmailComponent }, treba da se uradi 
    //  { path: 'change-password', component: ChangePasswordComponent } treba da se uradi
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
