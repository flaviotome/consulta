import { Categoria } from './../../models/categoria';
import { ListaService } from './../../services/lista.service';
import { Produto } from './../../models/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  /* Lista dos produtos */
  listaDeProdutos: Produto[] = [
    {
      _id: '',
      productName: '',
      productPrice: 0,
      productDescription: '',
      productType: '',
      productImg: '',
    },
  ];
  /* Lista da categoria dos produtos */
  listaCategoria: Categoria[] = [
    {
      _id: '',
      categoryName: '',
    },
  ];

  /* recebe o atributo Value da opção escolhida no radio button */
  filtro = '';

  constructor(private listaService: ListaService) {}

  ngOnInit(): void {
    /* carrega a lista dos produtos do banco de dados */
    this.listaService.getProducts().subscribe((produto) => {
      this.listaDeProdutos = produto;
    });
    /* carrega a lista das categorias cadastradas no banco de dados */
    this.listaService.getCategory().subscribe((cat) => {
      this.listaCategoria = cat;
    });
  }

  /* função utilizada quando a opção 'todos' é escolhida no filtro. Retorna todos os prosutos cadastrados */
  retornaTodos() {
    this.listaService.getProducts().subscribe((produto) => {
      this.listaDeProdutos = produto;
    });
  }

  /* retorna a lista de produtos filtrados pela opção excolhida pelo radio button */
  filtraPorCategoria() {
    this.listaService.getProductsByType(this.filtro).subscribe((produto) => {
      this.listaDeProdutos = produto;
    });
  }
}
