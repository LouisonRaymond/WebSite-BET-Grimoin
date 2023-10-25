const fetch = require('node-fetch');
const apiKey = process.env.STRAPI_API_TOKEN;
const apiUrl = process.env.STRAPI_API_URL;

async function getTranslations(pages, locale = 'fr') {
    const parameters = { method: 'GET', headers: { 'Authorization': `bearer ${apiKey}` } };
    let query = `?pagination[pageSize]=500&fields[0]=key&fields[1]=${locale}`;
    query += (Array.isArray(pages) && pages.length)
        ? pages.reduce((acc, page, index) => `${acc}&filters[page][$in][${index}]=${page}`, '')
        : '';

    const response = await fetch(`${apiUrl}/api/translations${query}`, parameters);
    const { data } = await response.json();
    return (data || []).reduce((acc, translation) => {
        acc[translation.attributes.key] = locale === 'fr' ? translation.attributes.fr : translation.attributes.en;
        return acc;
    }, {});
};

module.exports = {
    getTranslations
};