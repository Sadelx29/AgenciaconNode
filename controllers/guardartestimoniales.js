import { Testimonial } from "../models/Testimoniales.js";
const guardarTestimonial = async (req,res) => {

    //validar form

    const { nombre, correo, mensaje} = req.body

    const errores = [];

    if(nombre === ''){
        errores.push({mensaje : 'El nombre esta vacio'})
    }
    if(correo === ''){
        errores.push({mensaje : 'El correo esta vacio'})
    }
    if(mensaje === ''){
        errores.push({mensaje : 'El mensaje esta vacio'})
    }

    if(errores.length > 0) {
    //consultar testimoniales
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{

        //almancenar en db

    
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })

            // despues de que se cumpla el proceso me reenviara a testimoniales
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }

    }

}


export {
    guardarTestimonial
}