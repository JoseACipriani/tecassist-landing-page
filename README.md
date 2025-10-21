# TechAssist Landing Page

Landing page moderna e responsiva para a TechAssist, com sistema completo de formulário de contato integrado ao MongoDB.

## 🚀 Funcionalidades

- ✅ Landing page responsiva com React + TypeScript
- ✅ Design moderno com Tailwind CSS e Shadcn/UI
- ✅ Formulário de contato funcional
- ✅ Backend Node.js + Express + MongoDB
- ✅ Validação completa de dados
- ✅ Sistema de leads com status
- ✅ Tema claro/escuro
- ✅ Animações suaves

## 🛠️ Tecnologias

### Frontend
- React 18 + TypeScript
- Vite
- Tailwind CSS
- Shadcn/UI
- React Router
- React Hook Form

### Backend  
- Node.js + Express
- MongoDB com Mongoose
- Validação com express-validator
- CORS e Helmet para segurança

## 📋 Pré-requisitos

- Node.js 18+
- MongoDB (local ou Atlas)
- npm ou yarn

## 🚀 Instalação e Execução

### Opção 1: Script Automático (Windows)
```bash
# Execute o arquivo start-dev.bat
start-dev.bat
```

### Opção 2: Manual

1. **Instale as dependências:**
```bash
# Frontend
npm install

# Backend
cd server
npm install
cd ..
```

2. **Configure o MongoDB:**
```bash
# Para MongoDB local (certifique-se de que está rodando)
mongod --dbpath "C:\data\db"

# Ou use MongoDB Atlas e configure a string de conexão
```

3. **Configure as variáveis de ambiente:**
```bash
# .env (raiz do projeto)
VITE_API_URL=http://localhost:3001/api

# server/.env
MONGODB_URI=mongodb://localhost:27017/techassist
PORT=3001
FRONTEND_URL=http://localhost:5173
```

4. **Inicie os serviços:**
```bash
# Opção A: Ambos simultaneamente
npm run dev:full

# Opção B: Separadamente
npm run server    # Terminal 1 - Backend
npm run dev       # Terminal 2 - Frontend
```

## 📡 Endpoints da API

- `POST /api/contacts` - Criar contato
- `GET /api/contacts` - Listar contatos
- `GET /api/contacts/:id` - Buscar contato
- `PUT /api/contacts/:id/status` - Atualizar status
- `GET /api/health` - Health check

## 📊 Estrutura do Banco

```javascript
// Coleção: contacts
{
  name: String,        // Nome completo
  phone: String,       // (11) 99999-9999
  email: String,       // Email único
  status: String,      // novo|contatado|proposta_enviada|fechado
  createdAt: Date      // Data de criação
}
```

## 🎯 URLs da Aplicação

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3001
- **Health Check**: http://localhost:3001/api/health

## Project info

**URL**: https://lovable.dev/projects/a1495af3-5f84-40db-9ea8-621bbafa7e3e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a1495af3-5f84-40db-9ea8-621bbafa7e3e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a1495af3-5f84-40db-9ea8-621bbafa7e3e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
