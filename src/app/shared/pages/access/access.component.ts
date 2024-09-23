import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit{

  constructor() {
    console.log('AccessComponent created');
  }

  ngOnInit(): void {
    console.log('AccessComponent initialized');
  }

}
