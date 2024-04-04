import express from 'express';

const server = express();

server.get('/', (_, res) => {
  return res.send('Hello, World!!!');
});

interface Teste {

}

export { server }; 