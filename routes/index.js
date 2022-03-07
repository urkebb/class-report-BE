const express = require('express');
const reportRoutes = require('./report-routes');

module.exports = () => {

    const router = express.Router();
    router.use('/report', reportRoutes);
    return router;

};
