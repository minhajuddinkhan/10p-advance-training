const Joi = require('@hapi/joi');

const userSchema = Joi.object().keys({
  firstName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  lastName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object().keys({
  email: Joi.string().email(),
  password: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
});

module.exports = { userSchema, loginSchema };
