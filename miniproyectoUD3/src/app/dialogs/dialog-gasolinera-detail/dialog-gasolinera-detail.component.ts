import { Component, Inject, OnInit } from '@angular/core';
import { Gasolinera } from 'src/app/models/interfaces/gasolinera-list-response';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GasolineraService } from 'src/app/services/gasolinera.service';

export interface DialogGasolineraDetailData {
  direccion: string;
}

@Component({
  selector: 'app-dialog-gasolinera-detail',
  templateUrl: './dialog-gasolinera-detail.component.html',
  styleUrls: ['./dialog-gasolinera-detail.component.css']
})
export class DialogGasolineraDetailComponent implements OnInit {
  gasolinera!: Gasolinera;

  constructor( @Inject(MAT_DIALOG_DATA) private data: DialogGasolineraDetailData,
  private gasolineraService: GasolineraService) { }

  ngOnInit(): void {

    console.log(this.data.direccion);
    this.gasolineraService.getGasolineras().subscribe(gasolineraResult => {
      this.gasolinera = gasolineraResult;
    });

  }

}
