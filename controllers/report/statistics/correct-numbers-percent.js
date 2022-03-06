const Report = require('../../../models/report');

const correctNumbersPercent = async (constraints) => {

    return await Report.aggregate(
        [
            {
                $match: {
                    $and: constraints
                }
            },
            {
                $group: {
                    _id: null,
                    total: { $count: {} },
                    correct: {
                        $sum: {
                            $cond: [{ $eq: ['$Correct', 1] }, 1, 0]
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    total: 1,
                    correct: 1,
                    percent: {
                        $divide: [
                            {
                                $multiply: [
                                    '$correct',
                                    100
                                ]
                            },
                            '$total'
                        ]

                    }
                }
            }
        ]
    );

};

module.exports = correctNumbersPercent;
