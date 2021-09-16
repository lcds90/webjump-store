# WebJump Store

_Projeto desenvolvido para processo seletivo na [Webjump](https://webjump.com.br/)_

![Logo Webjump](assets/logo-webjump.png)

---

## :bookmark_tabs: Sobre o projeto

Nesse projeto foi desenvolvido um **e-commerce** utilizando as tecnologias principais sendo **React**, **Redux**.

O título que a aplicação tem é _Webjump Store_ e irá implementar o design semelhante ao qual foi designado:

![Layout](assets/preview.jpg)

:globe_with_meridians: [Deploy]()


---

## 📜 Regras de Negócio

- ⚪ Criar consulta com a lista de categorias a serem exibidas no menu
- ⚪ Exibir os produtos das categorias.
- ⚪ Funcionalidade de filtro através da sidebar
- ☑️ Fonte padrão: "Open Sans"
- ☑️ Fonte do menu e botão de busca: "Open Sans - Extrabold"
- ☑️ Crie uma documentação simples comentando sobre as tecnologias e soluções adotadas
- ⚪ Design responsivo nos breakpoints
  - ⭕ 320px
  - ⭕ 768px
  - ⭕ 1024px
  - ⭕ 1440px
- ☑️ Implementação do react com webpack e babel
- ☑️ Suporte para navegadores (babel/webpack)
  - ⭕ IE
  - ⭕ Chrome
  - ⭕ Safari
  - ⭕ Firefox
- ☑️ HTML Semântico
- ⚪ Uso de pré-processadores CSS (Sass, Less)
- ⚪ Acessibilidade
- ⚪ SEO
- ⚪ Performance
- ⚪ Utilizar alguma automatização (Grunt, Gulp, ...)

## :books: Informações

#### :rocket: Execução

`npm start`

> Iniciar aplicação através do app.js

`npm run dev`

> Para rodar o projeto localmente, nele antes é inicilizado o server no arquivo app, e logo em seguido o servidor para realização do .

`npm run build`

> Compila o código em desenvolvimento para ser servido na pasta public

---

#### 📓 Soluções adotadas e informações

Utilizei **React** para o desenvolvimento da aplicação web.
Fiz a adaptação para conseguir utiliza-lo, implementando webpack e o babel, utilizando as bibliotecas auxiliares em `devDependecies` para compilação e execução do código tanto em produção quanto em desenvolvimento.

Para a parte de _gerenciamento de estado da aplicação_, optei pela implementação com **redux** prevendo _escalabilidade_ na aplicação, pois features novas sempre irão surgir, estar preparado para este gereciamento é menos retrabalho que possa ter.

A aplicações consiste da tela inicial, onde é opcional o usuário cadastrar seu nome e e-mail para listar ao final da compra pela loja.
Então para o controle dessas rotas, utilizo o `react-router-dom`.


#### :gear: Tecnologias utilizadas

1. [React](https://pt-br.reactjs.org/): Utilizado React para criação da interface da aplicação web.
1. [Redux](https://redux.js.org/): Para gerenciamento de estado da aplicação.
1. [Babel](https://babeljs.io/): Transcompilador de JavaScript convertendo o código em versões o quais é possível ser executada por mecanismos Javascript mais antigos.
1. [webpack](https://webpack.js.org/): Empacotador de módulo JavaScript para execução no navegador, nas bibliotecas de desenvolvimento estão os plugins necessários para compilação correta do código.
1. [react-router-dom](https://reactrouter.com/web/api/): Para gereciamento de rotas na aplicação.
1. [RTL](https://testing-library.com/docs/react-testing-library/intro/): Para testes na aplicação
1. [Eslint](https://eslint.org/): Para estilização e padronização com boas práticas de código

#### 📁 Estrutura e organização do código e dos arquivos

```js
assessment-frontend
│   .babelrc // Configuração do transpilador
│   .eslintrc // Configuração e regras do eslint na aplicação
│   app.js //  Inicialização da aplicação
│   package.json //  Configuração do projeto e listagem de bibliotecas
│   README.md // Documentação do projeto
│   webpack.config.js //  Configuração do webpack
│
└───src
│   │   index.js // Inicilização do react com virtual DOM, provider do Redux e Router 
│   │   App.js // Aplicação e rotas com suas pages definidas
│   │   App.css // CSS reset e variaveis globais para uso nos componentes
│   │
│   └───components // Componentes da aplicação
│   │   │   index.js // Arquivo index para exportação direto da raiz, sem acessar as pastas
│   │   │   Navbar // Visando componentes com concetração de arquivos próprios (estilos, testes...)
│   │   └───...
│   │
│   └───pages // Páginas da aplicação
│   │   │   Login // Página de Login
│   │   │   Store // Página Home com Categorias
│   │   └───
│   │
│   └───redux // Pasta contendo toda configuração do Redux
│       │   actions // Actions disparadas pelos componentes e types padrões
│       │   reducers // Reducers da aplicação contendo os estados de `products` e `user`
│       │   store // Configuração padrão da store
│       └───
└───mock-api // Itens mockados
```