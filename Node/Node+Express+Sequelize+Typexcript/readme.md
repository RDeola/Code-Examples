# Configurando um projeto com Typescript e Sequelize

Uma aplicação Node com Express, utilizando o Typescript e o ORM Sequelize, exige uma série de configurações iniciais antes de realmente começarmos a implementar o nosso código. Para facilitar este processo, elaboramos um guia com o passo a passo a ser executado quando se inicia uma aplicação do zero.

## Iniciar o projeto

Iniciar um projeto NodeJS com o comando:
```sh
 npm init -y
 ```
Iniciar git na pasta com o comando:
```sh
 git init
 ```
Logo depois vamos adicionar o arquivo `.gitignore` na raiz do projeto.

## Instalação das dependências

Instalando o Typescript em modo de desenvolvimento:
```sh
npm install -D typescript @types/node ts-node-dev
```
Vamos instalar também o Express e o `@types/express` para conseguirmos trabalhar com o Express no TypeScript:
```
npm install express && npm install -D @types/express
```
E por fim vamos instalar as dependências necessárias para usarmos o Sequelize:
Copiar
npm install sequelize dotenv && npm install -D @types/sequelize mysql2 sequelize-cli
Configuração do Typescript
Iniciar o Typescript
Copiar
 npx tsc --init
Alterar as propriedade o arquivo tsconfig.json.
Copiar
{
  "compilerOptions": {
    // ...
    "rootDir": "./src",
    "outDir": "./build",
    // ...
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "build"]
}
Configuração do Sequelize
Criar o arquivo de configuração na raiz do projeto .sequelizerc com o seguinte código:
Copiar
const path = require('path');

module.exports = {
  'config': path.resolve(__dirname,'build','database','config', 'database.js'),
  'models-path': path.resolve(__dirname,'build','database','models'),
  'seeders-path': path.resolve(__dirname,'src','database', 'seeders'),
  'migrations-path': path.resolve(__dirname,'src','database', 'migrations'),
};
Copiar
- Iniciar o Sequelize `npx sequelize-cli init`.
Criar o arquivo ./src/database/config/database.ts de conexão com o banco de dados e adicionar o código:
Copiar
import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'books_api',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
}

export = config;
Adicionar um script no arquivo package.json, para podermos resetar o banco de dados por linha de comando:
Copiar
{
// ...
"scripts": {
  // ...
  "db:reset": "npx -y tsc && npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"
}
// ...
}
Instanciar o sequelize criando o arquivo ./src/database/models/index.ts com o seguinte código:
Copiar
import { Sequelize } from 'sequelize';
import * as config from '../config/database';

export default new Sequelize(config);
Pronto, agora finalizamos a configuração de um projeto utilizando o Typescript em conjunto com o Sequelize. Lembre-se de que as migrations e seeds são no formato JS e as models são no formato de Classe com TS.
