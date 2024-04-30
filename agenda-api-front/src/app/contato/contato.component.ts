import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent implements OnInit{


constructor(
  private service : ContatoService
){}

  ngOnInit(): void {
   const c : Contato = new Contato();
   c.nome = 'Jose'
   c.email ='josé@rmail.com'
   c.favorito = false;

   this.service.save(c).subscribe( 
                                response => {
                                  console.log(response);
                                })
  }

}
