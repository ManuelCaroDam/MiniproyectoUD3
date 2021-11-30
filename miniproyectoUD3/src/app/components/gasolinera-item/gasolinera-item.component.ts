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

  constructor() { }

  ngOnInit(): void {

  }
}
