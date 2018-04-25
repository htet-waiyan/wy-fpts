const jobstreamRegister = require('./jobstream.registerer');
const moment = require('moment');

//pattern 20 04 ** 2018 001000 // run on 20th April 2018 and kick off at 00:10:00
const mockJobStream1 = {
    id : 'JS00000001',
    name: 'FPSEOD',
    description : 'Daily EOP Job Stream',
    entity : 'SG',
    system: 'FPRO',
    scheduledDate : '20180424',
    startTime: '232000',
    jobs:[
        {
            id:'JJ0001',
            command: '/Users/waiyan/ProjectWorkspace/Node/wy-fpts/runJob.sh job1'
        },
        {
            id:'JJ0002',
            command: '/Users/waiyan/ProjectWorkspace/Node/wy-fpts/runJob.sh job2'
        }
    ]
}

const mockJobStream2 = {
    id : 'JS00000002',
    name: 'FPSEOD',
    description : 'Daily EOP Job Stream',
    entity : 'SG',
    system: 'FPRO',
    scheduledDate : '20180424',
    startTime: '232001',
    jobs:[
        {
            id:'JJ0001',
            command: '/Users/waiyan/ProjectWorkspace/Node/wy-fpts/runJob.sh job1'
        },
        {
            id:'JJ0002',
            command: '/Users/waiyan/ProjectWorkspace/Node/wy-fpts/runJob.sh job2'
        }
    ]
}

jobstreamRegister.registerJobStreams(mockJobStream1);
jobstreamRegister.registerJobStreams(mockJobStream2);
jobstreamRegister.startMainSchedular();

let stdout = require('./job.runner').adhocRun(mockJobStream1.jobs[0],{encoding:'utf-8'})
console.log(stdout);