#!/bin/bash

echo "🚀 Iniciando TechAssist Landing + Backend..."

# Verifica se o MongoDB está rodando (Windows)
echo "📋 Verificando MongoDB..."

# Para Windows, vamos tentar conectar diretamente
# Se estiver usando MongoDB local, certifique-se de que está rodando
# mongod --dbpath "C:\data\db"

echo "📡 Iniciando servidor backend..."
cd server
npm run dev &
BACKEND_PID=$!

echo "🎨 Iniciando frontend..."
cd ..
npm run dev &
FRONTEND_PID=$!

echo "✅ Aplicação rodando!"
echo "📱 Frontend: http://localhost:5173"
echo "🔧 Backend: http://localhost:3001"
echo "❤️ Health Check: http://localhost:3001/api/health"

# Aguarda interrupção
wait
