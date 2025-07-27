@echo off
echo ========================================
echo    Iniciando Servidor MedFlux
echo ========================================
echo.

echo Verificando ambiente...
echo Diretorio atual: %CD%
echo.

echo Verificando dependencias...
call pnpm install

echo.
echo ========================================
echo    Iniciando Servidor...
echo ========================================
echo Aguarde, iniciando o servidor...
echo.

cd /d "%~dp0"
call pnpm dev

echo.
echo ========================================
echo    Servidor finalizado
echo ========================================
echo Pressione qualquer tecla para sair...
pause 