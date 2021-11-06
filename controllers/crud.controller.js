const CrudService = require('../services/crud.service.js');

class CrudController {
    async postItem(req, res) {
        try {
            const item = await CrudService.postItem(req.body);
            return res.json(item);
        } catch (error) {
            console.log(error);
            res.status(400).json(error.message);
        }
    }
    async getAll(req, res) {
        try {
            const items = await CrudService.getAll();
            return res.json(items);
        } catch (error) {
            console.log(error);
        }
    }
    async updateItem(req, res) {
        try {
            const updatedItem = await CrudService.updateItem(req.body);
            return res.json(updatedItem);
        } catch (error) {
            console.log(error);
        }
    }
    async deleteItem(req, res) {
        try {
            const deletedItem = await CrudService.deleteItem(req.body);
            return res.json(deletedItem);
        } catch (error) {
            console.log(error);
        }
    }
    async deleteAll(req, res) {
        try {
            const deletedItems = await CrudService.deleteAll();
            return res.json(deletedItems);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new CrudController();