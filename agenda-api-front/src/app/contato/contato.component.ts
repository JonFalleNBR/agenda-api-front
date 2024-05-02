import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from '../contato.service';


import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { response } from 'express';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent implements OnInit{

  formulario : FormGroup = new FormGroup({});
  message?: string 
  contatos: Contato[] = []
  colunas = [ 'id', 'nome', 'email', 'favorito'] // diz respeito a estruturação das colunas no html 

constructor(
  private service : ContatoService,
  private fb : FormBuilder
){
}
// TODO adicionar campo Telefone do contato

  ngOnInit(): void {
   
   this.montarFormulario();
   this.listarContatos();
  }


  montarFormulario(){
    this.formulario = this.fb.group({
      nome: ['',Validators.required],
      email : ['', [Validators.required, Validators.email]] //Validators.required para identificar o campo como obrigatorio, nesse caso ha duas formas de validação, ebntão coloque dentro de um Array
     

    })
}

  listarContatos(){
    this.service.list().subscribe(response => {
      this.contatos = response
    })

  }


  favoritar(contato: Contato){
    this.service.favorites(contato).subscribe(response => {
      contato.favorito = !contato.favorito; 

    })

  }


  submit(){
    const formValues = this.formulario.value;
     const contato : Contato = new Contato(formValues.nome, formValues.email);
      this.service.save(contato).subscribe( 
      response => {
        let lista: Contato[] = [...this.contatos, response]
        this.contatos = lista;
        this.formulario.reset();
        this.message = 'Contato cadastrado com sucesso'
      })
      
 
  }
 

  
}


/*
private subscribeToSuccessMessage( ){ 
  this.message.successMessage$.subscribe(message => {
    this.message = message;
  })
}

Metodo push adiciona um elemento ao array de contatos conforme preenchido no formulario

a troca de logica do push para o array de lista com spread operator visando criar uma lista instantanea a cada novo contato adicionado 

[...this.contatos, response] é uma tecnica que adiciona de maneira procedural novos itens conforme eles vão sendo cadastrados, os ... representa os objetos que ja 
estão no array, e o this.contato significa que esta adiionando mais um

O response como ja é de conhecimento, tem conexão com a regra implementada no back end
*/