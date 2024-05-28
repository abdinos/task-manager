import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth-service/auth.service';
import { NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) {}

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if(this.authService.isAuthentified(form.value.email, form.value.password )){
      console.log("authentified !")
    }
  }

}
