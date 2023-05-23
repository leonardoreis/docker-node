const express = require('express');
const usuario = require('./rotas/rotas.usuario')

const app = express();

app.use('/usuario', usuario);


const PORT = 3000;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
    const url = req.url;
    const metodo = req.method;
    const detalhes = req.headers;
    const brownser = detalhes["sec-ch-ua"];

    res.json({message: "Página Princial"});
    console.log(`recebido: metodo: ${metodo}, url: ${url}, SO: ${detalhes["sec-ch-ua-platform"]} e BROWSER: ${brownser.substring(0, brownser.indexOf(";"))} `);
});

app.listen(PORT, HOST);


