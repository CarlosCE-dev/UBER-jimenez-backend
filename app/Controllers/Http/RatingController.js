'use strict'
const Rating = use('App/Models/Rating');

class RatingController {

    // Ajustar todos los mensajes que se regresa al frontend segunda la ruta

    //TODO: Obtener ratings de un cliente
    async getRating({ response, params }) {
        try {
            // RECIBIR EN LAS PARAMS EL USUARIO DEL CUAL SE QUIERE OBTENER CALIFICACION

            // OBTENER RATINGS DE UN USUARIO 

            /* return object {
                Average: int
                Ratings: array of the user ratings with the person that made the rating
            } */

            return response.send({ ok: true, mensaje: "Data fetch", data: ratings });

        } catch (error) {
            console.log(error)
            return response.status(400).send({ ok: false, mensaje: "Data not fetch" });
        }  
    }

    //TODO: Calificar usuario
    async setRating({ response, params, request}) {
        try {
            // RECIBIR EN LAS PARAMS EL USUARIO A CALIFICAR
            // RECIBIR EN LA BODY LOS DATOS NECESARIOS PARA GUARDAR UNA CALIFICACION

            // GUARDAR EL RATING 

            /* return status 200 */

            return response.send({ ok: true, mensaje: "Data fetch" });

        } catch (error) {
            console.log(error)
            return response.status(400).send({ ok: false, mensaje: "Data not fetch" });
        }  
    }

}

module.exports = RatingController
