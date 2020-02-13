'use strict';

const list = require('./list');

// This function will find month by code
const findCode = (code, lang) => {
    const element = list.map((val, i) => {
        if (lang == 'id') {
            return val.indonesia;
        } else if (lang == 'en') {
            return val.english;
        } else {
            return val.indonesia;
        }
    })
    const find = element.find(e => e.code === code)

    return find;
}

// This function will parse date to string date
exports.parse = (params, language, reverse = false, separator = '') => {
    let split;
    if (reverse == true) {
        let a = params.split(' ');
        let b = a[0].split('-').reverse().join('-');
        let c = b + ' ' + a[1];
        split = c.split(' ');
    } else {
        split = params.split(' ');
    }

    let splOne = split[0];
    let date = splOne.split('-');
    let getDate = date[0];
    let getMonth = date[1];
    let getYear = date[2];
    let month = findCode(getMonth, language);
    let monthVar = '';

    if (month == null) {
        monthVar = 'not_valid';
    } else {
        monthVar = month.month;
    }

    const parsingResult = `${getDate + separator + ` ` + monthVar + ` ` + getYear}`;
    const result = monthVar == 'not_valid' ? 'Invalid Date.' : parsingResult;

    return result;
}