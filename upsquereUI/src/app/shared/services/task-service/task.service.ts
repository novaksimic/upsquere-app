import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Task } from '../../models/task';
import { WebRequestService } from '../web-request/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient,
    private router: Router, private webRequestService: WebRequestService) {
  }

  getLists() {
    return this.webRequestService.get('lists');
  }

  createList(title: string) {
    return this.webRequestService.post('lists', { title });
  }

  updateList(id: string, title: string) {
    //Send web request to create List
    //returns an Observable to subscribe to
    return this.webRequestService.patch(`lists/${id}`, { title });
  }

  deleteList(id: string) {
    return this.webRequestService.delete(`lists/${id}`);
  }


  public getTasks(listId: string) {
    return this.webRequestService.get(`api/${listId}/tasks`);
  }

  public addTask(title: string, listId: string) {
    return this.webRequestService.post(`api/lists/${listId}/tasks`, {title});
  }

  updateTask(listId: string, taskId: string, title: string) {
    //Send web request to create List
    //returns an Observable to subscribe to
    return this.webRequestService.patch(`api/lists/${listId}/tasks/${taskId}`, { title });
  }

  deleteTask(listId: string, taskId: string) {
    return this.webRequestService.delete(`api/lists/${listId}/tasks/${taskId}`);
  }

  public deleteTasks(): Observable<Task[]> {
    return this.http.delete<Task[]>(`${environment.apiUrl}/api/tasks`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );;
  }

  complete(task: Task) {
    return this.webRequestService.patch(`lists/${task.listId}/tasks/${task.id}`, {
      completed: !task.completed
    });
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
