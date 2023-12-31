const fetch = require('node-fetch');
const apiKey = process.env.STRAPI_API_TOKEN;
const apiUrl = process.env.STRAPI_API_URL;

async function createContactMessage(contactMessage) {
    const payload = {
        data: {
            lastname: contactMessage.lastname,
            firstname: contactMessage.firstname,
            email: contactMessage.email,
            company: contactMessage.company,
            message: contactMessage.message,
        }
    };
    const parameters = {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${apiKey}`
        },
    };

    const response = await fetch(`${apiUrl}/api/contact-messages`, parameters);
    const responseBody = await response.json();
    const data = responseBody.data;
    return {
        id: data.id,
        lastname: data.attributes.lastname,
        firstname: data.attributes.firstname,
        email: data.attributes.email,
        company: data.attributes.company,
        createdAt: data.attributes.createdAt,
        message: data.attributes.message,
    };
};

module.exports = {
    createContactMessage
};