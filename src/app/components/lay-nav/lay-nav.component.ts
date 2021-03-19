import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import {layer} from '../../core/models/layer'

@Component({
  selector: 'app-lay-nav',
  templateUrl: './lay-nav.component.html',
  styleUrls: ['./lay-nav.component.css']
})
export class LayNavComponent implements OnInit {
  layers: layer[]=[{nameOfLayer:'אטרקציות',ValOfLayer:'atractions', selected:false},
  {nameOfLayer:'אבני ק”מ',ValOfLayer:'milestones', selected:false},
  {nameOfLayer:'אזורים טבעיים', ValOfLayer:'f_natural', selected:false}]

  @Output()
  layerSelected: EventEmitter<layer> = new EventEmitter<layer>();

  constructor() { }

  ngOnInit(): void {
  }

  somethingClick(checkbox: MatCheckbox, layer: layer) { 
    layer.selected=!layer.selected;
    this.layerSelected.emit(layer);
  }

}
