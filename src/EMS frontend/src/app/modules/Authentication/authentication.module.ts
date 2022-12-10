import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthenticationRoutingModule } from './authentication-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonService} from '../../core/common.service';
import { ToastrModule, ToastrManager } from 'ng6-toastr-notifications';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, ForgetPasswordComponent, ResetPasswordComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],providers: [CommonService, ToastrManager]
})
export class AuthenticationModule { }
