import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutosComponent } from "./componentes/produtos/produtos.component";
import { CarrinhoComponent } from "./componentes/carrinho/carrinho.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProdutosComponent, CarrinhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testeAngular';
}
