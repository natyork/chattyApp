// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('node-uuid');

// Set the port to 4000
const PORT = 4000;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Send data object to each connected client
wss.broadcast = function broadcast( type, info) {
  wss.clients.forEach(function each(client) {
    client.send(JSON.stringify({type: type, info: info}));
  });
};

function userConnected() {
  usersOnline += 1;
  wss.broadcast({
    type: 'userCount',
    info: {  
      usersOnline: usersOnline
    }
  });
}

function userDisconnected() {
  // TIP: You can refactor this into a separate function
  // userDisconnected() 

  console.log('Client disconnected');
  usersOnline -= 1;

  // Call broadcast with usercount object
  wss.broadcast({
    type: 'userCount',
    info: {
      usersOnline: usersOnline
    }
  });
}
    
// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
let usersOnline = 0;
wss.on('connection', (ws) => {
  console.log('Client connected');
  

  // Call broadcast with usercount object
  // TIP: You can refactor this into a separate function
  userConnected() 


  ws.on('message', function incoming(newCF) {
    let chatFields = JSON.parse(newCF);
    chatFields.info.id = uuid.v1();


    if (chatFields.type === 'postMessage'){
    chatFields.type = 'incomingMessage'; // props for remembering to change the message name
    }

    if (chatFields.type === 'postNotification'){
    chatFields.type = 'incomingNotification';
    }

    // Call broadcast with chatFields object
    wss.broadcast(chatFields);
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', userDisconnected);
});

