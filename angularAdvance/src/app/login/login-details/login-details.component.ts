import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {DataService} from '../data.service';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent implements OnInit {

  constructor(private ds: DataService, private router: Router) { }

  isLogedIn: Boolean = false;

  ngOnInit() {
  }

  submitHandler = (form) => {
    this.ds.handleLogin(form).subscribe(data => {
      if(data['token']) {
        this.router.navigate(['/dashboard']);
      }      
    });
  }

}
