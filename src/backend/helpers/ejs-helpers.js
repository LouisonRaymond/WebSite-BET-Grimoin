const showdown = require('showdown');
const getOr = require('lodash/fp/getOr');

function md(text) {
    converter = new showdown.Converter();
    return converter.makeHtml(text);
}

function get(object, path, defaultValue) {
    return getOr(defaultValue, path, object);
}

module.exports = {
    md,
    get
};