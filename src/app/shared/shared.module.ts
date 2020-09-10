import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem("spacerbts_access_token");
}

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      },
    }),
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ButtonComponent,
    JwtModule
  ]
})
export class SharedModule { }
