const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
    SubmittedAnswerId: { type: Number },
    SubmitDateTime: { type: Date },
    Correct: { type: Number },
    Progress: { type: Number },
    UserId: { type: Number },
    ExerciseId: { type: Number },
    Difficulty: { type: String },
    Subject: { type: String },
    Domain: { type: String },
    LearningObjective: { type: String }
});

module.exports = mongoose.model('Report', reportSchema);
