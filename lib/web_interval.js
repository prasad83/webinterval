/**
 * setWebInterval and clearWebInterval using WebWorker approach.
 */

 function setWebInterval(fn, time) {
    var worker = new Worker("interval_worker.js");
    worker.addEventListener("message", function(event){
        if (event.data.message == "interval_tick") {
            if (!worker.timerid && event.data.timerid) worker.timerid = event.data.timerid;
            fn();
        }
    });
    worker.postMessage({action: "set_interval", frequency: time});
    return worker;
}

function clearWebInterval(worker) {
    worker.postMessage({action: "clear_interval", timerid: worker.timerid});
    worker.terminate();
}
