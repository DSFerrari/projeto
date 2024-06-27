import { Component, OnInit } from '@angular/core';
import { requisicoes } from './requisicoes';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequisicoesService } from '../requisicoes.service';

@Component({
  selector: 'app-requisicoes',
  templateUrl: './requisicoes.component.html',
  styleUrl: './requisicoes.component.css'
})
export class RequisicoesComponent implements OnInit {

  requisicao: requisicoes[] = [];

  formGrouprequisicoes : FormGroup;

  constructor(private formBuilder:FormBuilder, private service: RequisicoesService){
    this.formGrouprequisicoes = formBuilder.group({
      data: [""],
      type:[""],
      responsavel: [""],
      setor: [""],
  });
  }
  ngOnInit(): void {
    this.loadrequisicoes();
     }
     loadrequisicoes(){
    this.service.getRequisicoes().subscribe({
     next: data => this.requisicao = data
    });
   }
}
