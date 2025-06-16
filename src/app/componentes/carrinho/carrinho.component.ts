import { CommonModule } from '@angular/common';
import { ItemCarrinho, Produto } from '../../model/produto';
import { ComunicacaoService } from './../../service/comunicacao.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  itens:ItemCarrinho[] = []

  constructor(private comunicacaoService:ComunicacaoService){}

  ngOnInit(){
    this.comunicacaoService.carrinho$.subscribe(produto=>{
      this.itens = produto
      console.log('carrinho',this.itens)
    })
  }
  
  remover(index:number){
    this.comunicacaoService.removerProduto(index)
  }

  limpar(){
    this.comunicacaoService.limparCarrinho()
  }

  get total(){
    return this.itens.reduce((soma, item) => soma + (item.produto.preco * item.quantidade), 0);
  }
}
