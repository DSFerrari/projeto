import { Component, OnInit } from '@angular/core';
import { solicitacoes } from './solicitacoes';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SolicitacoesService } from '../solicitacoes.service';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrl: './solicitacoes.component.css'
})
export class SolicitacoesComponent implements OnInit {

  solicitacao: solicitacoes[] = [];

  formGroupsolicitacoes : FormGroup;

  constructor(private formBuilder:FormBuilder, private service: SolicitacoesService){
    this.formGroupsolicitacoes = formBuilder.group({
      data: [''],
      tipo: [''],
      responsavel: [''],
      peca: [''],
      status: ['']
  });
  }
  ngOnInit(): void {
    this.loadsolicitacoes();
     }

     loadsolicitacoes(){
    this.service.getSolicitacoes().subscribe({
     next: data => this.solicitacao = data
    });
   }
}
