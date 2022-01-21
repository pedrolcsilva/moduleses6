import express from 'express';
import birthdays from './modules/aniversariantes.js';
import setor from './modules/setor.js';
import alphabetical from './modules/ordenar.js';

const app = express();

const funcionarios = [
    {
     "matricula": 1,
     "nome": "Pedro Lucas De Castro Silva",
     "email": "pedrolucas443@gmail.com",
     "ramal": "985483545",
     "setor": "3",
     "dataN": new Date("2001-02-12")
    }, {
     "matricula": 2,
     "nome": "Roberto Carlos De Nobrega",
     "email": "robertimdapraça@gmail.com",
     "ramal": "948561788",
     "setor": "3",
     "dataN": new Date("1985-04-21")
    }, {
     "matricula": 3,
     "nome": "Pablo Escobar",
     "email": "pablito@gmail.com",
     "ramal": "984781218",
     "setor": "3",
     "dataN": new Date("1990-01-19")
    }, {
     "matricula": 4,
     "nome": "Pedro Henrique De Souza",
     "email": "phenrique321@gmail.com",
     "ramal": "985712548",
     "setor": "2",
     "dataN": new Date("1996-07-02")
    }, {
     "matricula": 5,
     "nome": "José Castro",
     "email": "jose321@gmail.com",
     "ramal": "989682354",
     "setor": "2",
     "dataN": new Date("1992-11-30")
    }, {
    "matricula": 6,
    "nome": "Paula Santos Drumond",
    "email": "paulinha133@gmail.com",
    "ramal": "988529635",
    "setor": "2",
    "dataN": new Date("1995-04-05")
    }, {
    "matricula": 7,
    "nome": "Ana Clara Vicentino",
    "email": "claraana@gmail.com",
    "ramal": "984569825",
    "setor": "2",
    "dataN": new Date("1998-04-19")
    }, {
    "matricula": 8,
    "nome": "Mirella Ferreira Junior",
    "email": "miferrei@gmail.com",
    "ramal": "982541365",
    "setor": "2",
    "dataN": new Date("1997-07-20")
}];

app.use(express.static('pages'));

app.get('/teste/:search/:esc', function(req, res) {
    req.headers.funcionarios;

    let funcSearch = []

    if(req.params.esc == "data" && req.params.search != 'a'){
        funcSearch = birthdays(req.params.search);
    }
    if(req.params.esc == "setor" && req.params.search != 'a'){
        funcSearch = setor(req.params.search);
    }

    console.log(funcSearch)
    if(funcSearch.length == 0 ){
       res.send("Não existem funcionários com essas especificações")
    }else{
      res.send( funcSearch );
     }

});

app.get('/alpha', alphabetical)

const server = app.listen(8000, () => { 
    console.log("http://localhost:8000");
});

const res = app.get('http://localhost:8000?' + funcionarios);

export default funcionarios;