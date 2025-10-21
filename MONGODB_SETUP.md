# Instruções para MongoDB

## Opção 1: MongoDB Local

1. **Instale o MongoDB Community Server:**
   - Baixe de: https://www.mongodb.com/try/download/community
   - Execute o instalador
   - MongoDB será instalado em `C:\Program Files\MongoDB`

2. **Crie o diretório de dados:**
```bash
mkdir C:\data\db
```

3. **Inicie o MongoDB:**
```bash
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath "C:\data\db"
```

## Opção 2: MongoDB Atlas (Recomendado)

1. **Crie uma conta gratuita:**
   - Acesse: https://cloud.mongodb.com
   - Registre-se e crie um cluster gratuito

2. **Configure a conexão:**
   - Clique em "Connect" no seu cluster
   - Escolha "Connect your application"
   - Copie a string de conexão
   - Cole no arquivo `server/.env`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/techassist
```

## Opção 3: MongoDB Docker

```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## Testando a Conexão

Depois de configurar, teste com:
```bash
cd server
npm run dev
```

O servidor deve mostrar: "MongoDB conectado"
