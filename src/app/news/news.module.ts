import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { EnviosComponent } from './envios/envios.component';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ClientesComponent } from './clientes/clientes.component';
import { CategoriasComponent } from './categorias/categorias.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EnvioDetalheComponent } from './envio-detalhe/envio-detalhe.component';
import {NewsComponent} from './news.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    NewsComponent,
    EnviosComponent,
    ClientesComponent,
    CategoriasComponent,
    EnvioDetalheComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    TableModule,
    InputTextModule,
    RouterModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    FormsModule,
  ]
})
export class NewsModule { }
