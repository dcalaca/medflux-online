@echo off
title MedFlux Server
color 0A

echo.
echo ========================================
echo         MEDFLUX SERVER
echo ========================================
echo.

echo [1/4] Verificando diretorio...
cd /d "%~dp0"
echo Diretorio atual: %CD%
echo.

echo [2/4] Verificando dependencias...
call pnpm install
if %errorlevel% neq 0 (
    echo ERRO: Falha ao instalar dependencias
    pause
    exit /b 1
)
echo.

echo [3/4] Limpando cache (se necessario)...
if exist .next (
    echo Removendo cache anterior...
    rmdir /s /q .next 2>nul
)
echo.

echo [4/4] Iniciando servidor...
echo ========================================
echo    SERVIDOR INICIANDO...
echo ========================================
echo.
echo Aguarde, o servidor esta sendo iniciado...
echo Quando aparecer "Ready", o servidor estara funcionando
echo.
echo Para parar o servidor: Ctrl+C
echo Para acessar: http://localhost:3000 (ou 3001)
echo.

call pnpm dev

echo.
echo ========================================
echo    SERVIDOR FINALIZADO
echo ========================================
echo.
echo Pressione qualquer tecla para sair...
pause >nul 