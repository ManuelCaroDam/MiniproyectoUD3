import { Component, OnInit } from '@angular/core';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {

  constructor(private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(resp => {
      console.log(resp);
      let jsonString = JSON.stringify(resp);
      let jsonStringReplaced = jsonString.replace(/Precio Gasoleo A/gi, 'precioGasoleA');
      let jsonFinal = JSON.parse(jsonStringReplaced);
      console.log(jsonFinal);
    });
  }
}
