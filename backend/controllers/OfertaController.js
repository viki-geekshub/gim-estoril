const Oferta = require('../models/Oferta.js');

const OfertaController = {
    getAll(req, res) {
        Oferta.find()
            .then(ofertas => res.send(ofertas))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'Hubo un problema al procesar su petición'
                })
            })
    },
    insert(req, res) {
        Oferta.create(req.body)
            .then(oferta => res.send(oferta))

            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'Hubo un problema al intentar añadir una nueva oferta'
                })
            })
    },
    update(req, res) {
        Oferta.create(req.body)
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(oferta => res.send(oferta))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'Hubo un problema al intentar modificar la oferta'
                })
            })
    },
    delete(req, res) {
        Oferta.findByIdAndDelete(req.params.id)
            .then(oferta => res.send(oferta))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'Hubo un problema al intentar eliminar la oferta'
                })
            })
    }
}

module.exports = OfertaController;