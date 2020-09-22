import { Component, OnInit } from '@angular/core';
import { TaskService } from '@app/shared/services/task-service/task.service';
import { Task } from '@app/shared/models/task';

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
