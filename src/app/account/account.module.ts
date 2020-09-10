import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountComponent } from './user-account/user-account.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [UserAccountComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
