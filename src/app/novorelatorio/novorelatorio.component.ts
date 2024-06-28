import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NovorelatorioService } from '../novorelatorio.service';
import { novorelatorio } from './novorelatorio';

@Component({
  selector: 'app-novorelatorio',
  templateUrl: './novorelatorio.component.html',
  styleUrl: './novorelatorio.component.css'
})
export class NovorelatorioComponent implements OnInit {
  novorelatorio: novorelatorio[] = [];

  formGroupnovorelatorio : FormGroup;


ngOnInit(): void {
  this.loadnovorelatorio();
   }
   loadnovorelatorio(){
  this.service.getNovorrelatorio().subscribe({
   next: data => this.novorelatorio = data
  });
}

  constructor(private formBuilder: FormBuilder, private service: NovorelatorioService){
    this.formGroupnovorelatorio = formBuilder.group({
      id: [''],
      data: [''],
      hora: [''],
      tipo: [''],
      n_serie: [''],
      modelo:  [''],
      marca:  [''],
      defeito_relatado: [''],
      defeito_encontrado: [''],
      manutencao: [false],
      troca_de_pecaequipamento: [false]
    });
  }
 save(){
  this.service.save(this.formGroupnovorelatorio.value).subscribe({
    next: data => this.novorelatorio.push(data)
  })
}
}
