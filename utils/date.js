const now = '2015-03-24';
const startDate = new Date(now);
const endDate = new Date(now);
startDate.setHours(0, 0, 0);
endDate.setUTCHours(11, 30, 0);

module.exports = {
    now,
    startDate,
    endDate
};
