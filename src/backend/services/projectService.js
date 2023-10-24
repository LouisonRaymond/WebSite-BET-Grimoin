const fetch = require('node-fetch');
const apiKey = process.env.STRAPI_API_TOKEN;
const apiUrl = process.env.STRAPI_API_URL;

async function getProjects(type, page = 1, pageSize = 6, locale = 'fr') {
    const parameters = { method: 'GET', headers: { 'Authorization': `bearer ${apiKey}` } };
    let query = `?populate=*&locale=${locale}`;
    query += type ? `&filters[type][$eq]=${type}` : '';
    query += page ? `&pagination[page]=${page}` : '';
    query += pageSize ? `&pagination[pageSize]=${pageSize}` : '';
    query += `&sort=position:asc`;
    const response = await fetch(`${apiUrl}/api/projects${query}`, parameters);
    const { data } = await response.json();
    return (data || []).map((project) => ({
        id: project.id,
        title: project.attributes.title,
        subTitle: project.attributes.subTitle,
        shortDescription: project.attributes.shortDescription,
        description: project.attributes.description,
        description2: project.attributes.description2,
        picture: process.env.STRAPI_API_URL + project.attributes.picture.data.attributes.url
    }));
};

async function getProject(id, locale = 'fr') {
    const parameters = { method: 'GET', headers: { 'Authorization': `bearer ${apiKey}` } };
    let query = `?populate=*&?locale=${locale}`;
    const response = await fetch(`${apiUrl}/api/projects/${id}${query}`, parameters);
    const { data } = await response.json();
    return {
        id: data.id,
        title: data.attributes.title,
        subTitle: data.attributes.subTitle,
        shortDescription: data.attributes.shortDescription,
        description: data.attributes.description,
        description2: data.attributes.description2,
        picture: process.env.STRAPI_API_URL + data.attributes.picture.data.attributes.url
    };
};

module.exports = {
    getProjects,
    getProject
};