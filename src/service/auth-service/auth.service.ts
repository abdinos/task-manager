import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  
  constructor() { }

  isAuthentified(email: string, password: string) : boolean{
    if(email === "john.doe@test.com" && password === "testing"){
        localStorage.setItem('isLoggedIn','true');
        return true;
       }
   }
  
}
