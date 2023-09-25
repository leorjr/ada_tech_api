# ADA TECH API

Esta API tem como objetivo, o cadastramento de cards para usos gerais;

### Tecnologias Utilizadas

Nesta API, foram utilizados as tecnologias nodejs com express, para a criação
da do servidor, rotas, entre outros. Foi utilizado Docker para subirmos o banco de dados, ao qual é o postgresql e, para gerenciarmos a conexão, bem como as querys, foi utilizado o sequelize.

Como libs, temos Zod para validação das entradas, bcrypt, cors, date-fns, dotenv, jsonwebtoken e a UUID;

### Como baixar e rodar o projeto localmente?

1. Você deverá baixar o repositório do projeto para seu ambiente local:

```
    git clone https://github.com/leorjr/ada_tech_api
```

2. No seu projeto, existe um arquivo chamado .env.example. Renomei-o para .env e, preencha as variáveis necessárias ao funcionamento do projeto;

3. Necessário se certificar que você tem o docker e o docker compose instalado em sua máquina. Caso o tenha, você precisa rodar o seguinte comando para inicializar o banco de dados em um terminal:

```
    docker compose up
```

4. Com o banco de dados rodando em um terminal, você abre o segundo terminal/aba e inicia o servidor da aplicação:

```
    npm run dev
```

Seguindo estes passos, sua aplicação estará rodando em sua máquina e pronta para receber requisições.
