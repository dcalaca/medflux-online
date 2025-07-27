@echo off
echo ========================================
echo   DEPLOY MEDFLUX PARA VERCEL
echo ========================================
echo.

echo 1. Limpando cache e node_modules...
if exist .next rmdir /s /q .next
if exist node_modules rmdir /s /q node_modules

echo 2. Instalando dependencias...
npm install

echo 3. Fazendo build de teste...
npm run build

echo 4. Build concluido! Agora voce pode fazer deploy:
echo.
echo Opcoes de deploy:
echo 1. Via Vercel CLI (recomendado)
echo 2. Via GitHub (push para main)
echo 3. Via Vercel Dashboard (upload manual)
echo.
echo Para usar Vercel CLI:
echo npm install -g vercel
echo vercel --prod
echo.
pause 