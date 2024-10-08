//importar o express
const express = require ('express');
const app = express ();
const porta = 8080;
const bodyParser = require ('body-parser');

// configurar o EJS como mecanismo de visualizaçao
app.set('view engine','ejs');  //vai entender que vou usar ejs
app.set('views',__dirname+'/views'); 

//configurar os arquivos da pasta public 
app.arguments(express.static('public'));

//configurar o procesamento de dados do froms
app.use(bodyParser.urlencoded({extended:true})); //fas a ponte entre os 2 arquivos
