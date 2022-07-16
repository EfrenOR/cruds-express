const express = require('express')
const {selectpeople, deletePeople, insertPerson} = require('../controllers/crud_controller.js')

const Router = express.Router();

//MIS RUTAS

Router.get('/selectpeople', selectpeople);
Router.delete('/deletepeople/:id', deletePeople)
Router.post('/insertperson', insertPerson)

module.exports = Router;
