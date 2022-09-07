/**
 * WebWorker Script to provide setInterval, clearInterval support.
 */

 self.addEventListener("message", function(event){
    if (event.data.action == "set_interval") {
        var timerid = setInterval(function(){
            self.postMessage({message: "interval_tick", timerid: timerid});
        }, event.data.frequency);
    } else if (event.data.action == "clear_interval" && event.data.timerid) {
        clearInterval(event.data.timerid);
    }
});
