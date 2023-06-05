import { Component, OnInit } from '@angular/core';
import {Envio} from '../entity/envio';
import {Categoria} from '../entity/categoria';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  envios: Envio[];
  categorias: any[];
  categoria: Categoria;
  loading = false;

  constructor() { }

  ngOnInit(): void {
    this.envios = [
      {
        idEnvio: 1,
        cliente: 'Cleyton Sousa',
        dataEnvio: new Date(),
        status: 'Sucesso',
        msgErro: '',
        categoria: 'Academia',
        email: 'teste@teste.com'
      }
    ];
    this.categorias = [
      {
      idCategoria: 1,
      descricao: 'Academima'
    },
      {
      idCategoria: 1,
      descricao: 'Academima'
    },
    ];
  }

}
