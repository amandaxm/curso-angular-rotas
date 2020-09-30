import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: {};

  constructor(private cursosService: CursosService) { }

  ngOnInit() {//carregar informações
  this.cursos = this.cursosService.getCursos();
  }

}
