import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginDetailsComponent } from './login-details/login-details.component';

const routes: Routes = [
  {
    path: '',
    component: LoginDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
