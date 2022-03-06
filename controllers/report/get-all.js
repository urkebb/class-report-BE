const Report = require('../../models/report');
const date = require('../../utils/date');
const errorHandle = require('../../middlewares/error-handle');

const getAll = async (req, res) => {

    const { page, limit } = req.query;

    let reports;
    let reportsCount;
    try {

        reports = await Report.find({
            $and: [
                { SubmitDateTime: { $lt: date.endDate } },
                { SubmitDateTime: { $gt: date.startDate } }
            ]

        }).skip(page * limit).limit(limit);

        reportsCount = await Report.find({
            $and: [
                { SubmitDateTime: { $lt: date.endDate } },
                { SubmitDateTime: { $gt: date.startDate } }
            ]

        }).count();

        return res.status(200).json({ success: true, reports, reportsCount });

    } catch (err) {

        errorHandle(res, err.message, 500, err);

    }

};

module.exports = getAll;
