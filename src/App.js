import express,{Router} from 'express'
import noticias from './app/database/database.js';
const App = express();

App.use(express.json())

App.get('/',(req,res)=>{
    res.send('Hello Word')
});

App.get('/noticias/aleatorio',(req,res) =>{
    let id = Math.floor(Math.random() * noticias.length);
    const mensagen = noticias.find(msg => msg.id == id)

    res.json(mensagen)
})

App.get('/noticias',(req,res) =>{
    res.json(noticias)
})

App.get('/noticias/:id',(req,res) =>{
    const id = req.params.id

    const mensagen = noticias.find( msg => msg.id == id);
    
    res.json(mensagen);
})


//Post
App.post('/noticias',(req,res) =>{
 const {titulo,texto,fonte} = req.body
 
 const id = noticias.length + 1;

 const NewNoticia = {
    "id":id,
    "titulo":titulo,
    "texto":texto,
    "fonte":fonte
 }
 
 noticias.push(NewNoticia);
 res.send('Cadastro feito')
})

//Atualizar 









export default App