const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const moment = require('moment');
const { capitalize } = require('../util/');

const JobstreamSchema = new Schema({
    creationDate: {type: Date, default: moment()},
    lupDate: {type: Date, default: moment()},
    id: { type: String, required: 'Jobstream ID is required', unique: true, maxlength: 12, minlength:5, set: capitalize },
    name: { type: String, required: 'Jobstream name is required', unique: true },
    description : {type: String},
    entity : { type: String, required:'Entity is required', minlength:2, maxlength:5, set: capitalize},
    module : {type: String, required: 'Module is required', maxlength:5, minlength:2, set: capitalize},
    scheduledDate : String,
    holidays:Array, //all dates in YYYYMMDD format
    startTime : { type: Date, required: 'Jobstream start time is required' },
    endTime: Date,
    interval : String , //format 000000 HHmmss
})

JobstreamSchema.pre('findOneAndUpdate', function(next){
    this.upDate = moment();
})

JobstreamSchema.plugin(uniqueValidator,{
    type:'jobstream-unique-validator',
    message: '{PATH} {VALUE} already exists'
})

module.exports = model('Jobstream',JobstreamSchema);