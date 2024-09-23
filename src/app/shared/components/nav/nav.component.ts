import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  menuItems = [
    { name: 'main', icon: 'home'},
    { name: 'reports', icon: 'people'},
    { name: 'contacts', icon: 'settings'},
  ];
  activeItem = this.menuItems[0];
  isLogged= true;
  constructor(private router:Router,
              private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(params => {
      this.isLogged = params['isLogged'];
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.isLogged = params['isLogged'];
    });
  }
  setActiveItem(item: any) {
    this.activeItem = item;
  }
  Navigate(name: string) {
    if (name === 'main') {
      this.navigateHome(name);
    } else if (name === 'reports') {
      this.navigateReports(name);
    } else if (name === 'contacts') {
      this.navigateContacts(name);
    } else if (name === 'access') {
      this.navigateExit(name);
    }

  }

  navigateHome(name: string) {
    this.router.navigate([name], {queryParams: {isLogged: true}}).then(r => console.log(r));
  }

  navigateReports(name: string) {
    this.router.navigate([name],{ queryParams: { isLogged: true } }).then(r => console.log(r));
  }

  navigateContacts(name: string) {
    this.router.navigate([name],{ queryParams: { isLogged: true } }).then(r => console.log(r));
  }

  navigateExit(name: string) {
    this.router.navigate([name]);
  }
}
