const slugify = require('slugify');

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            if (!data.describtion) {
                data.describtion = data.title;
            }
            if (data.title) {
                data.slug = slugify(data.title);
            }
        },
        beforeUpdate: async (params, data) => {
            if (data.title) {
                data.slug = slugify(data.title);
            }
        },

    },
};