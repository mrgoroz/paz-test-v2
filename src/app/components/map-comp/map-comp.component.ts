import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map-comp',
  templateUrl: './map-comp.component.html',
  styleUrls: ['./map-comp.component.css']
})
export class MapCompComponent implements OnInit {

  @Input() layers: string[] = [];
  mapUrl = "https://www.govmap.gov.il/govmap/api/govmap.api.js";

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    govmap.createMap('map',
      {
        token: '5a4b8472-b95b-4687-8179-0ccb621c7990',
        layers: this.layers,
        showXY: true,
        identifyOnClick: true,
        isEmbeddedToggle: false,
        background: "1",
        layersMode: 1,
        zoomButtons: false
      });
  }
}
