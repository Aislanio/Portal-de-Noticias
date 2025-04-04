import noticias from "../database/database.js";

class NoticiaControllers {
    index(req,res) {
        res.json(noticias)
    }

    showId(req,res) {
        const id = req.params.id
    
        const mensagen = noticias.find( msg => msg.id == id);
        
        res.json(mensagen);
    }

    aleatorio(req,res) {
        let id = Math.floor(Math.random() * noticias.length);
        const mensagen = noticias.find(msg => msg.id == id)
    
        res.json(mensagen)
    }

    post(req,res) {
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
    }
    atualizar(req,res){
        const {titulo,texto,fonte} = req.body
        const id = req.params.id

        let index = noticias.findIndex(item => id == item.id);

        noticias[index] = {
            id: id,
            titulo:titulo,
            texto:texto,
            fonte:fonte
        }
        
        res.send('Noticia Atualizada')
    }

    delete(req,res){
        let id = req.params.id;
        let index = noticias.findIndex(item => id == item.id);
        noticias.splice(index,1);
        res.send('Noticia Apagada');
    }
}

export default new NoticiaControllers()