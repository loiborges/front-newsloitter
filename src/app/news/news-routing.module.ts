import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnviosComponent} from './envios/envios.component';
import {NewsComponent} from './news.component';
import {ClientesComponent} from './clientes/clientes.component';
import {CategoriasComponent} from './categorias/categorias.component';
import {EnvioDetalheComponent} from './envio-detalhe/envio-detalhe.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: '',
        component: EnviosComponent
      },
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: 'categorias',
        component: CategoriasComponent
      },
      {
        path: 'envio/1',
        component: EnvioDetalheComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
