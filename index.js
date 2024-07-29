//js code
function Stopwatch() {
    let runtime, duration, starttime, endtime = 0;
    this.start = function() {     // for start time
      if(runtime)
        throw new Error('StopWatch already started');
      runtime = true;
      starttime = new Date();
    };
    this.stop = function() {      // stope time
      if(!runtime)
        throw new Error('stopWatch already stoped');
      runtime = false;
      endtime = new Date();
      duration = (endtime.getTime() - starttime.getTime()) /1000;
    };
    this.reset = function() {       // for reset all
      runtime = false;
      duration = 0;
      starttime = null;
      endtime = null;
    };
    Object.defineProperty(this,'duration',{      // convert duration read only property
      get: function() {
        return duration;
      }
    });
  }
  const sw = new Stopwatch();