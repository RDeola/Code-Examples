# ODM 
(Object-Document Mapping)

## Connection
Para facilitar a conexão, é possível manter todas informações necessárias para a conexão com o mongoDB em um arquivo, e utilizar essas informações com o método connection() quando necessário.

Nessa pasta, coloquei um exemplo: connection.ts

## Schema 
Pode ser visto como um molde de uma coleção, e será responsável por descrever toda a estrutura dos dados. Portanto, precisamos de um molde para cada tipo de coleção que teremos em nossa base de dados.

Por exemplo, se você precisar definir um schema para uma coleção de animais domésticos, provavelmente precisará armazenar atributos como nome, espécie, idade, peso e número de refeições diárias. Esses atributos possuem algumas restrições, como tipos de dados, intervalos numéricos e campos obrigatórios.

O Mongoose nos permite trabalhar com essas informações de forma muito ágil e simples. É exatamente para essas definições que os Schemas serão construídos. 

Nessa pasta coloquei um exemplo: exemplo-schema.ts

## Model 
Irá prover todas as funções necessárias para acessar e manipular os dados (Documents) da nossa Collection.
