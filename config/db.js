console.log("connect to db");

const { connect } = require("mongoose");

const connectDB = async () => {
  const DB = await connect(process.env.MONGO_DB_URI);
  console.log(
    `mongoDB are connected  ${DB.connection.name} * ${DB.connection.host} * ${DB.connection.port}`
      .cyan.underline
  );
};

module.exports = connectDB;
