# 🚀 Setup Completo - TechAssist Landing

## ⚡ Setup Rápido com Docker (Recomendado)

1. **Pré-requisitos:**
   - Docker e Docker Compose instalados
   - Node.js 18+

2. **Instalação:**
```bash
# Clone ou navegue até o projeto
cd techassist-landing

# Instale dependências
npm install
cd server && npm install && cd ..

# Inicie MongoDB com Docker
docker-compose up -d

# Aguarde alguns segundos e inicie a aplicação
npm run dev:full
```

3. **URLs:**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3001
   - MongoDB Admin: http://localhost:8081

## 🔧 Setup Manual

### MongoDB Local

1. **Instale MongoDB:**
   - Windows: https://www.mongodb.com/try/download/community
   - Crie pasta: `mkdir C:\data\db`
   - Inicie: `mongod --dbpath "C:\data\db"`

2. **Configure .env:**
```env
# server/.env
MONGODB_URI=mongodb://localhost:27017/techassist
```

### MongoDB Atlas (Produção)

1. **Crie conta:** https://cloud.mongodb.com
2. **Configure .env:**
```env
# server/.env  
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/techassist
```

## 📱 Testando

1. **Health Check:**
   - http://localhost:3001/api/health

2. **Formulário:**
   - Acesse http://localhost:5173
   - Vá para seção "Contato"
   - Preencha e envie o formulário

3. **Banco de Dados:**
   - Com Docker: http://localhost:8081
   - Usuário: admin / Senha: password123

## 🐛 Resolução de Problemas

### Erro de Conexão MongoDB
```bash
# Verifique se MongoDB está rodando
docker ps

# Reinicie se necessário
docker-compose restart mongodb
```

### Porta em Uso
```bash
# Verifique processos nas portas
netstat -ano | findstr :3001
netstat -ano | findstr :5173

# Mate processo se necessário
taskkill /PID <PID> /F
```

### Erro de CORS
- Verifique se FRONTEND_URL está correto no server/.env
- Reinicie o backend após mudanças no .env

## 📊 Estrutura de Dados

O formulário salvará no MongoDB:
```json
{
  "_id": "ObjectId",
  "name": "João Silva",
  "phone": "(11) 99999-9999", 
  "email": "joao@email.com",
  "status": "novo",
  "createdAt": "2023-09-05T..."
}
```

## 🚀 Deploy

### Backend (Heroku/Railway)
```bash
# Configure variáveis de ambiente
MONGODB_URI=mongodb+srv://...
PORT=3001
FRONTEND_URL=https://seu-dominio.com
NODE_ENV=production
```

### Frontend (Vercel/Netlify)
```bash
# Configure variável
VITE_API_URL=https://seu-backend.herokuapp.com/api
```

## ✅ Checklist Final

- [ ] MongoDB rodando
- [ ] Backend conectado (health check OK)
- [ ] Frontend carregando
- [ ] Formulário funcionando
- [ ] Dados salvando no banco
- [ ] Validações funcionando
- [ ] CORS configurado
