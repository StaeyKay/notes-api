import Joi from 'joi'

export const userValidator = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().alphanum().min(4).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(5).required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required()
})