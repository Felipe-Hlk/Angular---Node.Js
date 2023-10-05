const express = require('express');

const app = express();

app.use ("/api/posts", (req, res, next) => {
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

module.exports = app;