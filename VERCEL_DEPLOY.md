# Deploy na Vercel - TechAssist Landing

## Pré-requisitos

1. **Conta na Vercel**: Criar uma conta em [vercel.com](https://vercel.com)
2. **MongoDB Atlas**: Banco de dados MongoDB na nuvem
3. **Repositório Git**: Código deve estar em um repositório Git (GitHub, GitLab, etc.)

## Configuração do MongoDB Atlas

1. Acesse [MongoDB Atlas](https://cloud.mongodb.com/)
2. Crie um cluster gratuito
3. Configure um usuário de banco de dados
4. Adicione seu IP à whitelist (ou use 0.0.0.0/0 para qualquer IP)
5. Obtenha a string de conexão (URI)

## Passos para Deploy

### 1. Preparar o Repositório

Certifique-se que todos os arquivos estão commitados:
```bash
git add .
git commit -m "Preparando para deploy na Vercel"
git push origin main
```

### 2. Importar Projeto na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "New Project"
3. Importe seu repositório do GitHub/GitLab
4. Selecione o framework: **Vite**
5. Configure as seguintes opções:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 3. Configurar Variáveis de Ambiente

Na configuração do projeto na Vercel, adicione as seguintes variáveis de ambiente:

```
MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/techassist?retryWrites=true&w=majority
NODE_ENV=production
```

**Importante**: Substitua `usuario`, `senha` e `cluster` pelos valores do seu MongoDB Atlas.

### 4. Deploy

1. Clique em "Deploy"
2. Aguarde o build completar
3. Acesse o URL fornecido pela Vercel

## Estrutura do Projeto para Vercel

```
/
├── api/                    # Funções serverless
│   ├── health.js          # Health check
│   └── contacts.js        # API de contatos
├── src/                   # Código React
├── dist/                  # Build output (gerado)
├── vercel.json           # Configuração da Vercel
└── package.json          # Dependências
```

## APIs Disponíveis

Após o deploy, as seguintes APIs estarão disponíveis:

- `GET /api/health` - Verificação de saúde da API
- `POST /api/contacts` - Criar novo contato
- `GET /api/contacts` - Listar contatos

## Comandos Úteis

```bash
# Instalar dependências
npm install

# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Desenvolvimento com servidor
npm run dev:full
```

## Troubleshooting

### Erro de Conexão com MongoDB
- Verifique se a URI do MongoDB está correta
- Confirme que o IP está na whitelist
- Teste a conexão localmente primeiro

### Erro 404 nas Rotas
- Verifique se o arquivo `vercel.json` está configurado corretamente
- Confirme que as funções estão na pasta `/api`

### Erro de Build
- Execute `npm run build` localmente para identificar problemas
- Verifique se todas as dependências estão listadas no `package.json`

## Recursos Adicionais

- [Documentação da Vercel](https://vercel.com/docs)
- [Vercel + Vite](https://vercel.com/guides/deploying-vite-with-vercel)
- [MongoDB Atlas](https://docs.atlas.mongodb.com/)
