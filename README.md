
Background jobs no Node.js
----

Nesse repository fiz uma simples aplicação para lidar com trabalhos em segundo plano com Node.js, utilizando uma biblioteca de filas chamada [Bull](https://github.com/OptimalBits/bull), que permite não só executar, mas também monitorar falhas e realizar retentativas.


Pré-requisitos
----
* Node.js
* Yarn ou Npm
* Docker

Start
----
* Execute ```yarn``` para instalar dependencias do projeto.
*  Adicione arquivo ```.env``` dentro da pasta e sete as seguintes variveis: 
```
MAIL_HOST="smtp.mailtrap.io"
MAIL_PORT=2525
MAIL_USER=""
MAIL_PASS=""

REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```
* Com o Docker instalado em sua maquina, execute o seguinte comando para adicionar container Redis.<br>
```docker run --name redis -p 6379:6379 redis:alpine```
* Após isso execute o comando: ```yarn dev```
* O server será executado na porta *3000* de sua maquina


Rotas
----

* URL: https://localhost:3000/users; <br>
    body on JSON:<br> {<br>
    name: "leandro",<br>
    email: "leandro@mail.com.br",<br>
    password: "123456"<br>
};



