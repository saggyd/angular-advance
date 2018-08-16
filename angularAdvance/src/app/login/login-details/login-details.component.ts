import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {DataService} from '../data.service';
import { NodeService } from '../../node.service';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent implements OnInit {

  constructor(private ds: DataService, private router: Router,private ns: NodeService) { }

  isLogedIn: Boolean = false;

  ngOnInit() {
  }

  submitHandler = (form) => {
    this.ds.handleLogin(form).subscribe(data => {
      if(data['token']) {
        this.isLogedIn = true;
        this.ns.addNode(this.isLogedIn);
        this.router.navigate(['/dashboard']);
      }      
    });
  }

}
