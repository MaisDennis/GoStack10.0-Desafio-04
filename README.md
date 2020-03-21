# GoStack10.0 || Desafio 04

* [1. Conceitos abordados](#1-conceitos-abordados)
* [2. Iniciando o Projeto](#3-iniciando-o-projeto)
* [3. Enunciado do Projeto](#4-enunciado-do-projeto)
* [4. Criando o projeto](#5-criando-o-projeto)

##  1. Conceitos abordados

1. Configuração de React, Babel, Webpack.
2. Utlização de JSX.
3. Importando CSS e Arquivos.
4. Components: Class e Function.
5. State e Imutabilidade.
6. Propriedades de componentes React(e a transferência de objetos, functions e componentes via propriedade).

## 2. Iniciando o projeto

```
yarn build: "webpack --mode production",
yarn dev:   "webpack-dev-server --mode development"
```

## 3. Enunciado do projeto

<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 4: Introdução ao React
</h3>

<p align="center">“Sucesso não é o resultado de um jogo, mas o destino de uma jornada”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-04?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-04/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-04?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Crie uma aplicação do zero utilizando **Webpack, Babel, Webpack Dev Server e ReactJS**.

Nessa aplicação você irá desenvolver uma **interface** semelhante com a do **Facebook** utilizando React.

As informações contidas na interface são **estáticas** e não precisam refletir nenhuma API REST ou back-end.

### Tela da aplicação

![Facebook](.github/facebook.png)

O layout não precisa ficar exatamente igual, você pode utilizar sua criatividade para modificar da maneira que preferir.

O mais importante é que todos elementos apareçam em tela.

O layout da aplicação está [nesse link](.github/layout.sketch) que pode ser aberto por essa ferramenta gratuita e online: https://www.figma.com/

### Componentes

Na imagem abaixo destaquei cada componente que você criará e abaixo da imagem está a descrição e responsabilidades de cada um:

![Componentes](.github/components.png)

**Header (Amarelo):** Responsável por exibir a logo e o link para acessar o perfil;

**PostList (Verde):** Responsável por armazenar os dados da listagem de post, esses dados devem ficar dentro do `state` do componente e não em uma variável comum, por exemplo:

```js
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2
        // Restante dos dados de um novo post
      }
    ]
  };
}
```

**Post (Vermelho):** Responsável por exibir os dados do post, esses dados devem vir através de uma propriedade recebida do componente PostList, ou seja, lá no PostList você terá algo assim:

```js
posts.map(post => <Post key={post.id} data={post} />);
```

**Comment (Azul):** Responsável por exibir um comentário. Os dados do comentário virão por uma propriedade do componente. Dentro do componente Post você terá um novo `.map` para listar os comentários do post:

```js
data.comments.map(comment => <Comment key={comment.id} data={comment} />);
```

## 📅 Entrega

Esse desafio **não precisa ser entregue** e não receberá correção, mas você pode ver o resultado do [código do desafio aqui](https://github.com/Rocketseat/bootcamp-gostack-desafio-04). Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)

## 4. Criando o projeto

1. Configurando a estrutura:
   1. Dentro da pasta: 
      1. Iniciar o projeto, 
      2. Install Babel: converte o novo JS para que o browser entenda. 
      3. Webpack: Criação de bundle, importar CSS e imagens.
      4. React: biblioteca/framework p/ construção de interfaces.
      ```
      yarn init -y
      yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli -D
      yarn add react react-dom
      ```
    2. Criar babel.config.js e webpack.config.js
    ```Javascript
    module.exports = {
      presets: [
        "@babel/preset-env", 
        // responsavel por transformar funcionalidades que o navegador não entende. Ex: import/export, Arrow Functions, Classes
        "@babel/preset-react" 
        // transformar o que o navegador não entende do React. Ex: JSX
      ],
    };
    ```
    3. Criar public/index.html, atualizar webpack.config.js
    4. Add Babel Loader, webpack-dev-server (atualiza o browser automaticamente), webpack.config.html.
    ```
    yarn add babel-loader -D
    yarn add webpack-dev-server -D
    ```
    5. Adicionar scripts ao package.json
    ```
    "scripts": {
      "build": "webpack --mode production",
      "dev": "webpack-dev-server --mode development"
    },
    ```
    6.yarn dev -> verificar no terminal que o Project is running at http://localhost:8080/
    
2. Criando o componente raíz:
   1. Criar src/App.js, atualizar o index.js
      1. **Todo lugar que o JSX estiver presente, o React tem que ser importado.**
      ```Javascript
      import React from 'react';

      function App() {
         return <h1>Hello Rocketseat</h1>
      }

      export default App;
      ```
      2. index.js:
      ```Javascript
      import React from 'react';
      import { render } from 'react-dom';
      import App from './App';

      render(<App />, document.getElementById('app'));
      ```
      3. index.html:
      ```
      <body>
         <div id="app"></div>
         <script src="./bundle.js"></script>
      </body>
      ```
3. Importando o CSS:
   1. Terminal: 
     1. style-loader: importa css para dentro do html via <style>, 
     2. css-loader: importa outros arquivos para dentro do .css e que o webpack entenda.
     ```
     yarn add style-loader css-loader -D
     ```
     3. Add rule no webpack.config.js
     4. Criar src/App.css e importar ao App.js, yarn dev.
   
4. Importando imagens:
   1. Instalar File Loader
      ```
      yarn add file-loader -D
      ```
   2. Add rule no webpack.config.js
   3. Criar src/assets e salvar uma foto, importar ao App.js

5. Class components:  
   1. Deletar a imagem.
   2. Criar src/components/Postlist.js, criar class (component)
   ```Javascript
   import React, { Component } from 'react';

   class PostList extends Component {
      render() {
          return ()
      }
   }
   
   export default PostList;
   ```
   3. App.js
      1. import PostList from './components/PostList';
      2. return <PostList />
   4. install class properties (para que Babel entenda "state = "
      ```
      yarn add @babel/plugin-proposal-class-properties -D
      ```
   5. babel.config.js
      ```
      plugins: [ '@babel/plugin-proposal-class-properties' ]
      ```
      
6.  Estado e Imutibilidade
    1. Vide components/PostList.js,
    2. Components:
       1. Posts: PostItem.js
       2. Header: Header.js
       3. Styles: App.css
