var express = require("express");
var router = express.Router();

const fs = require("fs");

let routes = fs.readdirSync(__dirname); // 'routes' klasöründeki dosyaları okur

for (let route of routes) {
  if (route.includes(".js") && route !== "index.js") {
    router.use("/" + route.replace(".js", ""), require("./" + route));
    // Örneğin: users.js için -> /users rotası
  }
}

module.exports = router;
