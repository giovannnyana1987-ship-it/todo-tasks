var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    TaskId : Number,
    Name : String,
    Deadline : Date,
})

module.exports = mongoose.model(
    'task', taskSchema, 'Tasks'
);
