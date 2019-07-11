import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  breadcrumbList: Array<any> = [];

  constructor(private routerService: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.listenRouting();
  }

  listenRouting() {
    this.routerService.events.
      pipe(filter((event) => event instanceof NavigationEnd), map((event) => event as NavigationEnd))
      .subscribe(() => {
        this.breadcrumbList = [];

        const paths = this.routerService.url.split('/').slice(1);
        for (const path of paths) {
          const router = this.routerService.config.find(item => item.path.includes(path));
          if (router) {
            this.breadcrumbList.push(router);
          } else {
            this.breadcrumbList.push(this.activatedRoute.firstChild.snapshot);
          }
        }
      });
  }
}
