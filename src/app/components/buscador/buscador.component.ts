import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VideojuegosService} from "../../services/videojuegos.service";
import {Router} from "@angular/router";
import {identity} from "rxjs";


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  videojuegos: any[] = [];
  termino: string;


  constructor(private activatedRoute: ActivatedRoute,
              private _videojuegosService: VideojuegosService,
              private router: Router) {
    this.termino = ""
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.videojuegos = this._videojuegosService.buscarVideojuegos(params['termino']);
      console.log(this.videojuegos);
    });
  }

  verVideojuegoBuscado(idx: number) {
    this.router.navigate(['/videojuego/', idx]);
    console.log("se ejecuta esta vuelta");
  }

}
