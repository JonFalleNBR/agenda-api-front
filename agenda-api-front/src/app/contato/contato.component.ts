import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from '../contato.service';


import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent implements OnInit{

  formulario : FormGroup = new FormGroup({});

constructor(
  private service : ContatoService,
  private fb : FormBuilder
){
}
// TODO adicionar campo Telefone do contato

  ngOnInit(): void {
   this.formulario = this.fb.group({
    nome: ['',Validators.required],
    email : ['', Validators.email]
   })


  }


  submit(){
    console.log(this.formulario.value)
    //this.service.save(c).subscribe( 
      //response => {
        //console.log(response);
     // })

  }

}
