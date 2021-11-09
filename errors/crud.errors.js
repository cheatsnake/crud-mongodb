class CrudError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }

    static badRequest(msg) {
        return new CrudError(400, msg);
    }

    static alreadyExists(msg) {
        return new CrudError(403, msg);
    }

    static internal(msg) {
        return new CrudError(500, msg);
    }
}

module.exports = CrudError;