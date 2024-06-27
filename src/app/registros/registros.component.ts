import { Component, OnInit } from '@angular/core';
import { registros } from './registros';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistrosService } from '../registros.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistroComponent implements OnInit {

  registro: registros[] = [];

  formGroupregistros : FormGroup;

  constructor(private formBuilder:FormBuilder, private service: RegistrosService){
    this.formGroupregistros = formBuilder.group({
      dataexpedicao: [""],
      dataconclusao: [""],
      responsavel: [""],
      setor: [""],
      pecaequipamento: [""],
      diagnostico: [""]
  });
  }
  ngOnInit(): void {
    this.loadregistros();
     }
     loadregistros(){
    this.service.getRegistros().subscribe({
     next: data => this.registro= data
    });
   }
}
