import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProgrammingComponent } from './programming/programming/programming.component';
import { RankingComponent } from './ranking/ranking/ranking.component';
import { RankingModule } from './ranking/ranking.module';
import { ProgrammingModule } from './programming/programming.module';
import { SharedModule } from './shared/shared.module';
import { LandingPageComponent } from './core/landing-page/landing-page.component';
import { LoginComponent } from './account/login/login.component';
import { UserAccountComponent } from './account/user-account/user-account.component';
import { routes } from './routes';

// TODO routen: https://angular.io/start/start-routing



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    RankingModule,
    ProgrammingModule,
    RouterModule.forRoot(routes)
    // TODO Alle Module importieren
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
