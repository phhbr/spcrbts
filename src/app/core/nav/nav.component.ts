import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Route } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menuItems$: Observable<{ path: string, title: string }[]>;
  constructor(private navigationService: NavigationService) {
    this.menuItems$ = this.navigationService.getRoutes().pipe(map((items: Route[]) => items.map(item => { return { path: item.path, title: item.data.title } })));
  }

  ngOnInit(): void {
  }

}
