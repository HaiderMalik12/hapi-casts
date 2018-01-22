const Company = require('../models/company.model');

module.exports = {

    create(req, reply) {
        if (!req.payload.name) {
            return reply({er: 'name is required field'}).code(400);
        }

        Company.create({
            name: req.payload.name,
            city: req.payload.city,
            address: req.payload.address
        }, (err, savedCompany) => {
            if (err) {
                return reply(err).code(500);
            }
            return reply.response(savedCompany);
        });
    },
    find(req, reply) {

        Company.find({}, (err, companies) => {
            if (err) {
                return reply(err).code(404);
            }
            return reply.response(companies);
        })
    },
    findOne(req, reply) {
        if (!req.params.id) {
            return reply({err: 'id is required param'}).code(400);
        }

        Company.findById(req.params.id, (err, company) => {

            if (err) {
                return reply(err).code(404);
            }
            return reply.response(company);

        })

    },
    update(req, reply) {
        if (!req.params.id) {
            return reply({err: 'id is required param'}).code(400);
        }
        let attributes = {};

        if (req.payload.name) {
            attributes.name = req.payload.name;
        }
        if (req.payload.city) {
            attributes.city = req.payload.city;
        }
        if (req.payload.address) {
            attributes.address = req.payload.address;
        }
        Company.findByIdAndUpdate(req.params.id, attributes, {new: true}, (err, company) => {
            if (err) {
                return reply(err).code(500);
            }
            return reply.response(company);
        })

    },
    delete(req, reply) {

        if (!req.params.id) {
            return reply({err: 'id is required param'}).code(400);
        }
        Company.findByIdAndRemove(req.params.id, (err, result) => {
            if (err) {
                return reply(err).code(500);
            }
            return reply.response({msg: `company has deleted with id ${req.params.id}`});
        })
    }

};