import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Component, OnInit, PLATFORM_ID, HostListener, Inject, AfterViewInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  loading;
  display: boolean = true;
  offline: boolean;

  constructor(
    public location: Location,
    private router: Router,
  ) { }

  ngOnInit() {
    window.addEventListener('online', this.onNetworkStatusChange.bind(this));
    window.addEventListener('offline', this.onNetworkStatusChange.bind(this));
    // this.onWindowScroll(event);
  }
  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.loading = false;
          let D = document.documentElement
          D.scrollTop = 0
        }
      });
  }
  onDeactivate() {
    document.body.scrollTop = 0;
    // window.scrollTo(0, 0)
  }


  onNetworkStatusChange() {
    this.offline = !navigator.onLine;
    console.log('offline ' + this.offline);
  }

}
