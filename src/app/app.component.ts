import { Component } from '@angular/core';
import { layer } from './core/models/layer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paz-app';

  layersSelected: string[] = [];

  ngOnInit() {

  }

  changeMap(layer: layer) {
    if (layer.selected) {
      this.layersSelected = [...this.layersSelected, layer.ValOfLayer];
    } else {
      this.layersSelected = this.layersSelected.filter(l => { return layer.ValOfLayer !== l }
      );
    }
  }
}
