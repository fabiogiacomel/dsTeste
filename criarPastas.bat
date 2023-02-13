@echo off
set /p projectname=Digite o nome do projeto: 

mkdir %projectname%
cd %projectname%

mkdir public
mkdir public\css
mkdir public\js
mkdir public\img
mkdir server

echo. > public\index.html
echo. > public\css\style.css
echo. > public\js\socket.io.js
echo. > public\js\app.js
echo. > server\index.js
echo. > package.json
echo. > package-lock.json

echo A estrutura de pastas para o projeto %projectname% foi criada com sucesso!
pause
