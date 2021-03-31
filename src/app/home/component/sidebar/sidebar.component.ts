import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'asp-view-grid', class: '' },
  { path: '/distribution-admin', title: 'ICO Distribution Admin', icon: 'asp-light-bulb', class: '' },
  { path: '/distribution-user', title: 'ICO Distribution Admin', icon: 'asp-light-bulb', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {
  isCollapsed: boolean;

  public menuItems: any[];
  constructor(
    public router: Router
  ) { }


  ngOnInit() {

    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  logout() {
    localStorage.clear()
    location.href = '/auth'
    // this.router.navigate(['/auth/login'])

  }

}
