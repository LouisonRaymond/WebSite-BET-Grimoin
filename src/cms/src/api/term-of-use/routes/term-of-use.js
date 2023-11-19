'use strict';

/**
 * term-of-use router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::term-of-use.term-of-use');
