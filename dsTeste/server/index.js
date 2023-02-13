/*
Neste exemplo, estamos criando um servidor HTTP usando o Express e o Socket.IO. 
Quando um cliente se conecta ao servidor Socket.IO, 
o servidor começa a enviar um número aleatório a cada segundo para o cliente conectado.
Observe que, para enviar o número aleatório para o cliente, usamos o método socket.emit(), 
que envia uma mensagem para um único cliente específico. 
Neste caso, estamos enviando a mensagem com o nome numeroAleatorio para o cliente conectado.
Para receber e exibir o número aleatório na página index.html, você precisa implementar a 
lógica do cliente em app.js.
*/

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

app.get('/js/app.js', (req, res) => {
    res.type('text/javascript');
    res.sendFile(path.join(__dirname, '..', 'public', 'js', 'app.js'));
  });
  
app.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, '..', 'public', 'index.html');
    res.sendFile(filePath);
  });

io.on('connection', (socket) => {
  console.log('Um cliente se conectou');

  // Envia um número aleatório a cada segundo para o cliente conectado
  setInterval(() => {
    const randomNum = Math.floor(Math.random() * 100);
    socket.emit('numeroAleatorio', randomNum);
  }, 1000);
});

http.listen(3000, () => {
  console.log('O servidor está ouvindo na porta 3000');
});
