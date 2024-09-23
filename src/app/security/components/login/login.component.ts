import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route: ActivatedRoute,
              private router: Router,) {}

  logIn() {
    this.router.navigate(['main'], {queryParams: {isLogged: true}}).then(r => console.log(r));
   }
}
