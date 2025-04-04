import { Router } from "express";
import noticaControllers from "./app/controllers/noticaControllers.js";

const routes = Router()

routes.get('/',(req,res)=>{
    res.send('Hello Word')
});

routes.get('/noticias/aleatorio',noticaControllers.aleatorio)

routes.get('/noticias',noticaControllers.index)

routes.get('/noticias/:id',noticaControllers.showId)

routes.post('/noticias',noticaControllers.post)

routes.put('/noticias/:id',noticaControllers.atualizar)
routes.delete('/noticias/:id',noticaControllers.delete);

export default routes