import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavComponent, LandingPageComponent],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [NavComponent, LandingPageComponent]
})
export class CoreModule { }
