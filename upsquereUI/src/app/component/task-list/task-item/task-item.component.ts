import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { TaskService } from 'src/app/shared/services/task-service/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input()task:Task

  constructor(private ts:TaskService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.ts.deleteTask(this.task.id).subscribe((dotman) => {
      console.log(dotman)
    })
  }
}
