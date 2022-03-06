const Report = require('../../models/report');
const date = require('../../utils/date');
const errorHandle = require('../../middlewares/error-handle');

const search = async (req, res, next) => {

    const { page, limit } = req.query;
    let { userID } = req.params;
    userID = +userID;

    const constraints = [
        { SubmitDateTime: { $lt: date.endDate } },
        { SubmitDateTime: { $gt: date.startDate } },
        { UserId: { $eq: userID } }
    ];

    let reports;
    let reportsCount;

    try {

        reports = await Report.find({
            $and: constraints
        }).skip(page * limit).limit(limit);

        reportsCount = await Report.find({
            $and: constraints
        }).count();

        return res.status(200).json({ success: true, reportsCount, reports });

    } catch (err) {

        errorHandle(res, err.message, 500, err);

    };

};

module.exports = search;
