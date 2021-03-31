import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  accessError: String = '';
  password: String = '';
  username: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.accessError = '';


  }

  login() {
    if (this.password === 'LMc9cyLYKyZwK4tZ') {

      this.router.navigate(['/applications']);
      
    } else {
      this.password = '';
      this.accessError = 'Invalid Password';
    }
  }

}
