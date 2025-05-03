FROM node:latest

WORKDIR /usr/src/app

# Inicializa e instala pacotes
RUN npm init -y && \
    npm install express cors body-parser

# Copia o código (ex: server.js)
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]