const username = process.env.POSTGRES_USER || "a0319139_nest-ss";
const password = process.env.POSTGRES_PASSWORD || "123";

module.exports = {
  "type": "mysql",
  "host"     : "wedinvite.ru",
  "port": 3306,
  username,
  password,
  "database" : "a0319139_nest-ss",
  "entities": [__dirname + "/src/**/*.entity.ts", __dirname + "/dist/**/*.entity.js"],
  "migrations": ["migrations/**/*.ts"],
  "subscribers": ["subscriber/**/*.ts", "dist/subscriber/**/.js"],
  "cli": {
    "entitiesDir": "src",
    "migrationsDir": "migrations",
    "subscribersDir": "subscriber"
  }
};
