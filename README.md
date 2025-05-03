# 📘 Documentação da API - Mural Interativo

## 📌 Visão Geral

Esta API faz parte de uma aplicação interativa utilizada em uma apresentação dos cursos de Sistemas de Informação, ADS e Ciência da Computação. Ela permite que os usuários enviem e visualizem mensagens em tempo real por meio de um mural colaborativo.

A API foi desenvolvida em **Node.js** com o framework **Express**, utilizando um **arquivo JSON** para armazenar as mensagens temporariamente.

---

## 🚀 Endpoints

### 1. `GET /messages`

**Descrição**: Retorna todas as mensagens cadastradas no mural.

**Resposta de Sucesso (200 OK):**
```json
[
  {
    "nome": "João",
    "mensagem": "Estou curtindo a apresentação!"
  },
  {
    "nome": "Maria",
    "mensagem": "Gostei da ideia do mural interativo!"
  }
]

### 2. `POST /messages`

**Descrição**: Envia uma nova mensagem para o mural.

**Corpo da Requisição(JSON):**
```json
{
  "nome": "Seu Nome",
  "mensagem": "Sua mensagem aqui"
}