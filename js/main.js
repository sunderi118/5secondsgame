(function(){
    'use strict';

    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var result = document.getElementById('result');

    var startTime;
    var isStarted = false;

    start.addEventListener('click',function(){

        if(isStarted === true){
            return;
        }
        isStarted = true;
        startTime = Date.now();
        this.className = 'pushed';
        stop.className = '';
        result.textContent = "0.000";
        result.className = "standby";
    });

    stop.addEventListener('click',function() {
        var elTime;
        var diff;

        if(isStarted ===false){
            return;
        }
        isStarted = false;
        elTime = (Date.now() - startTime) / 1000;
        result.textContent = elTime.toFixed(3);
        this.className = 'pushed';
        start.className ='';
        result.className ='';
        diff = elTime - 5.0;
        if (diff > - 2.0 && diff < 2.0 ){
            result.className = 'perfect';
        }

    });

})();