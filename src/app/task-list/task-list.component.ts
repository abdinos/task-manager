import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Task } from 'src/model/task';
import { TaskService } from 'src/service/task-service/task.service';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList : Task[]

  constructor(private taskService : TaskService, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      this.taskList = data;
  });
  
}

openCreateDialog(): void {
  const dialogRef = this.dialog.open(CreateTaskComponent, {
  })
}

} 
