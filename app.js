const express = require('express');
const app = express();
const ExpressError = require('./expressError');

app.use(express.json())

const uRoutes = require('./routes/users');
app.use('/users', uRoutes);

app.use(function(req, res, next) {
    const err = new ExpressError('Not found', 404);

    return next(err);
})

module.exports = app;