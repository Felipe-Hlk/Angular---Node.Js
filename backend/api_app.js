const express = require('express');

const api_app = express();

api_app.use((_req, res, next) => {
  
  res.setHeader("Access-Control-Allow-Origin", "*"); //cabeçalho compreendido pelo navegador
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Header",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

api_app.use ("/api/posts", (_req, res, _next) => {
    const posts = [
        {
            id: "001", 
            title: " First server-side post",
            content:"this's coming from the server"
        },
        {
            id: "002", 
            title: " Second server-side post",
            content:"this's coming from the server!"
        }
    ];
    res.status(200).json({
        message: 'Posts fetched succesfully!',
        posts: posts
    });

});

module.exports = api_app;