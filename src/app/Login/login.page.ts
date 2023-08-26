import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    
    if (this.email === 'usuario@example.com' && this.password === 'contraseña') {
      this.router.navigate(['admin/productlist']);
    } else {
     
    }
  }
  goToRegister() {
    this.router.navigate(['register']);
  }
}

