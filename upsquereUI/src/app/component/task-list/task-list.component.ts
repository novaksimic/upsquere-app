import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { TaskService } from 'src/app/shared/services/task-service/task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private ts: TaskService) { }

  ngOnInit() {
    this.ts.getTasks().subscribe((data: Task[]) => {
      console.log(data);
      this.tasks = data;
    })
  }


}
