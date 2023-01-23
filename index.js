const express = require("express");
const debug = require("debug")("app:main");

const { Config } = require("./src/config");
const { ProductsAPI } = require("./src/products");
const { UsersAPI } = require("./src/users");
const { IndexApi, NotFoundApi } = require('./src/index');

const app = express();

app.use(express.json());

IndexApi(app);
ProductsAPI(app);
UsersAPI(app);
NotFoundApi(app);

//modulos

app.listen(Config.port, () => {
    debug(`servidor escuchando en el puerto ${Config.port}`);
});