import { Component, OnInit, Input } from '@angular/core';
import { Task } from '@app/shared/models/task';
import { TaskService } from '@app/shared/services/task-service/task.service';
import { MessageService } from '@app/shared/services/task-service/message.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input()task: Task

  constructor(private ts: TaskService, private msgService: MessageService) { }

  ngOnInit(): void {
  }

  onDelete(){
    this.ts.deleteTask(this.task.id).subscribe((task) => {
      console.log(task);
      this.msgService.setMessage('Something happened');
    })
  }

}
