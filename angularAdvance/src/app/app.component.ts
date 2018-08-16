import { Component } from '@angular/core';
import { NodeService } from './node.service';

//import { HomeComponent } from './container/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  node:Boolean;
  title = 'angularAdvance';
  constructor(ns:NodeService) {
    ns.node$.subscribe(n => {
      this.node = n;
      console.log(this.node);
    }
    );
    
  }
}
