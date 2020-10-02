import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/shared/models/list';
import { Task } from 'src/app/shared/models/task';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TaskService } from 'src/app/shared/services/task-service/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: List[];
  tasks: Task[];

  selectedListId: string;

  constructor(private ts: TaskService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if(params.listId) {
        this.selectedListId = params.listId;
        this.ts.getTasks(params.listId).subscribe((tasks: Task[]) => {
          this.tasks = tasks;
        });
      }
      else {
      this.tasks = undefined;
      }
    });

    this.ts.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    });
  }

  onTaskClick(task: Task) {
    this.ts.complete(task).subscribe(() => {
      console.log("Completed successfuly");
      task.completed = !task.completed;
    });
  }

  onDeleteListClick() {
    this.ts.deleteList(this.selectedListId).subscribe((list: List) => {
      this.router.navigate(['/lists']);
    });
  }

  onDeleteTaskClick(id: string) {
    this.ts.deleteTask(this.selectedListId, id).subscribe((task: Task) => {
      this.tasks = this.tasks.filter(val => val.id !== id);
      console.log(task);
    });
  }

}
