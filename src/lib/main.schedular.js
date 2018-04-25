const EventEmitter = require('events');
const moment = require('moment');

 class MainSchedular extends EventEmitter{
     constructor(taskRunners) {
         super();
         this._taskID = '';
     }

     start(){
         this._taskID = setInterval(()=>{
            this.emit('TASK_NOTIFY',{
                stringFormat : moment().format('YYYYMMDD HHmmss'),
                dateObject : moment()
            });
         },1000);
     }

     terminate(){
        clearInterval(this._taskID);
     }
     
 }

 //singleton
module.exports = new MainSchedular();