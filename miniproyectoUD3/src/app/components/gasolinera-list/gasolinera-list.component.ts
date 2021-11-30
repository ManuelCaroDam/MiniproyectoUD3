import { Component, OnInit } from '@angular/core';
import { Gasolinera } from 'src/app/models/interfaces/gasolinera-list-response';

import { GasolineraService } from 'src/app/services/gasolinera.service';
import { GasolineraItemComponent } from '../gasolinera-item/gasolinera-item.component';

@Component({
  selector: 'app-gasolinera-list',
  templateUrl: './gasolinera-list.component.html',
  styleUrls: ['./gasolinera-list.component.css']
})
export class GasolineraListComponent implements OnInit {
  listaGasolineras: Gasolinera[] = [];
  constructor(private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(resp => {
      let jsonString = JSON.stringify(resp);
      this.listaGasolineras = this.gasolineraService.parseAnyToGasolineraListResponse(jsonString);
      console.log(this.listaGasolineras);
    });
  }

}
