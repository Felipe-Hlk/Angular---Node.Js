const express = require('express');
const bodyParser = require('body-parser');


const api_app = express();

api_app.use(bodyParser.json());
api_app.use(bodyParser.urlencoded({ extended: false}));

api_app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});;

api_app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully"
  });


});

api_app.use ("/api/posts", (req, res, next) => {
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