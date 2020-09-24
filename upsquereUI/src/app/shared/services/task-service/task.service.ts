import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Task } from '../../models/task';

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
    private router: Router) {
  }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/api/tasks`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public getTask(id: string): Observable<Task> {
    return this.http.get<Task>(`${environment.apiUrl}/api/tasks/` + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${environment.apiUrl}/api/tasks`, JSON.stringify(task), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );;
  }

  public updateTask(id: string, task: Task): Observable<Task> {
    return this.http.post<Task>(`${environment.apiUrl}/api/tasks/` + id, JSON.stringify(task))
      .pipe(
        catchError(this.errorHandler)
      );;
  }

  public deleteTask(id: string): Observable<Task> {
    return this.http.delete<Task>(`${environment.apiUrl}/api/tasks/` + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );;
  }

  public deleteTasks(): Observable<Task[]> {
    return this.http.delete<Task[]>(`${environment.apiUrl}/api/tasks`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );;
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
