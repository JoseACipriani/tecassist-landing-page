@echo off
echo 🚀 Iniciando TechAssist Landing + Backend...

echo 📋 Verificando MongoDB...
echo Para MongoDB local, certifique-se de que está rodando:
echo mongod --dbpath "C:\data\db"
echo.

echo 📡 Iniciando serviços...
echo Frontend: http://localhost:5173
echo Backend: http://localhost:3001
echo Health Check: http://localhost:3001/api/health
echo.

start "Backend" cmd /k "cd server && npm run dev"
start "Frontend" cmd /k "npm run dev"

echo ✅ Aplicação iniciada!
echo Pressione qualquer tecla para fechar este terminal...
pause > nul
