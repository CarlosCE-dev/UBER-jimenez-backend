'use strict'
const Message = use('App/Models/Message');

class MessageController {

    /**
     * Ruta de prueba
     */
    async index({ request, response }) {
        try {

            const messages = await Message.pick(1);
            console.log(messages);
            
            return response.send({ ok: true, mensaje: "Data fetch", data: messages });

        } catch (error) {
            console.log(error)
            return response.status(400).send({ ok: false, mensaje: "Data not fetch" });
        }  
    }
}

module.exports = MessageController
