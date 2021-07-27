import { Component } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'notice-board'
  constructor(private authService: AuthService) { }
  
  isLoggedIn: any;
  
  loginWithGoogle() {
    this.authService.loginGoogle().then(() => {
      this.isLoggedIn = true;
      console.log('loggin successful', this.isLoggedIn)
    })
  }

  logout() {
    this.authService.logoutGoogle()
  }

}
