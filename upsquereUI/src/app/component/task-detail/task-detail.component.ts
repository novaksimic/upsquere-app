import { Component, OnInit } from '@angular/core';
import { TaskService } from '@app/shared/services/task-service/task.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '@app/shared/models/task';

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
