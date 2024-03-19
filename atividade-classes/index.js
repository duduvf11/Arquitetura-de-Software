const Student = require("./model/Student");
const Class = require("./model/Class");
const PresencialClass = require("./model/PresencialClass");
const http = require('http');

let student = new Student('Eduardo', 'eduardo', '2525259');
let classStudent = new Class('Eduardo', 'eduardo', '2525259', 'AS64B', '8');
let presencialClass = new PresencialClass('Eduardo', 'eduardo', '2525259', 'AS64B', '8', '90');