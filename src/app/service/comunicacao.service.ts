import { Injectable } from '@angular/core';
import { ItemCarrinho, Produto } from '../model/produto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacaoService {
 private itens: ItemCarrinho[] = [];
  private carrinhoSubject = new BehaviorSubject<ItemCarrinho[]>([]);
  carrinho$ = this.carrinhoSubject.asObservable();

  adicionarProduto(produto: Produto) {
    const itemExistente = this.itens.find(i => i.produto.nome === produto.nome);

    if (itemExistente) {
      itemExistente.quantidade++;
    } else {
      this.itens.push({ produto, quantidade: 1 });
    }

    this.carrinhoSubject.next(this.itens);
  }

  removerProduto(index: number) {
    const item = this.itens[index];

    if (item.quantidade > 1) {
      item.quantidade--;
    } else {
      this.itens.splice(index, 1);
    }

    this.carrinhoSubject.next(this.itens);
  }

  limparCarrinho() {
    this.itens = [];
    this.carrinhoSubject.next(this.itens);
  }
}