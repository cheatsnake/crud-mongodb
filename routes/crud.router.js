const Router = require('express');
const CrudController = require('../controllers/crud.controller.js');

const crudRouter = new Router();

crudRouter.post('/new', CrudController.postItem);
crudRouter.get('/items', CrudController.getAll);
crudRouter.put('/item', CrudController.updateItem);
crudRouter.delete('/item', CrudController.deleteItem);
crudRouter.delete('/items', CrudController.deleteAll);

module.exports = crudRouter;