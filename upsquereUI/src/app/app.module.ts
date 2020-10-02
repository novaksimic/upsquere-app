import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccountModule } from './account/account.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './component/task/task-view/task-view.component';


import {  HttpClientModule } from '@angular/common/http';
import { CreateTaskComponent } from './component/task/create-task/create-task.component';
import { CreateListComponent } from './component/list/create-list/create-list.component';
import { EditListComponent } from './component/list/edit-list/edit-list.component';
import { EditTaskComponent } from './component/task/edit-task/edit-task.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    CreateTaskComponent,
    CreateListComponent,
    EditListComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AccountModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
