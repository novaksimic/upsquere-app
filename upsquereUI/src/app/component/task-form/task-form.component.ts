import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/services/task-service/task.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  public title:string = '';
  formSubmitted: boolean = false;
  constructor(private ts: TaskService, private route: ActivatedRoute, private router: Router) { }

  listId: string;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.listId = params.listId;
    });
  }

  createTask(title: string) {
    this.ts.addTask(title, this.listId).subscribe((task: Task) => {
      //Navigates to one sublevel before in url (i.e. List view)
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }

 
}
