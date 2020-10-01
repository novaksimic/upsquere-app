import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { TaskService } from 'src/app/shared/services/task-service/task.service';
import { Router } from '@angular/router';
import { List } from 'src/app/shared/models/list';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private ts: TaskService, private router: Router) { }

  ngOnInit() {
  }

  createList(title: string) {
    this.ts.createList(title).subscribe((list: List) => {
      //Navigate back to Lists view with this list selected
      this.router.navigate(['/lists',list.id])
    })

}
