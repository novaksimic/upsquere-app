import { Component, OnInit } from '@angular/core';
import { TaskService } from '@app/shared/services/task-service/task.service';
import { MessageService } from '@app/shared/services/task-service/message.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;

  constructor(private ts: TaskService, 
    public fb: FormBuilder, 
    private router: Router) { }

  ngOnInit() {
    this.taskForm = this.fb.group({
      title: [''],
      description: [''],
      status: [''],
      owner: [''],
      date: new Date()
    })
  }

  submitForm() {
    this.ts.addTask(this.taskForm.value).subscribe(res => {
      console.log('Task created!');
      this.router.navigateByUrl('/');
    });
  }
 
}
