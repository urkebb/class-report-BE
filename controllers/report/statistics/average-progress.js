const Report = require('../../../models/report');

const averageProgress = async (constraints) => {

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
                    count: { $count: {} },
                    totalProgress: {
                        $sum: {
                            $cond: [{ $ne: ['$Progress', 0] }, '$Progress', 0]
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    count: 1,
                    totalProgress: 1,
                    averageProgress: {
                        $divide: [
                            '$count',
                            '$totalProgress'
                        ]
                    }
                }
            }
        ]
    );

};

module.exports = averageProgress;
