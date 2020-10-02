import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TaskService } from 'src/app/shared/services/task-service/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(private ts: TaskService, private route: ActivatedRoute,
              private router: Router) { }

  listId: string;
  taskId: string;
  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if(params.listId && params.taskId) {
        this.listId = params.listId;
        this.taskId = params.taskId;
      }else {
        console.error("No List&Task Id provided");
      }
    });
  }

  updateTask(title: string) {
    this.ts.updateTask(this.listId, this.taskId, title).subscribe(() => {
      this.router.navigate(['/lists', this.listId]);
    })
  }


}
