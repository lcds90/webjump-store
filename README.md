# WebJump Store

<details>
  <summary>README Original</summary>

  # Quer ser desenvolvedor frontend na Webjump?
  Criamos este teste para avaliar seus conhecimentos e habilidades frontend (HTML, CSS e  JavaScript).

  ## O teste
  O desafio é tornar o layout abaixo em uma página funcional.  
  Não existe certo ou errado, queremos ver como você se sai em situações reais, como este   desafio.   
  O tempo necessário para completar o desafio dependerá da sua experiência e ferramentas  escolhidas.

  Portanto, dê o seu melhor!

  :warning: **OBS:** Os layouts podem ser encontrados na pasta **layout**

  ![Layout](assets/preview.jpg)

  ## Instruções
  - Os arquivos do layout estão no diretório assets deste repositório
  - O conteúdo não é estático. Você deve criar um JavaScript para consultar a lista de  categorias a serem exibidas no menu e também para exibir os produtos das categorias.  
  Os dados serão fornecidos por uma API. As instruções estão mais abaixo.
  - Fonte padrão: "Open Sans"
  - Fonte do menu e botão de busca: "Open Sans - Extrabold"
  - As imagens dos produtos estão no diretório public/media
  - Você pode utilizar as tecnologias e bibliotecas que achar melhor (frameworks ou bibliotecas   JS / CSS)
  - Crie uma documentação simples comentando sobre as tecnologias e soluções adotadas
  - Se necessário explique também como rodar o seu projeto

  ## Requisitos
  - Design responsivo nos breakpoints 320px, 768px, 1024px e 1440px
  - Suporte para IE, Chrome, Safari, Firefox
  - Semântica

  ## Diferenciais
  - Uso de pré-processadores CSS (Sass, Less)
  - Acessibilidade
  - SEO
  - Performance
  - Fazer os filtros da sidebar funcionarem através de Javascript
  - Utilizar alguma automatização (Grunt, Gulp, ...)

  ## O que será avaliado
  - Estrutura e organização do código e dos arquivos
  - Soluções adotadas
  - Tecnologias utilizadas
  - Qualidade
  - Fidelidade ao layout
  - Enfim, tudo será observado e levado em conta

  ## Como iniciar o desenvolvimento
  - Instale o [npm](https://nodejs.org/en/download/)
  - Fork este repositório na sua conta do Bitbucket
  - Crie uma branch com o nome **desafio**
  - Instale as dependências
  ```
  npm install
  ```
  - Rode a aplicação
  ```
  npm start
  ```
  - Acesse http://localhost:8888
  - Realize o desenvolvimento na pasta public

  ## Como enviar seu teste
  - Envie um email para [carreira@webjump.com.br] com o link do seu repositório

  - Se o seu repositório for privado, solicite os emails das pessoas responsáveis para conceder   acesso de leitura ao seu repositório.

  ## API
  - Categorias: http://localhost:8888/api/V1/categories/list  
  O endpoint de categoria deve ser utilizado para montar o menu do cabeçalho.

  **Response**
  ```
  {
    "items": [
      {
        "id": 1,
        "name": "Camisetas",
        "path": "camisetas"
      },
      ...
    ]
  }
  ```

  - Produtos da Categoria: http://localhost:8888/api/V1/categories/{id}  
  O endpoint de produtos da categoria deve ser consumido para listar os produtos da categoria   quando o usuário clicar em um dos menus.

  **Response**
  ```
  {
    "filters": [
        {
            "color": "Cor"
        }
    ],
    "items": [
      {
        "id": 31,
        "sku": "sku-31",
        "path": "tenis-preto-couro",
        "name": "Tênis Preto Couro",
        "image": "media/shoes-1.jpg",
        "price": 129.9,
        "specialPrice": 80, //Optional
        "filter": [
          {
            "color": "Preta"
          }
        ]
      },
      ...
    ]
  }
  ```

</details>

<div align="center">

_Projeto desenvolvido para processo seletivo na [Webjump](https://webjump.com.br/)_

<img src="./assets/logo-webjump.png" alt="Logo Webjump" width="200"/>

[Sobre](#about) |
[Checklist](#checklist) |
[Informações](#informations)

</div>

* * *

## :bookmark_tabs: Sobre o projeto <a name="about"></a>

Nesse projeto foi desenvolvido um **e-commerce** utilizando as tecnologias principais sendo **React**, **Redux**.

O título que a aplicação tem é Webjump Store e irá implementar o design semelhante ao qual foi designado:

<div align="center">
<img src="./assets/preview.jpg" alt="Layout" width="400"/>
</div>

<h3 align="center">

:globe_with_meridians: [Deploy](https://api-catalog-list.herokuapp.com/)

</h3>

* * *

## :large_blue_circle: Regras de Negócio <a name="checklist"></a>

- [ ] Criar consulta com a lista de categorias a serem exibidas no menu
- [ ] Exibir os produtos das categorias.
- [ ] Funcionalidade de filtro através da sidebar
- [ ] Fonte padrão: "Open Sans"
- [ ] Fonte do menu e botão de busca: "Open Sans - Extrabold"
- [ ] Crie uma documentação simples comentando sobre as tecnologias e soluções adotadas
- [ ] Design responsivo nos breakpoints
  - [ ] 320px
  - [ ] 768px
  - [ ] 1024px
  - [ ] 1440px
- [ ] Suporte para navegadores
  - [ ] IE
  - [ ] Chrome
  - [ ] Safari
  - [ ] Firefox
- [ ] HTML Semântico
- [ ] Uso de pré-processadores CSS (Sass, Less)
- [ ] Acessibilidade
- [ ] SEO
- [ ] Performance
- [ ] Utilizar alguma automatização (Grunt, Gulp, ...)

## :books: Informações <a name="informations"></a>

#### :rocket: Execução

`npm run dev`

> Para rodar o projeto localmente .

`npm start`

> Iniciar aplicação através do app.js

---

#### Estrutura e organização do código e dos arquivos

#### :gear: Tecnologias utilizadas

#### Soluções adotadas
