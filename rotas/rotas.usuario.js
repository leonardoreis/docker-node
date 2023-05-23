const express = require('express');
const router = express.Router();

const Ajv = require('ajv');
const schemas = require('../schemas/schemas.usuario.json');
const ajv = new Ajv();

const usuarios = []

ajv.addSchema(schemas.AddUser, 'AddUser');
ajv.addSchema(schemas.schema2, 'schema2');

router.get('/', (req, res) => {
    res.json({message: "show de bola, USUÁRIO!!!"})
});

router.post('/', (req, res) => {
    const valid = ajv.validate(AddUser, req.body);
    if (valid) {
        console.log("usuario válido")
    }
});

module.exports = router

