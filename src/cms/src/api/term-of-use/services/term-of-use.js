'use strict';

/**
 * term-of-use service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::term-of-use.term-of-use');
