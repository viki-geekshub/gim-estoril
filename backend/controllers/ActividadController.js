import Actividad from '../models/Actividad.js';

const ActividadController = {
    getAll(req, res) {
        Actividad.find()
            .then(actividades => res.send(actividades))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'Hubo un problema al procesar su petición'
                })
            })
    },
    insert(req, res) {
        Actividad.create(req.body)
            .then(actividad => res.send(actividad))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'Hubo un problema al intentar añadir una nueva actividad'
                })
            })
    },
    update(req, res) {
        Actividad.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(actividad => res.send(actividad))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'Hubo un problema al intentar modificar la actividad'
                })
            })
    },
    delete(req, res) {
        Actividad.findByIdAndDelete(req.params.id)
            .then(actividad => res.send(actividad))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'Hubo un problema al intentar eliminar la actividad'
                })
            })
    }
}

export default ActividadController