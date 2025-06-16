import { ComunicacaoService } from './../../service/comunicacao.service';
import { Component } from '@angular/core';
import { Produto } from '../../model/produto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
    produtos: Produto[] = [
        { nome: 'Hambúrguer', preco: 25 },
        { nome: 'Refrigerante', preco: 5 },
        { nome: 'Batata Frita', preco: 10 }
    ]

    constructor(private comunicacaoService:ComunicacaoService){}

    adicionar(produto:Produto){
      this.comunicacaoService.adicionarProduto(produto)
      console.log('Enviar produto',this.produtos)
    }
}
