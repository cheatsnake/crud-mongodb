const CrudService = require('../services/crud.service.js');

class CrudController {
    async postItem(req, res, next) {
        try {
            const item = await CrudService.postItem(req.body);
            return res.json(item);
        } catch (error) {
            next(error);
        }
    }
    async getAll(req, res, next) {
        try {
            const items = await CrudService.getAll();
            return res.json(items);
        } catch (error) {
            next(error);
        }
    }
    async updateItem(req, res, next) {
        try {
            const updatedItem = await CrudService.updateItem(req.body);
            return res.json(updatedItem);
        } catch (error) {
            next(error);
        }
    }
    async deleteItem(req, res, next) {
        try {
            const deletedItem = await CrudService.deleteItem(req.body);
            return res.json(deletedItem);
        } catch (error) {
            next(error);
        }
    }
    async deleteAll(req, res, next) {
        try {
            const deletedItems = await CrudService.deleteAll();
            return res.json(deletedItems);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CrudController();