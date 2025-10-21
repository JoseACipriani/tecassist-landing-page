#!/bin/bash

echo "🚀 Testando configuração para deploy na Vercel..."

# Verificar se os arquivos necessários existem
echo "📁 Verificando arquivos de configuração..."

if [ -f "vercel.json" ]; then
    echo "✅ vercel.json encontrado"
else
    echo "❌ vercel.json não encontrado"
    exit 1
fi

if [ -f "package.json" ]; then
    echo "✅ package.json encontrado"
else
    echo "❌ package.json não encontrado"
    exit 1
fi

if [ -d "api" ]; then
    echo "✅ Pasta api/ encontrada"
else
    echo "❌ Pasta api/ não encontrada"
    exit 1
fi

# Verificar dependências
echo "📦 Verificando dependências..."

if grep -q "mongoose" package.json; then
    echo "✅ Mongoose encontrado no package.json"
else
    echo "❌ Mongoose não encontrado no package.json"
    exit 1
fi

# Testar build
echo "🔨 Testando build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build executado com sucesso"
else
    echo "❌ Erro no build"
    exit 1
fi

echo ""
echo "🎉 Configuração pronta para deploy na Vercel!"
echo ""
echo "Próximos passos:"
echo "1. Commit e push do código para o repositório Git"
echo "2. Importar projeto na Vercel"
echo "3. Configurar variáveis de ambiente (MONGODB_URI)"
echo "4. Deploy!"
echo ""
echo "Consulte VERCEL_DEPLOY.md para instruções detalhadas."
