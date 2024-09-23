import { Component } from '@angular/core';

@Component({
  selector: 'app-card-report',
  templateUrl: './card-report.component.html',
  styleUrls: ['./card-report.component.css']
})
export class CardReportComponent {

  reports = [
    {
      title: 'Reporte de ventas',
      description: 'Reporte de ventas de la semana',
      date: '2021-09-01',
      icon: 'fas fa-chart-line',
      url: '/reports/sales',
    },
    {
      title: 'Reporte de productos',
      description: 'Reporte de productos vendidos',
      date: '2021-09-01',
      icon: 'fas fa-box',
      url: '/reports/products',
    },
    {
      title: 'Reporte de usuarios',
      description: 'Reporte de usuarios registrados',
      date: '2021-09-01',
      icon: 'fas fa-users',
      url: '/reports/users',
    },
  ];
  constructor() { }



}
