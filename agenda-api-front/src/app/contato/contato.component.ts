import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent implements OnInit{

 nome : string = 'oi';

constructor(){}

  ngOnInit(): void {
   
  }

}
