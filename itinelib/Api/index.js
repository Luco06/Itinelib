const express = require('express');
const app = express();
const cors = require('cors');
const port = 3200;
const router = require('./routes/index'); 

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(router);

app.get('/', (req, res) => {
    res.json({message : "Welcome !"})
});

app.listen(port, () =>{
    console.log('Server is runing on port', port);
})