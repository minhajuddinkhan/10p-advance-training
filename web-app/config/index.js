const convict = require("convict");
const fs = require("fs");

const config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "qa", "stage", "test"],
    default: "development",
    env: "NODE_ENV"
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 4000,
    env: "PORT"
  },
  jwtSecret: {
    default: 'this-is-my-jwt-secret',
  },
  debug: {
    default: true

  },
  db: {
    username: {
      format: String,
      default: "postgres"
    },
    password: {
      format: String,
      default: ""
    },
    database: {
      format: String,
      default: "postgres"
    },
    postgresConf: {
      host: {
        doc: "Database host name/IP",
        format: String,
        default: "localhost"
      },
      dialect: {
        doc: "Dialect of database",
        format: String,
        default: "postgres"
      },
      port: {
        doc: "port for connection",
        format: "port",
        default: 5432
      },
      logging: {
        default: false
      }
    }
  }
});

const env = config.get("env");
try {
  const path = `${__dirname}/${env}.json`;
  fs.accessSync(path, fs.constants.F_OK);

  config.loadFile(path);
} catch (error) {
  console.error(error);
  console.error("file doesn't exist, loading defaults");
}

config.validate({ allowed: "strict" });

module.exports = { config };
