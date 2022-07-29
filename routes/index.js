/*
const productsRouter = require('./productsRouter');
const categoriesRouter = require('./categoriesRouter')
const usersRouter = require('./usersRouter');

function routerApi(app) {
    app.use('/api/products', productsRouter);
    app.use('/api/categories', categoriesRouter);
    app.use('/api/users', usersRouter);
}

module.exports = routerApi;
*/

// Segmento para obtimizar en caso de realizar cambios drasticos

const express = require('express');
const productsRouter = require('./productsRouter');
const categoriesRouter = require('./categoriesRouter')
const usersRouter = require('./usersRouter');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
    router.use('/users', usersRouter);
}

module.exports = routerApi;
