import { Component, OnInit } from '@angular/core';
import { relatorios } from './relatorios';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RelatoriosService } from '../relatorios.service';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrl: './relatorios.component.css'
})
export class RelatorioComponent implements OnInit {

  relatorio: relatorios[] = [];

  formGrouprelatorios : FormGroup;

  constructor(private formBuilder:FormBuilder, private service: RelatoriosService){
    this.formGrouprelatorios = formBuilder.group({


  });
  }
  ngOnInit(): void {
    this.loadrelatorios();
     }
     loadrelatorios(){
    this.service.getRelatorios().subscribe({
     next: data => this.relatorio= data
    });
   }
}
