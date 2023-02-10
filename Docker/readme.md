Exemplos de comandos para criação de docker para MySql

Linux

```sh
docker run --name my-mysql-container -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d -v ~/volumes/mysql:/var/lib/mysql mysql:5.7
```

MacOs

```sh
docker run --name my-mysql-container -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d -v ~/volumes/mysql:/var/lib/mysql --platform linux/x86_64 mysql:5.7
```

- docker - comando base
  - run - para startar o container
  - --name nome_do_container - dando um nome para seu container
  - -p porta_mapeada_externamente:porta_correspondente_interna_container
  - --e MYSQL_ROOT_PASSWORD=password - criando a senha "password" para o usuário "root" do mySql
  - -d - detached(vide documentação)
  - -v diretório_local:diretorio_a_ser_mapeado_dentro_do_container - cria uma cópia do diretório interno, mapeando em um diretório local para que não haja perda de informações ao fechar o container
