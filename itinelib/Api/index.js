
const express = require('express');
const app = express();
const port = 3200;

app.use(express.json());

app.listen(port, () =>{
    console.log('Server is runing on port', port);
})