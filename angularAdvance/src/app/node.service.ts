import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor() { }
  private node:Subject<Node> = new BehaviorSubject<Node>();
  
  node$ = this.node.asObservable();

  addNode(data:Node) {
    this.node.next(data);
  }
}
