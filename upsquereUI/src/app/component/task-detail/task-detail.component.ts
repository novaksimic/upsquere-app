import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/shared/services/task-service/task.service';
import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task:Task

  constructor(private route: ActivatedRoute, private ts: TaskService) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.ts.getTask(data.id).subscribe((task) => {
        this.task = task;
      })
    })
  }

}
