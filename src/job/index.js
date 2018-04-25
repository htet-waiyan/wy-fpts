const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const moment = require('moment');
const { capitalize } = require('../util/');

const JobSchema = new Schema({
    creationDate: {type: Date, default: moment()},
    lupDate: {type: Date, default: moment()},
    code: { type: String, required: 'Job code is required',unique: true, minlength:2, maxlength:10, set: capitalize},
    description: String,
    command: { type: String, required:'Job command is required'},
    outputHandler : String,
    jobType: {type: String, required: 'Job Type is required', default: 'Reporting'},
    recovery: { type: String, default: 'STOP'},
    dependency: Array,
    fileDependency: Array,
    waitingTime: String, //HHmmss format
    safeForAdhocRun: { type: Boolean, default: true},
    remark: String,
    rerunSafe: { type: Boolean, default:true},
    status: { type: String, default: 'NEW'},
    startAt: Date,
    completedAt: Date
})

JobSchema.pre('findOneAndUpdate', function(next){
    this.lupDate = moment();
})

JobSchema.plugin(uniqueValidator,{
    type: 'job-unique-validator',
    message: '{PATH} {VALUE} already exists'
})

exports.JobSchema = JobSchema;
exports.Model = model('Job',JobSchema);