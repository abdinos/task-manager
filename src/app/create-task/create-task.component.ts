import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/service/task-service/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent  {

  taskForm = new FormGroup({
    title: new FormControl('value',[Validators.required]),
    description: new FormControl('value',[Validators.required]),
    dueDate: new FormControl('value',[Validators.required]),
    completed: new FormControl('value',[Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<CreateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService) {}
  
  
    onSubmit(): void {
      this.taskService.createTask(this.taskForm.value).subscribe(
        response => {
          console.log(response);
          this.dialogRef.close(this.taskForm.value);
        },
        error => {
          console.error(error);
        }
      );
    }
  }


