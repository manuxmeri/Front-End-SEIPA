import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LoginuserComponent } from './user/loginuser/loginuser.component';
import { LoginComponent } from './admin/login/login.component';


LoginComponent

@NgModule({
  declarations: [
    LoginComponent,
    LoginuserComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ],

  exports: [
    LoginComponent,
    LoginuserComponent
  ],
})
export class LoginModule { }
