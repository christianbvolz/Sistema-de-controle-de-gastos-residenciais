# Sistema de Controle de Gastos Residenciais

## Descrição

Este projeto é um sistema completo de controle de gastos residenciais, desenvolvido com uma arquitetura de frontend e backend separados. O frontend utiliza React com TypeScript, enquanto o backend é construído com AdonisJS.

## Funcionalidades

### Frontend
- Interface de usuário intuitiva e responsiva
- Cadastro e visualização de usuários
- Registro de transações (despesas e receitas)
- Visualização de lista de transações
- Validação de dados de entrada em tempo real

### Backend
- API RESTful para gerenciamento de usuários e transações
- Autenticação e autorização de usuários
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
- MySQL para banco de dados
- Docker para containerização

## Pré-requisitos

- Node.js (versão 14.0.0 ou superior)
- npm (normalmente vem com Node.js)
- Docker e Docker Compose (para rodar o backend e banco de dados)

## Instalação e Configuração

### Backend

1. Navegue até o diretório do backend:
  cd Sistema-de-controle-de-gastos-residenciais/backend


2. Copie o arquivo de ambiente de exemplo e configure as variáveis:
  cp .env.example .env


3. Instale as dependências:

  npm install


4. Inicie os containers Docker:
  docker-compose up -d


5. Execute as migrações do banco de dados:
node ace migration:run

6. Inicie o servidor de desenvolvimento:
npm run dev


O backend estará rodando em `http://localhost:3333`.

### Frontend

1. Navegue até o diretório do frontend:
cd Sistema-de-controle-de-gastos-residenciais/frontend

2. Instale as dependências:
npm install

3. Copie o arquivo de ambiente de exemplo e configure as variáveis:
cp .env.example .env

4. Inicie o servidor de desenvolvimento:
npm run dev

O frontend estará disponível em `http://localhost:5173`.

## Uso

Após iniciar tanto o backend quanto o frontend, você pode acessar a aplicação através do navegador. 

1. Cadastre um novo usuário através do formulário de cadastro.
2. Faça login com o usuário criado.
3. Use o formulário de transações para adicionar novas despesas ou receitas.
4. Visualize a lista de transações na página principal.

## Estrutura do Projeto


├── backend/
│   ├── app/
│   │   ├── Controllers/
│   │   ├── Models/
│   │   └── Validators/
│   ├── config/
│   ├── database/
│   │   └── migrations/
│   ├── start/
│   └── docker-compose.yml
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── validations/
│   ├── public/
│   └── index.html
└── README.md

## Contato

Se você tiver alguma dúvida, sinta-se à vontade para entrar em contato:

- Christian Volz - [christianbvolz@gmail.com](mailto:christianbvolz@gmail.com)