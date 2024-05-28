import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/model/task';

export interface DialogData {
  title: string;
  date : Date;
  description : string;
}

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent  {

    constructor(
      public dialogRef: MatDialogRef<TaskDetailsComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}
  
    onClose(): void {
      this.dialogRef.close();
    }
  

}
