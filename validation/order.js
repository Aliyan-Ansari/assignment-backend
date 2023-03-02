const Joi = require('joi');

Joi.objectId = require('joi-objectid')(Joi);

function validateCreateorderPayload(body) {
    const schema = Joi.object({
        customerName: Joi.string().required(),
        amount: Joi.number().greater(0).required(),
        orderNumber: Joi.string().required(),
        description: Joi.string().required()
    }).required()

    return schema.validate(body);
}




module.exports.validateCreateorderPayload = validateCreateorderPayload;