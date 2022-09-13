import { Viajes } from "../models/viajes.js"
import { Testimonial } from "../models/Testimoniales.js"

const paginaInicio = async (req, res) => {
    // consultar 3 viajes del modelo viaje

    //creando una problema

    const promiseDB = []

    promiseDB.push(Viajes.findAll({limit : 3}))
    promiseDB.push(Testimonial.findAll({limit : 3}))

    try {
        const resultado = await Promise.all(promiseDB)
        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes : resultado[0],
            testimoniales : resultado[1]
        })
    } catch (error) {
        console.log(error)
    }


   

}

const paginaNosotros = (req, res) =>{

    res.render('nosotros',{
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req,res)  => {
    
    //consultar base de datos
    const viajes = await Viajes.findAll();

    

    res.render('viajes',{
        pagina: 'Viajes',
        viajes
    })


    

}

//muestra el viaje por el parametro de la db slug
const paginaDetalleViaje = async (req, res) => {

    
    const { slug } = req.params

     try {
          const resultado = await Viajes.findOne( { where : {   slug  }})

          console.log(resultado)

          res.render('viaje',{
              pagina: 'Informacion Viaje',
              resultado,
              
          })

      } catch (error) {
          console.log(error)
      }


      

    
}

const paginaTestimoniales =  async (req,res) => {


    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        })

    } catch (error) {
        console.log(error)
    }


    
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}