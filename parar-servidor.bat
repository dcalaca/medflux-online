@echo off
title Parar Servidor MedFlux
color 0C

echo.
echo ========================================
echo    PARANDO SERVIDOR MEDFLUX
echo ========================================
echo.

echo Procurando processos do servidor...
tasklist /FI "IMAGENAME eq node.exe" /FO TABLE

echo.
echo Parando processos do Node.js na porta 3000/3001...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :300') do (
    echo Parando processo: %%a
    taskkill /PID %%a /F 2>nul
)

echo.
echo Limpando cache...
if exist .next rmdir /s /q .next 2>nul

echo.
echo ========================================
echo    SERVIDOR PARADO
echo ========================================
echo.
echo Pressione qualquer tecla para sair...
pause >nul 