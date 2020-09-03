module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'liannian9'),
        username: env('DATABASE_USERNAME', 'liannian9'),
        password: env('DATABASE_PASSWORD', 'YzSL3K5pWEwJEMHb'),
      },
      options: {},
    },
  },
});
