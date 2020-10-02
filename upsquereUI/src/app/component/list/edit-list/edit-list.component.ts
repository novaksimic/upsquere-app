import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/services/task-service/task.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {

  constructor(private ts: TaskService, private route: ActivatedRoute,
              private router: Router) { }

  listId: string;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if(params.listId){
        this.listId = params.listId;
      }else {
        console.error("No list Id provided");
      }
    });
  }

  updateList(title: string) {
    this.ts.updateList(this.listId, title).subscribe(() => {
      this.router.navigate(['/lists', this.listId]);
    })
  }

}
