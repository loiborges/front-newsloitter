import { Component, OnInit } from '@angular/core';
import {Envio} from '../entity/envio';

@Component({
  selector: 'app-envio-detalhe',
  templateUrl: './envio-detalhe.component.html',
  styleUrls: ['./envio-detalhe.component.css']
})
export class EnvioDetalheComponent implements OnInit {

  envio: Envio;

  constructor() { }

  ngOnInit(): void {
    this.envio = {
      idEnvio: 1,
      cliente: 'Cleyton',
      dataEnvio: new Date(),
      status: 'Enviado',
      msgErro: '',
      categoria: 'Academia',
      email: 'teste@teste.com'
    };
  }

}
