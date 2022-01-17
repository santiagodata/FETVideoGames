import {Injectable} from "@angular/core";

@Injectable()
export class VideojuegosService{

  private videojuegos: Videojuego[] = [
    {
      nombre: 'Fornite',
      descripcion: 'Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games, lanzado como ' +
        'diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de ' +
        'juego y mecánicas. Fue anunciado en los Spike Video Game Awards en 2011',
      img: './assets/img/ps4/fornite.jpg',
      lanzamiento: '2017',
      consola: 'PS4',

    }

  ];

  constructor() {
    console.log('Servicio listo para usarse. ');
  }


getVideojuegos(): Videojuego[]{
  return this.videojuegos;
}

getVideojuego(idx: number){
  return this.videojuegos[idx];
}

buscarVideojuegos(termino: string): Videojuego[]{
  let videojuegosArr: Videojuego[]=[];

  termino = termino.toLowerCase();

  for(let videojuego of this.videojuegos){
    let nombre = videojuego.nombre.toLowerCase();
    if (nombre.indexOf(termino)>=0){
      videojuegosArr.push(videojuego);
    }
  }
  return videojuegosArr;
}
}

export interface Videojuego{
  nombre:string;
  descripcion: string;
  img: string;
  lanzamiento: string;
  consola: string;
}

