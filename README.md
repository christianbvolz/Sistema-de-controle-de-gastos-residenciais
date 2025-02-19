# Sistema de Controle de Gastos Residenciais

## Descrição

Este projeto é um sistema completo de controle de gastos residenciais, desenvolvido com uma arquitetura de frontend e backend separados. O frontend utiliza React com TypeScript, enquanto o backend é construído com AdonisJS com lucid e banco de dados MySQL.

## Funcionalidades

### Frontend

- Cadastro e visualização de usuários
- Registro de transações (despesas e receitas)
- Visualização de lista de transações
- Validação de dados de entrada em tempo real

### Backend

- API REST para gerenciamento de usuários e transações
- Persistência de dados em banco MySQL
- Validações de regras de negócio

## Tecnologias Utilizadas

### Frontend

- React
- TypeScript
- Vite (para build e desenvolvimento)
- Context API para gerenciamento de estado
- Axios para requisições HTTP

### Backend

- AdonisJS
- TypeScript
- Lucid
- MySQL para banco de dados
- Docker para containerização

## Pré-requisitos

- Node.js (versão 22.0.0 ou superior)
- npm (normalmente vem com Node.js)
- MySQL ou Docker e Docker Compose (para rodar o banco de dados)

## Instalação e Configuração

### Backend

1. Navegue até o diretório do backend:

```bash
cd backend
```

2. Copie o arquivo de ambiente de exemplo e configure as variáveis:

```bash
cp .env.example .env
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie docker-compose:

```bash
docker-compose up -d
```

5. Execute as migrações do banco de dados:

```bash
node ace migration:run
```

6. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O backend estará rodando em `http://localhost:3333`.

### Frontend

1. Navegue até o diretório do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Copie o arquivo de ambiente de exemplo e configure as variáveis:

```bash
cp .env.example .env
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O frontend estará disponível em `http://localhost:5173`.

## Uso

Após iniciar tanto o backend quanto o frontend, você pode acessar a aplicação através do navegador.

1. Cadastre um novo usuário através do formulário de cadastro.
2. Use o formulário de transações para adicionar novas despesas ou receitas.
3. Visualize a lista de usuários na página principal.
4. Visualize a lista de transações na página de transações.

## Estrutura do Projeto

```
├── backend/
│ ├── app/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── services/
│ │ └── validators/
│ ├── config/
│ ├── database/
│ │ └── migrations/
│ ├── start/
│ │ └── routes.ts
│ ├── .env
│ └── docker-compose.yml
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ │ └──requests.ts
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ ├── types/
│ │ └── validations/
│ │ ├── App.tsx
│ │ └── main.tsx
│ └── .env
│
└── README.md
```

## Contato

Se você tiver alguma dúvida, sinta-se à vontade para entrar em contato:

- Christian Volz - [christianbvolz@gmail.com](mailto:christianbvolz@gmail.com)
