const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const MENSAGENS_PATH = './mensagens.json';

// Função para garantir que o arquivo JSON seja válido
function readMensagens() {
  if (fs.existsSync(MENSAGENS_PATH)) {
    try {
      const data = fs.readFileSync(MENSAGENS_PATH, 'utf8');
      return JSON.parse(data);  // Retorna as mensagens como um array
    } catch (error) {
      console.error("Erro ao ler o arquivo:", error);
      return [];  // Retorna um array vazio caso ocorra erro na leitura
    }
  } else {
    return [];  // Se o arquivo não existir, retorna um array vazio
  }
}

app.post('/api/mensagem', (req, res) => {
  const novaMensagem = req.body;
  if (!novaMensagem.nome || !novaMensagem.mensagem) {
    return res.status(400).json({ erro: 'Campos obrigatórios' });
  }

  let mensagens = readMensagens();
  mensagens.push(novaMensagem);

  fs.writeFileSync(MENSAGENS_PATH, JSON.stringify(mensagens, null, 2));
  res.json({ status: 'ok' });
});

app.get('/api/mensagens', (req, res) => {
  let mensagens = readMensagens();
  res.json(mensagens);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
