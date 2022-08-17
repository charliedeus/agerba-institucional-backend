module.exports = ({ env }) => ({
  // connection: {
  //   client: 'postgres',
  //   connection: {
  //     host: env('DATABASE_HOST', '127.0.0.1'),
  //     port: env.int('DATABASE_PORT', 5432),
  //     database: env('DATABASE_NAME', 'agerba-db'),
  //     user: env('DATABASE_USERNAME', 'docker'),
  //     password: env('DATABASE_PASSWORD', 'docker'),
  //     ssl: env.bool('DATABASE_SSL', false),
  //   },
  // },

  defaultConnection: "default",
  connections: {
    default: {
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', '127.0.0.1'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'agerba-db'),
          user: env('DATABASE_USERNAME', 'docker'),
          password: env('DATABASE_PASSWORD', 'docker'),
          ssl: env.bool('DATABASE_SSL', false),
        },
      },
    },
    production: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "agerba-db"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "852456951357"),
      },
      options: {},
    },
  },
});
