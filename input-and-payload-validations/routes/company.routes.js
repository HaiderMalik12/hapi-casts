const CompanyController = require('../controllers/company.controller');
const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.string().required(),
    city: Joi.string().optional(),
    address: Joi.string().optional(),
});

module.exports = [
    {
        path: '/api/companies',
        method: 'POST',
        handler: CompanyController.create,
        config: {
            validate: {
                payload: schema
            }
        }
    },
    {
        path: '/api/companies',
        method: 'GET',
        handler: CompanyController.find
    },
    {
        path: '/api/companies/{id}',
        method: 'GET',
        handler: CompanyController.findOne,
        config:{
            validate:{
                params: Joi.object().keys({
                    id: Joi.string().required()
                })
            }
        }
    },
    {
        path: '/api/companies/{id}',
        method: 'DELETE',
        handler: CompanyController.delete,
        config:{
            validate:{
                params: Joi.object().keys({
                    id: Joi.string().required()
                })
            }
        }
    },
    {
        path: '/api/companies/{id}',
        method: 'PUT',
        handler: CompanyController.update,
        config:{
            validate:{
                params: Joi.object().keys({
                    id: Joi.string().required()
                })
            }
        }
    }
];