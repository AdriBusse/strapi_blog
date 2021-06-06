const { sanitizeEntity } = require('strapi-utils');
module.exports = {
    /**
     * Delete a record.
     *
     * @return {Object}
     */

    async delete(ctx) {
        const { id } = ctx.params;

        const entity = await strapi.services.comment.delete({ id, user: ctx.state.user });
        if (entity) {
            console.log("has entity");
            return sanitizeEntity(entity, { model: strapi.models.comment });
        } else {
            console.log("didnt find");
            return { msg: "you can just delete your own comment" };
        }
    },
};