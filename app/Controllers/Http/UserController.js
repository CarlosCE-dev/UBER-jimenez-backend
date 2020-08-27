'use strict'
const User = use('App/Models/User');

class UserController {

    /**
     * Ruta de prueba
     */
    async index({ request, response }) {
        try {

            const user = await User
                .query()
                .where('status', 1)
                .with('Role.Permission')
                .fetch()

            return response.send({ ok: true, mensaje: "Data fetch", data: user });

        } catch (error) {
            console.log(error)
            return response.status(400).send({ ok: false, mensaje: "Data not fetch" });
        }  
    }
}

module.exports = UserController
