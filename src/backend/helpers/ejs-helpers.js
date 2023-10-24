const showdown = require('showdown');

function md(text) {
    converter = new showdown.Converter();
    return converter.makeHtml(text);
}

module.exports = {
    md
};