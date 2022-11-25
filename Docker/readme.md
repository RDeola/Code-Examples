Exemplos de comandos para criação de docker para MySql

Linux

docker run --name trybe-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d -v ~/volumes/mysql:/var/lib/mysql mysql:5.7

MacOs

docker run --name trybe-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d -v ~/volumes/mysql:/var/lib/mysql --platform linux/x86_64 mysql:5.7
