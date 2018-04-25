/*
//run this job stream on 20180420 at 1am
jobRunner.on('20180420').start('010000').run(); 
//run this job every day every 1hr30min4s
jobRunner.every('1hr30m4s').run(); 
//run this job every day every 1hr30min4s from 9:15am to 9pm
jobRunner.every('1hr30m4s').from('091500').to('210000').run(); 
//run this job on 20180420 every 15min from 9am to 9pm
jobRunner.on('20180421').every('15m').from('090000').to('210000').run();
//run this job but not on dates every 15min from 9am to 9pm
jobRunner.on('20180421').butNotOn([]).every('15m').from('090000').to('210000').run();
//run this job
jobRunner.run(); */

const event = require('./main.schedular');
const moment = require('moment');
const childProcess = require('child_process');

exports.setJobStreamSize = size => {
    event.setMaxListeners(size);
    return this;
}

exports.scheduleJobstream = jobstream => {
    event.prependOnceListener('TASK_NOTIFY',e => {
        process.nextTick(startJobstream,jobstream,e);
    })
    return this;
}

const startJobstream = (jobstream,e) => {
    const [ date,time ] = e.stringFormat.split(' ');

    if(date === jobstream.scheduledDate && 
        jobstream.startTime === time ){
    
            jobstream.jobs.forEach(job => {
                let stdout = this.adhocRun(job,{encoding: 'utf-8'});
                console.log(stdout)
             })
    }
}

exports.adhocRun = (job,opt) => {
    console.log('Runner Job '+job.id);
    return childProcess.execSync(job.command,opt)
}