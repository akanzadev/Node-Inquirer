const fs = require("fs");

const path = "./db/data.json";
const guardarDB = (data) => {
  fs.writeFileSync(path, JSON.stringify(data));
};

const leerDB = () => {
  if (!fs.existsSync(path)) {
    return null;
  }
  const info = fs.readFileSync(path, "utf8");
  const data = JSON.parse(info);
  return data;
};

module.exports = { guardarDB, leerDB };
