import {Component, OnInit, ViewChild} from '@angular/core';
import {Categoria} from '../entity/categoria';
import {CategoriasService} from './categorias.service';
import {Table} from 'primeng/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  @ViewChild('dt') table: Table;

  loading = false;
  categorias: Categoria[];
  newCategoria: Categoria = new Categoria();

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit(): void {
    this.getAllCategorias();
  }

  getAllCategorias(): void {
    this.categoriaService.getAllCategorias().subscribe(
      data => {
        console.log(data);
        this.categorias = data;
      }, error => {
        console.log(error);
      }
    );
  }

  cadastraCategoria(): void {
    this.categoriaService.createCategoria(this.newCategoria).subscribe(
      data => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Categoria cadastrada com sucesso',
          showConfirmButton: false,
          timer: 2000
        });
        this.getAllCategorias();
      }, error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Não foi possível cadastrar a categoria',
          text: 'Preencha os dados corretamente',
          showConfirmButton: true,
        });
      }
    );
  }

  excluiCategoria(idCategoria: number): void {
    Swal.fire({
      title: 'Atenção!',
      text: 'Você deseja excluir esta categoria?',
      showDenyButton: true,
      confirmButtonText: 'Excluir',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.categoriaService.deleteCategoria(idCategoria).subscribe(
          data => {
            console.log(data);
            Swal.fire('Categoria excluída com sucesso', '', 'success');
            this.getAllCategorias();
          },

          error => Swal.fire({
            icon: 'error',
            title: 'Algo deu errado!',
            showConfirmButton: true,
          })
        );
      } else if (result.isDenied) {
        Swal.fire('Categoria não foi excluída', '', 'info');
      }
    });
  }
}
