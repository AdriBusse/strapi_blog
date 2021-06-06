'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    /**
 * Create a record.
 *
 * @return {Object}
 */

    async create(ctx) {
        let entity;
        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            data.user = ctx.state.user.id;
            entity = await strapi.services.article.create(data, { files });
        } else {
            ctx.request.body.user = ctx.state.user.id;
            entity = await strapi.services.article.create(ctx.request.body);
        }
        return sanitizeEntity(entity, { model: strapi.models.article });
    },

    async react(ctx) {

        const oldReaction = await strapi.services.reaction.delete({ article: ctx.params.id, user: ctx.state.user.id });

        let entity;
        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            data.article = ctx.params.id;
            data.user = ctx.state.user.id;
            entity = await strapi.services.reaction.create(data, { files });
        } else {
            ctx.request.body.user = ctx.state.user.id;
            ctx.request.body.article = ctx.params.id;
            entity = await strapi.services.reaction.create(ctx.request.body);
        }
        return sanitizeEntity(entity, { model: strapi.models.reaction });
    },
    async comment(ctx) {
        let entity;
        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            data.article = ctx.params.id;
            data.user = ctx.state.user.id;
            entity = await strapi.services.comment.create(data, { files });
        } else {
            ctx.request.body.user = ctx.state.user.id;
            ctx.request.body.article = ctx.params.id;
            entity = await strapi.services.comment.create(ctx.request.body);
        }
        return sanitizeEntity(entity, { model: strapi.models.reaction });
    }
};