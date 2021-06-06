module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            if (!data.describtion) {
                data.describtion = data.title;
            }
        },

    },
};