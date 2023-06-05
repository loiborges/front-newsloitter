import { Component, OnInit } from '@angular/core';
import {Cliente} from '../entity/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  loading = false;
  clientes: Cliente[];

  constructor() { }

  ngOnInit(): void {
    this.clientes = [
      {
        idCliente: 1,
        email: 'teste@teste.com',
        nome: 'Cleyton',
        aceite: 'Sim',
        categoria: 'Academia'
      }
    ];
  }

}
