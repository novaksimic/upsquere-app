import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { TaskService } from 'src/app/shared/services/task-service/task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  tasks: Task[];

  selectedListId: string;
  
  constructor(private ts: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if(params.listId) {
        this.ts.getTasks().subscribe((tasks: Task[]) => {
          this.tasks = tasks;
        })
      }
      else {
        this.tasks = undefined;
      }
  });
}

onTaskClick(task: Task) {
  this.ts.complete(task).subscribe(() => {
    console.log("Completed successfully");
    task.completed = !task.completed;
  });
}

onDeleteTaskClick(id: string) {
  this.ts.deleteTask(id).subscribe((task: Task) => {
    //Produces task arr without that task and then assigns to task arr
    this.tasks = this.tasks.filter(val => val.id !== id);
    console.log(task);
  })
}

}
