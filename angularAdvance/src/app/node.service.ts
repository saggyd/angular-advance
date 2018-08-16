import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor() { }
  private node:Subject<Boolean> = new BehaviorSubject<Boolean>();

  node$ = this.node.asObservable();

  addNode(data:Boolean) {
    this.node.next(data);
  }
}
