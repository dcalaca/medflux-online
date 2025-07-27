@echo off
echo ========================================
echo    Iniciando Servidor MedFlux
echo ========================================
echo.

echo Limpando cache...
if exist .next rmdir /s /q .next

echo.
echo Instalando dependencias...
call pnpm install

echo.
echo ========================================
echo    Iniciando Servidor...
echo ========================================
echo.

call pnpm dev

echo.
echo ========================================
echo    Servidor finalizado
echo ========================================
pause 