/*
Neste exemplo, estamos criando uma conexão Socket.IO com o servidor e definindo um listener de eventos 
para ouvir mensagens com o nome numeroAleatorio. Quando uma mensagem com esse nome é recebida, atualizamos
o conteúdo da div com o id dashboard para exibir o número aleatório recebido do servidor.
*/
const socket = io();

socket.on('numeroAleatorio', (num) => {
  document.getElementById('dashboard').textContent = `Número aleatório: ${num}`;
});
