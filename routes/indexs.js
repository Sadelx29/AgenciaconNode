import  express  from "express";
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes, 
    paginaDetalleViaje
 } 
    from "../controllers/paginasController.js";
import {
     guardarTestimonial 
} from "../controllers/guardartestimoniales.js";
//poner a funcionar las roueters
const roueters = express()

roueters.get('/', paginaInicio)


roueters.get('/nosotros',paginaNosotros)
 

roueters.get('/viajes', paginaViajes)

roueters.get('/viajes/:slug', paginaDetalleViaje)

roueters.get('/testimoniales', paginaTestimoniales)
    

roueters.post('/testimoniales', guardarTestimonial)


export default roueters;