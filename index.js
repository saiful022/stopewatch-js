//js code
function Stopwatch() {
    let runtime, duration, starttime, endtime = 0;
    this.start = function() {
      if(runtime)
        throw new Error('StopWatch already started');
      runtime = true;
      starttime = new Date();
    };
    this.stop = function() {
      if(!runtime)
        throw new Error('stopWatch already stoped');
      runtime = false;
      endtime = new Date();
      duration = (endtime.getTime() - starttime.getTime()) /1000;
    };
    this.reset = function() {
      runtime = false;
      duration = 0;
      starttime = null;
      endtime = null;
    };
    Object.defineProperty(this,'duration',{
      get: function() {
        return duration;
      }
    });
  }
  const sw = new Stopwatch();