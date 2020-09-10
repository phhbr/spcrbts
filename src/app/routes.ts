import { LandingPageComponent } from './core/landing-page/landing-page.component';
import { LoginComponent } from './account/login/login.component';
import { RankingComponent } from './ranking/ranking/ranking.component';
import { ProgrammingComponent } from './programming/programming/programming.component';
import { UserAccountComponent } from './account/user-account/user-account.component';
import { Route } from '@angular/router';
import { AuthGuard } from './core/services/auth-guard.service';

export const routes: Route[] = [
    { path: '', component: LandingPageComponent, data: { title: 'Home' } },
    { path: 'login', component: LoginComponent, data: { title: 'Login' } },
    { path: 'ranking', component: RankingComponent, data: { title: 'Ranking' },     canActivate: [AuthGuard]  },
    { path: 'programming', component: ProgrammingComponent, data: { title: 'Programming' },     canActivate: [AuthGuard]  },
    { path: 'account', component: UserAccountComponent, data: { title: 'User Account' },    canActivate: [AuthGuard]  },
  
    //{ path: 'dashboard', component: DashboardComponent },
    // ...
  ];