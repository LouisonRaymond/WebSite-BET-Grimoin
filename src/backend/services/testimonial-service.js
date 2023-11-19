const fetch = require('node-fetch');
const apiKey = process.env.STRAPI_API_TOKEN;
const apiUrl = process.env.STRAPI_API_URL;

async function getTestimonials(page = 1, pageSize = 10, locale = 'fr') {
    const parameters = { method: 'GET', headers: { 'Authorization': `bearer ${apiKey}` } };
    let query = `?populate=*&locale=${locale}`;
    query += page ? `&pagination[page]=${page}` : '';
    query += pageSize ? `&pagination[pageSize]=${pageSize}` : '';
    query += `&sort=position:asc`;
    const response = await fetch(`${apiUrl}/api/testimonials${query}`, parameters);
    const { data } = await response.json();
    return (data || []).map((testimonial) => ({
        id: testimonial.id,
        title: testimonial.attributes.title,
        subTitle: testimonial.attributes.subTitle,
        pictureUrl: process.env.STRAPI_API_URL + testimonial.attributes.picture.data.attributes.url
    }));
};

module.exports = {
    getTestimonials
};