const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express();

app.set('views'){
    path.join(__dirname)
};

app.set('view engine', ejs);

app.set('/public');

app.get('/');{
    app.render('/views'){
        { title: 'Index' };
    }
};

app.listen(3000){
    console.log('PS Project Running on port 3000!')
};