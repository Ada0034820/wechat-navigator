const express = require("express");
const MongoStore = require("connect-mongo");
const session = require("express-session");
const config = require("config-lite")(__dirname);
const router = require("./routes/index.js");
const db = require("./mongodb/db.js");
var proxy = require("express-http-proxy");
// import config from 'config-lite';
const app = express();
const proxyServer = express();
const port = 3000;
const isdev = process.env.NODE_ENV === "development";

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "content-type");
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  next();
});
app.use(
  session({
    name: config.session.name,
    secret: config.session.secret,
    resave: true,
    saveUninitialized: false,
    cookie: config.session.cookie,
    store: MongoStore.create({
      mongoUrl: config.url,
    }),
  })
);
proxyServer.use("/proxy", proxy("localhost:3000"));
router(app);
proxyServer.use(express.static("./public"));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
proxyServer.listen(isdev ? 8080 : 80, () => {
  console.log(
    `proxyServer listening at http://localhost,mode=${process.env.NODE_ENV}`
  );
});
