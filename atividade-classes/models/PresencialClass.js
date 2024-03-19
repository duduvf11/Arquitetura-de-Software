const Class = require("./Class");

class PresencialClass extends Class {
    constructor(nome, login, RA, code, note, frequence) {
        super(nome, login, RA, code, note);
        this._frequence =  frequence;    
    }
    approved() {
        return this._frequence >= 75;
    }
}

module.exports = PresencialClass;