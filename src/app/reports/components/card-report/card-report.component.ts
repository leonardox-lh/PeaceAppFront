import { Component } from '@angular/core';
import {Report} from "../../model/report";

@Component({
  selector: 'app-card-report',
  templateUrl: './card-report.component.html',
  styleUrls: ['./card-report.component.css']
})
export class CardReportComponent {
  showOverlay = false;
  reports:Report[]=[
    {
      id: 1,
      title: 'Reporte de ventas',
      image: '/assets/images/prueba.jpg',
      tipo: 'Reporte',
      fecha: '2021-09-01',
      hora: '12:00',
      distrito: 'Lima',
      direccion: 'Av. Los Alamos 123',
      description: 'Reporte de ventas de la semana',
      usuario: 'Juan Perez',
    },
    {
      id: 2,
      title: 'Reporte de productos',
      image: '../../../assets/images/prueba.jpg',
      tipo: 'Reporte',
      fecha: '2021-09-01',
      hora: '12:00',
      distrito: 'Lima',
      direccion: 'Av. Los Alamos 123',
      description: 'Reporte de productos vendidos',
      usuario: 'Juan Perez',
    },
    {
      id: 3,
      title: 'Reporte de ventas',
      image: '../../../assets/images/prueba.jpg',
      tipo: 'Reporte',
      fecha: '2021-09-01',
      hora: '12:00',
      distrito: 'Lima',
      direccion: 'Av. Los Alamos 123',
      description: 'Reporte de ventas de la semana',
      usuario: 'Juan Perez',
    },
  ]
  openOverlay(report:any) {
    console.log('open overlay');

    this.showOverlay = true;
  }

  closeOverlay() {
    this.showOverlay = false;
  }

  constructor() { }



}
