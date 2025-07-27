@echo off
echo ========================================
echo    Diagnostico do Servidor MedFlux
echo ========================================
echo.

echo 1. Verificando se estamos no diretorio correto...
echo Diretorio atual: %CD%
echo.

echo 2. Verificando se o package.json existe...
if exist package.json (
    echo ✅ package.json encontrado
) else (
    echo ❌ package.json nao encontrado
    pause
    exit /b 1
)

echo 3. Verificando se o pnpm esta instalado...
pnpm --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ pnpm esta instalado
    pnpm --version
) else (
    echo ❌ pnpm nao esta instalado
    echo Instale o pnpm com: npm install -g pnpm
    pause
    exit /b 1
)

echo.
echo 4. Verificando dependencias...
pnpm install

echo.
echo 5. Tentando iniciar o servidor...
echo.
echo ========================================
echo    Iniciando Servidor...
echo ========================================
echo.

pnpm dev

echo.
echo ========================================
echo    Servidor finalizado
echo ========================================
pause 