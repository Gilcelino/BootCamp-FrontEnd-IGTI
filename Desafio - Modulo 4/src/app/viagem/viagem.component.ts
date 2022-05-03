import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.scss']
})
export class ViagemComponent implements OnInit {

  latitudeOrigem: number = 0;
  longitudeOrigem: number = 0;
  latitudeDestino: number = 0;
  longitudeDestino: number = 0;
  qtdeMilhas: number = 0;
  valorMilha: number = 0;

  crianca: boolean = false;
  classeExecutiva: boolean = false;

  foraPais: boolean = false;


  kmDistancia: number = 0;
  Valor: number = 0;
  constructor() { }

  ngOnInit(): void {

  }

  executar() {
    this.kmDistancia = this.getDistance(this.latitudeOrigem, this.longitudeOrigem,
      this.latitudeDestino, this.longitudeDestino);

    console.log(this.kmDistancia, this.latitudeDestino);
    let valorKM = this.getValueKM();

    if (this.classeExecutiva) {
      if (this.crianca) {
        valorKM = valorKM * 1.4
      } else {
        valorKM = valorKM * 1.8
      }
    }

    this.valorMilha = this.qtdeMilhas * 0.02
    this.Valor = valorKM * this.kmDistancia - this.valorMilha;



  }

  getValueKM(): number {
    let valorKM = 0.3;

    if (this.foraPais) {
      if (this.crianca) {
        valorKM = 0.25;
      } else {
        valorKM = 0.5;
      }
      return valorKM;
    }

    if (this.crianca) {
      valorKM = 0.15;
    }
    return valorKM
  }

  getDistance(originLatitude: number, originLongitude: number, destinationLatitude: number, destinationLongitude: number) {
    const EARTH_RADIUS = 6_371.071; // Earth
    const diffLatitudeRadians = this.degreesToRadians(destinationLatitude - originLatitude);
    const diffLongitudeRadians = this.degreesToRadians(destinationLongitude - originLongitude);
    const originLatitudeRadians = this.degreesToRadians(originLatitude);
    const destinationLatitudeRadians = this.degreesToRadians(destinationLatitude);
    const kmDistance =
      2 *
      EARTH_RADIUS *
      Math.asin(
        Math.sqrt(
          Math.sin(diffLatitudeRadians / 2) *
          Math.sin(diffLatitudeRadians / 2) +
          Math.cos(originLatitudeRadians) *
          Math.cos(destinationLatitudeRadians) *
          Math.sin(diffLongitudeRadians / 2) *
          Math.sin(diffLongitudeRadians / 2)
        )
      );
    return kmDistance;
  }

  degreesToRadians(degrees: number) {
    const pi = Math.PI;
    return degrees * (pi / 180);
  }
}
