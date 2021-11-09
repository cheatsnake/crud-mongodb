const CrudError = require("../errors/crud.errors");

function errorHandler(err, req, res, next) {
    console.error(err);
    
    if (err instanceof CrudError) {
        res.status(err.code).json(err.message);
        return;
    }
    return res.status(500).json('Internal server error.');
} 

module.exports = errorHandler;