//http built-in module

const http = require('http');
const fs = require('fs');
const port = 3000; // between 3000 and 5000 are available

const server = http.createServer((request, response) => {
  const url = request.url;
  console.log(request.url);
  if (url === '/about') {
    return response.end('about page');
  }else if (url === '/contact') {
    fs.readFile('./public/contact.html', (error, data) => {
      if (error) {
        console.log(error);
        response.end('something is wrong');
      } else {
        response.writeHeader(200, { 'content-type': 'text/html' });
        response.write(data);
        response.end();
      }
    });
  }else if (url === '/whatever') {
    fs.readFile('./public/whatever.html', (error, data) => {
      if (error) {
        console.log(error);
        response.end('something is wrong');
      } else {
        response.writeHeader(200, { 'content-type': 'text/html' });
        response.write(data);
        response.end();
      }
    });
  } else {
    fs.readFile('./public/index.html', (error, data) => {
      if (error) {
        console.log(error);
        response.end('something is wrong');
      } else {
        response.writeHeader(200, { 'content-type': 'text/html' });
        response.write(data);
        response.end();
      }
    });
  }
});

server.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
