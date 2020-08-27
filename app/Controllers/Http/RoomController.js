'use strict'
const Room = use('App/Models/Room');

class RoomController {

    /**
     * Ruta de prueba
     */
    async index({ request, response }) {
        try {

            const room = await Room
                .query()
                .where('status', 1)
                .with('Messages')
                .fetch()

            return response.send({ ok: true, mensaje: "Data fetch", data: room });

        } catch (error) {
            console.log(error)
            return response.status(400).send({ ok: false, mensaje: "Data not fetch" });
        }  
    }
}

module.exports = RoomController
