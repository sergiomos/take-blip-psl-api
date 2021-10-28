<h1 align="center">
	<img src="https://avatars.githubusercontent.com/u/4369522?s=200&v=4"  alt="Logo"  width="240"><br><br>
    Processo seletivo TakeBlip (API)
</h1>

<div>
    <p align="center">
    <a href="https://www.linkedin.com/in/sergiomos/" target="_blank">
        <img src="https://img.shields.io/static/v1?label=Author&message=Sérgio Martins&color=0C7ABF&style=for-the-badge&logo=LinkedIn" alt="Author: Sergio Martins"/>
    </a>
        <img src="https://img.shields.io/static/v1?label=Language&message=Javascript&color=yellow&style=for-the-badge&logo=JavaScript" alt="Language: Javascript">
    </a>
  <br>
    <a href="#">
      <img  src="https://img.shields.io/static/v1?label=Tool&message=NodeJs&color=589652&style=for-the-badge&logo=node.js"  alt="Language: NodeJs">
    </a>
     <br>
    <a href="#">
      <img  src="https://img.shields.io/static/v1?label=Framework&message=Express&color=EEEEEE&style=for-the-badge&logo=express"  alt="Framework: Express">
    </a>
         <br>
    <a href="#">
      <img  src="https://img.shields.io/static/v1?label=Tool&message=Jest&color=910E1B&style=for-the-badge&logo=jest"  alt="Tool: Jest">
    </a>
             <br>
    <a href="#">
      <img  src="https://img.shields.io/static/v1?label=Tool&message=Eslint&color=482FBD&style=for-the-badge&logo=eslint"  alt="Tool: Eslint">
    </a>
</div>

## Table of Contents

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#funcionalidades">Funcionalidades</a> •
 <a href="#desenvolvimento">Desenvolvimento</a> •  
 <a href="#tecnologias">Tecnologias</a> • 
</p>

## 📌Sobre

<div>
    <p align="center">
    <em>
        Uma API desenvolvida durante o processo seletivo da TakeBlip, seu objetivo é consumir a API do github para ser utilizada pelo chatbot construido a partir de sua plataforma.
    </em>
    </p>
</div>

## 🚀Funcionalidades

```/GET takeblip/repos```

- Retorna os cinco mais antigos repositórios que utilizam C#

- Cada repositório está em uma chave numerica que se inicia em 0
  ```js
  {
    0: {...},
    1: {...},
    2: {...},
    3: {...},
    4: {...},
  }
  ```

- Onde os repositórios possuem a seguinte estrutura
  ```ts
  {
   name: string,
   coverImageId: string,
   description: string,
   createdAt: string,
  }
  ```
## 📕Desenvolvimento

**Você deve ter instalado**
- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

**Recomendações**
- Para melhor produtividade, é recomendado usar a extensão Eslint no VSCode

**Passo a passo.**
1. Clonar este repositório
2. Instalar as dependências
3. Rodar a aplicação localmente
  ---
### 1. Clonar este repositório
```
git clone https://github.com/sergiomos/take-blip-psl-api.git
```
---
### 2. Instalar as dependências
```
npm install
```
or
```
yarn
```

### 3. Rodar a aplicação localmente

```
npm run dev
```
or
```
yarn dev
```

**Você também poderá rodar os testes locais com**

```
npm test
```
or
```
yarn test
```
## 🌐Tecnologias

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJs](https://nodejs.org/en/)
- [Cors](https://github.com/expressjs/cors)
- [Axios](https://axios-http.com/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Jest](https://jestjs.io/pt-BR/)
- [Eslint](https://eslint.org/)
- [Supertest](https://eslint.org/)
- [Nodemon](https://github.com/remy/nodemon#nodemon)

Feito com 💜 por [Sergio Martins](https://github.com/Yuri-stack) 🚀.

Readme inspirado em [Yuri](https://github.com/Yuri-stack)
