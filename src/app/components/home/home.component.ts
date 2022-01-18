import { Component, OnInit } from '@angular/core';
import {Videojuego, VideojuegosService} from "../../services/videojuegos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videojuegos: Videojuego[] = [];


  constructor(private _videojuegosService: VideojuegosService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.videojuegos = this._videojuegosService.getVideojuegos();
  }

  verVideojuego(idx: number) {
    this.router.navigate(['/videojuego/', idx]);
  }

}
