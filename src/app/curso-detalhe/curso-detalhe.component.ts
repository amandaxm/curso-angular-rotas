import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  id: string;
  inscrição: Subscription;
  constructor(private route: ActivatedRoute) {
  //  this.id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {
   this.inscrição= this.route.params.subscribe(
     (params: any)=>{
       this.id =params['id'];
     }
   );//inscrever nas mudancas do parametro
  }
  ngOnDestroy(): void {
    this.inscrição.unsubscribe();
  }
}
