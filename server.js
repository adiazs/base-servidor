const express = require('express')
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.port || 3000;


app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/parciales');

//Express hbs engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send('Hola Mundo')
    // let salida = {
    //     nombre: 'Anthony',
    //     edad: 30,
    //     url: req.url
    // };
    //res.send(salida);

    res.render('home', {
        nombre: 'anthony díaz sánchez',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

// app.get('/data', (req, res) => {

//     res.send('Hola Data')

// });

app.listen(port, () => {
    console.log(`Escuchando peticiones por el puerto ${port}`);
})