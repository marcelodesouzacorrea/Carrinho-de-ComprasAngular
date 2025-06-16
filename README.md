# 🛒 Carrinho de Compras - Angular 18 + Bootstrap 5

Um projeto simples e funcional criado para aprender **comunicação entre componentes** e o uso de **serviços no Angular**. Ideal para quem está começando!

## ✨ Funcionalidades

- ✅ Lista de produtos exibida em cards
- ✅ Adição de produtos ao carrinho
- ✅ Atualização em tempo real com **serviço compartilhado**
- ✅ Exibição do carrinho com produtos e total
- ✅ Remoção de itens com controle de quantidade
- ✅ Layout moderno com Bootstrap 5

---



## 🚀 Tecnologias usadas

- [Angular 18](https://angular.io/)
- [Bootstrap 5](https://getbootstrap.com/)
- [RxJS](https://rxjs.dev/) para reatividade

---

## 🧠 Aprendizados principais

> Este projeto foi feito com o objetivo de **praticar**:

- 🔁 Comunicação entre componentes (produto → serviço → carrinho)
- 📦 Uso de `BehaviorSubject` para emitir atualizações
- 🔧 Criação de serviços Angular com `providedIn: 'root'`
- 🎨 Estilização com Bootstrap 5

---

## 🛠️ Como rodar o projeto

```bash
# 1. Clone este repositório
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo

# 2. Instale as dependências
npm install

# 3. Rode o projeto
ng serve --open

src/
├── app/
│   ├── produto/             # Componente que exibe os produtos
│   ├── carrinho/            # Componente que mostra os itens do carrinho
│   ├── produto.model.ts     # Interface Produto e ItemCarrinho
│   ├── carrinho.service.ts  # Serviço que compartilha os dados
│   └── app.component.ts     # Organiza os componentes principais

💡 Ideias para expandir
Adicionar imagens aos produtos

Mostrar toasts de confirmação (com Bootstrap)

Criar botão "+" e "-" no carrinho para controlar quantidade

Salvar o carrinho no localStorage

🙋‍♂️ Sobre
Este projeto foi feito como parte do meu aprendizado em Angular. Se você está começando também, sinta-se à vontade para usar esse código como base nos seus estudos!

<div align="center">
Feito com 💙 por Marcelo Correa

</div> ```
