import { Component, Input, OnInit } from '@angular/core';
import { Gasolinera } from 'src/app/models/interfaces/gasolinera-list-response';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {
  @Input() gasolineraInput!: Gasolinera;

  constructor(private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(resp => {
      console.log(resp);
      let jsonString = JSON.stringify(resp);
      let jsonStringReplaced = jsonString.replace(/Precio Gasoleo A/gi, 'precioGasoleA');
       jsonStringReplaced = jsonStringReplaced.replace(/ListaEESSPrecio/gi, 'listaEESSPrecio');
      jsonStringReplaced = jsonStringReplaced.replace(/C\.P\./gi, 'cP');
      jsonStringReplaced = jsonStringReplaced.replace(/Dirección/gi, 'direccion');
      jsonStringReplaced = jsonStringReplaced.replace(/Horario/gi, 'horario');
      jsonStringReplaced = jsonStringReplaced.replace(/Municipio/gi, 'municipio');
      jsonStringReplaced = jsonStringReplaced.replace(/Precio Gasolina 95 E5/gi, 'precioGasolina95E5');
      jsonStringReplaced = jsonStringReplaced.replace(/Precio Gasolina 98 E5/gi, 'precioGasolina98E5');
      jsonStringReplaced = jsonStringReplaced.replace(/Provincia/gi, 'provincia');
      jsonStringReplaced = jsonStringReplaced.replace(/Rótulo/gi, 'rotulo');
      jsonStringReplaced = jsonStringReplaced.replace(/IDEESS/gi, 'ideess');
      jsonStringReplaced = jsonStringReplaced.replace(/IDMunicipio/gi, 'idMunicipio');
      jsonStringReplaced = jsonStringReplaced.replace(/IDProvincia/gi, 'idProvincia');
      jsonStringReplaced = jsonStringReplaced.replace(/IDCCAA/gi, 'idccaa');
      let jsonFinal = JSON.parse(jsonStringReplaced);
      console.log(jsonFinal);
    });
  }
}
