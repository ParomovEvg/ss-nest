const username = process.env.DATABASE_USERNAME || 'a0319139_nest-ss';
const password = process.env.DATABASE_PASSWORD || '123';
const host = process.env.DATABASE_HOST;
const port = process.env.DATABASE_PORT;
const database = process.env.DATABASE_DATABASE;

module.exports = {
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  entities: [
    __dirname + '/src/**/*.entity.ts',
    __dirname + '/dist/**/*.entity.js',
  ],
  migrations: ['migrations/**/*.ts'],
  subscribers: ['subscriber/**/*.ts', 'dist/subscriber/**/.js'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'migrations',
    subscribersDir: 'subscriber',
  },
};
