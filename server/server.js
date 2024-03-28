const express = require('express');
const app= express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const server = app.listen(1000, () => {
    console.log('server is running on ' + server.address().port);
});