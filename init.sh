#!/bin/sh
# Instalar dependências
npm install

# Iniciar o servidor Node.js
node server.js &

# Manter o container rodando
tail -f /dev/null