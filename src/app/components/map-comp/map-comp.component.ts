import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
declare var govmap: { createMap: (arg0: string, arg1: { token: string; layers: string[]; showXY: boolean; identifyOnClick: boolean; isEmbeddedToggle: boolean; background: string; layersMode: number; zoomButtons: boolean; }) => void; };
@Component({
  selector: 'app-map-comp',
  templateUrl: './map-comp.component.html',
  styleUrls: ['./map-comp.component.css']
})
export class MapCompComponent implements OnInit {

  @Input() layers: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    govmap.createMap('map',
      {
        token: '5a4b8472-b95b-4687-8179-0ccb621c7990',
        layers: this.layers,
        showXY: true,
        identifyOnClick: true,
        isEmbeddedToggle: false,
        background: "1",
        layersMode: this.layers.length,
        zoomButtons: false
      });
  }
}
