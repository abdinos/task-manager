import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/model/task';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-task-thumbnail',
  templateUrl: './task-thumbnail.component.html',
  styleUrls: ['./task-thumbnail.component.css']
})
export class TaskThumbnailComponent implements OnInit {
  @Input()
  task : Task;

  

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDetailsDialog(): void {
    const dialogRef = this.dialog.open(TaskDetailsComponent, {
      data: { title: this.task.title,
        date: this.task.dueDate,
        description: this.task.description},
    })
  } 



}