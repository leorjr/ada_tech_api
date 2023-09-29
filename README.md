# ADA TECH API

A ADA TECH API é uma aplicação que permite o cadastro de cards para uso geral.

## Tecnologias Utilizadas

A API foi desenvolvida utilizando as seguintes tecnologias:

- Node.js com Express para criação do servidor e definição de rotas.
- Docker para a criação de contêineres do banco de dados PostgreSQL.
- Sequelize para gerenciamento da conexão com o banco de dados e execução de queries.
- Bibliotecas e pacotes utilizados incluem: Zod para validação de entradas, Bcrypt para criptografia, CORS para lidar com políticas de segurança do navegador, Date-fns para manipulação de datas, dotenv para gerenciamento de variáveis de ambiente, jsonwebtoken para autenticação e UUID para geração de identificadores únicos.

## Como Baixar e Rodar o Projeto Localmente?

Siga os passos abaixo para baixar e executar o projeto em seu ambiente local:

1. Clone o repositório do projeto para o seu ambiente local:

```
    git clone https://github.com/leorjr/ada_tech_api
```

2. Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis necessárias para o funcionamento do projeto.

3. Verifique se você tem o Docker e o Docker Compose instalados em sua máquina. Se não estiverem instalados, siga as instruções de instalação nos sites oficiais do Docker e Docker Compose.

4. Inicialize o banco de dados em um terminal usando o Docker Compose:

```
    docker-compose up --build
```

Após seguir esses passos, sua aplicação estará rodando em sua máquina local, no endereço ao qual aparece em seu terminal e estará pronta para receber requisições;

## ENDPOINTS

A seguir, são apresentados exemplos de endpoints da API e seus retornos:

### Cadastrar um User

- **Endpoint:** `/api/users/register`
- **Método:** POST
- **Corpo da Requisição (JSON):**

```json
{
  "login": "leofill",
  "password": "123456"
}
```

-- **Resposta (JSON):**

```json
{
  "message": "User created!"
}
```

### Realizar o login:

- **Endpoint:** `/api/users/login`
- **Método:** POST
- **Corpo da Requisição (JSON):**

```json
{
  "login": "leofill",
  "password": "123456"
}
```

-- **Resposta (JSON):**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6Imxlb2ZpbGxzcyIsImlhdCI6MTY5NTY2MTYyOSwiZXhwIjoxNjk1NjY1MjI5fQ.jyt97f3wMT20Aczz1y6wrybyIlaGVEhzcUCroyqmR50"
}
```

### Listar todos os Cards cadastrados:

- **Endpoint:** `/api/cards`
- **Método:** GET
- **Parâmetros da URL:** Nenhum
- **Cabeçalho da Solicitação:** Authorization: Bearer SEU_TOKEN_AQUI
- **Corpo da Requisição (JSON):**

```json
    sem corpo
```

-- **Resposta (JSON):**

```json
[
  {
    "id": "3965d86a-93c9-4685-9de7-83cee20d2661",
    "titulo": "Primeiro album da Lady Gaga",
    "conteudo": "Primeiro album da Lady Gaga",
    "lista": "musicas internacionais",
    "createdAt": "2023-09-25T17:07:41.376Z",
    "updatedAt": "2023-09-25T17:07:41.376Z"
  }
]
```

### Criar um Card:

- **Endpoint:** `/api/cards`
- **Método:** POST
- **Cabeçalho da Solicitação:** Authorization: Bearer SEU_TOKEN_AQUI
- **Corpo da Requisição (JSON):**

```json
{
  "titulo": "Primeiro album da Lady Gaga",
  "conteudo": "Primeiro album da Lady Gaga",
  "lista": "musicas internacionais"
}
```

-- **Resposta (JSON):**

```json
[
  {
    "id": "3965d86a-93c9-4685-9de7-83cee20d2661",
    "titulo": "Primeiro album da Lady Gaga",
    "conteudo": "Primeiro album da Lady Gaga",
    "lista": "musicas internacionais",
    "createdAt": "2023-09-25T17:07:41.376Z",
    "updatedAt": "2023-09-25T17:07:41.376Z"
  }
]
```

### Atualizar um Card:

- **Endpoint:** `/api/cards/:id`
- **Método:** PUT
- **Cabeçalho da Solicitação:** Authorization: Bearer SEU_TOKEN_AQUI
- **Parâmetros da URL:** id do card
- **Corpo da Requisição (JSON):**

```json
{
  "titulo": "The Fame",
  "conteudo": "Primeiro album da Lady Gaga",
  "lista": "musicas internacionais"
}
```

-- **Resposta (JSON):**

```json
{
  "id": "3965d86a-93c9-4685-9de7-83cee20d2661",
  "titulo": "The Fame",
  "conteudo": "Primeiro album da Lady Gaga",
  "lista": "musicas internacionais",
  "createdAt": "2023-09-25T17:07:41.376Z",
  "updatedAt": "2023-09-25T17:08:19.508Z"
}
```

### Deletar um Card:

- **Endpoint:** `/api/cards/:id`
- **Método:** DELETE
- **Cabeçalho da Solicitação:** Authorization: Bearer SEU_TOKEN_AQUI
- **Parâmetros da URL:** id do card
- **Corpo da Requisição (JSON):**

```json
sem corpo
```

-- **Resposta (JSON):**

```json
[
  {
    "id": "3965d86a-93c9-4685-9de7-83cee20d2661",
    "titulo": "Primeiro album da Lady Gaga",
    "conteudo": "Primeiro album da Lady Gaga",
    "lista": "musicas internacionais",
    "createdAt": "2023-09-25T17:07:41.376Z",
    "updatedAt": "2023-09-25T17:07:41.376Z"
  },
  {
    "id": "83cee20d2661-93c9-4685-9de7-83cee20d2661",
    "titulo": "Segundo album da Lady Gaga",
    "conteudo": "Segundo album da Lady Gaga",
    "lista": "musicas internacionais",
    "createdAt": "2023-09-25T17:07:41.376Z",
    "updatedAt": "2023-09-25T17:07:41.376Z"
  }
]
```
