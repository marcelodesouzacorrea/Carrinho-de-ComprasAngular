export interface Produto {
    nome: string
    preco: number
}

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}