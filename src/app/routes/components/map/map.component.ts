import {Component, OnInit} from '@angular/core';
import Map from 'ol/Map';
import {Router} from "@angular/router";
import {OSM} from "ol/source";
import TileLayer from "ol/layer/Tile";
import {View} from "ol";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 3
      })
    });
  }
}
