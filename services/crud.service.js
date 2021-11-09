const CrudError = require('../errors/crud.errors.js');
const ItemModel = require('../models/item.model.js');

class CrudService {
    async postItem({name, count = 1, price}) {
        try {
            if (!name || !price) {
                throw CrudError.badRequest('Required fields are not filled in.');
            }
            const checkItem = await ItemModel.findOne({name});
            if (checkItem) {
                throw CrudError.alreadyExists('Item already exists.');
            }
            const newItem = await ItemModel.create({name, count, price: `${price}$`});
            return newItem;
        } catch (error) {
            throw error;
        }
    }
    async getAll() {
        try {
            const items = await ItemModel.find();
            return items;
        } catch (error) {
            throw error;
        }
    }
    async updateItem(item) {
        try {
            if (!item._id) {
                throw CrudError.badRequest('ID is requied.');
            }
            const updatedPost = await ItemModel.findByIdAndUpdate(item._id, item, {new: true});
            return updatedPost;
        } catch (error) {
            throw error;
        }
    }
    async deleteItem({_id}) {
        try {
            if (!_id) {
                throw CrudError.badRequest('ID is requied.');
            }
            const deletedItem = await ItemModel.findByIdAndDelete(_id);
            return deletedItem;
        } catch (error) {
            throw error;
        }
    }
    async deleteAll() {
        try {
            const deletedItems = await ItemModel.deleteMany();
            return deletedItems;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CrudService();