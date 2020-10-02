import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/shared/services/task-service/task.service';
import { List } from 'src/app/shared/models/list';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  constructor(private ts: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  createList(title: string) {
    this.ts.createList(title).subscribe((list: List) => {
      this.router.navigate(['/lists', list.id])
    })
  }

}
