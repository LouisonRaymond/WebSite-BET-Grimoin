const fetch = require('node-fetch');
const apiKey = process.env.STRAPI_API_TOKEN;
const apiUrl = process.env.STRAPI_API_URL;

async function getTermsOfUse(locale = 'fr') {
    const parameters = { method: 'GET', headers: { 'Authorization': `bearer ${apiKey}` } };
    let query = `?populate=*&locale=${locale}`;

    const response = await fetch(`${apiUrl}/api/term-of-use${query}`, parameters);
    const { data } = await response.json();
    return {
        content: data.attributes.content
    };
};

module.exports = {
    getTermsOfUse
};