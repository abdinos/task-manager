import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TaskService } from 'src/service/task-service/task.service';
import { TaskThumbnailComponent } from './task-thumbnail/task-thumbnail.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from 'src/service/auth-service/auth.service';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './guards/login-guard/login.guard';
import { RouterModule } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { HttpClientModule  } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskThumbnailComponent,
    TaskDetailsComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TaskService,AuthService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
