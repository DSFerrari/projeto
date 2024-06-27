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
  novorelatorios: novorelatorio[] = [];

  formGroupnovorelatorio : FormGroup;


ngOnInit(): void {
  this.loadnovorelatorio();
   }
   loadnovorelatorio(){
  this.service.getNovorrelatorio().subscribe({
   next: data => this.novorelatorios = data
  });
}

  constructor(private formBuilder: FormBuilder, private service: NovorelatorioService){
    this.formGroupnovorelatorio = formBuilder.group({
      n: [''],
      data: [''],
      hora: [''],
      tipo: [''],
      n_serie: [''],
      modelo:  [''],
      marca:  [''],
      defeito_relatado: [''],
      defeito_encontrado: [''],
      manutenção: [false],
      troca_de_peçaequipamento: [false]
    });
  }
 save(){
  this.service.save(this.formGroupnovorelatorio.value).subscribe({
    next: data => this.novorelatorios.push(data)
    });

}
}