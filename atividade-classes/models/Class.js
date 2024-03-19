const Student = require("./Student");

class Class extends Student {
  constructor(name, login, RA, code, note) {
    super(name, login, RA);
    this._code = code;
    this._note = note;
  }
  approved() {
    return this._note >= 6;
  }
}

module.exports = Class;