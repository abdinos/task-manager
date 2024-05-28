import { Injectable } from '@angular/core';
import { Task } from 'src/model/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8081/'; // replace with your actual API URL

  constructor(private http: HttpClient) { }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl+'tasks')
  }

  // Add other methods for other API endpoints (getTasks, updateTask, deleteTask, etc.)
}
  

