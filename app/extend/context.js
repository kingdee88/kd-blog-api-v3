"use strict";
const validator = require('async-validator');
module.exports = {
    validate(rules, data) {
            new validator(rules).validate(data, (errors, fields) => {
                if (errors) {
                    this.throw(417, errors[0].message);
                }
            });
    }
};
