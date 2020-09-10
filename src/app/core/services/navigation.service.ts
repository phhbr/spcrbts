import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { routes } from 'src/app/routes';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  getRoutes(isAuthenticated?: boolean): Observable<Route[]> {
    return of(routes);
  }
}
