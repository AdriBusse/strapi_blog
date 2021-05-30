module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3003),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1b5f0536e655bed3d9766913856225a1'),
    },
  },
});
