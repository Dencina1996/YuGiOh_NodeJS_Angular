module.exports = {
  HOST: "localhost",
  USER: "admin",
  PASSWORD: "P@ssw0rd",
  DB: "yugioh",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};