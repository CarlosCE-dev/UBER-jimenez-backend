'use strict'
const Message = use('App/Models/Message');

class MessageController {

    /**
     * Ruta de prueba
     */
    async index({ request, response }) {
        try {

            const message = await Message
            .query()
            .where('status', 1)
            .with('room', (builder) => {
                builder.where('status', 1)
            })
            .fetch()
            
            return response.send({ ok: true, mensaje: "Data fetch", data: message });

        } catch (error) {
            console.log(error)
            return response.status(400).send({ ok: false, mensaje: "Data not fetch" });
        }  
    }
}

module.exports = MessageController
