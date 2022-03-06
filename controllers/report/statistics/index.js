const correctNumbersPercent = require('./correct-numbers-percent');
const averageProgress = require('./average-progress');
const date = require('../../../utils/date');
const errorHandle = require('../../../middlewares/error-handle');

const statistics = async (req, res) => {

    const constraints = [
        { SubmitDateTime: { $lt: date.endDate } },
        { SubmitDateTime: { $gt: date.startDate } }
    ];

    const statistics = {};

    try {

        statistics.correctNumbersPercent = await correctNumbersPercent(constraints);
        statistics.averageProgress = await averageProgress(constraints);

        return res.status(200).json({ success: true, statistics });

    } catch (err) {

        errorHandle(res, err.message, 500, err);

    }

};

module.exports = statistics;
