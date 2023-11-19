const fetch = require('node-fetch');
const apiKey = process.env.STRAPI_API_TOKEN;
const apiUrl = process.env.STRAPI_API_URL;

async function getExpertises(locale = 'fr') {
    const parameters = { method: 'GET', headers: { 'Authorization': `bearer ${apiKey}` } };
    let query = `?populate=*&pagination[pageSize]=100&sort=position:asc&locale=${locale}`;

    const response = await fetch(`${apiUrl}/api/expertises${query}`, parameters);
    const { data } = await response.json();
    return (data || []).map((expertise) => ({
        smallTitle: expertise.attributes.smallTitle,
        bigTitle: expertise.attributes.bigTitle,
        description: expertise.attributes.description,
        pictureUrl: process.env.STRAPI_API_URL + expertise.attributes.picture.data.attributes.url,
        pictureAlt: expertise.attributes.picture.data.attributes.alternativeText,
    }));
};

module.exports = {
    getExpertises
};