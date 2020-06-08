const fs = require('fs')
const readline = require('readline')
const Fila = require('./Fila')
var startTime, endTime;

class Time{
    start() {
        startTime = new Date();
    };
    endTempo(processo) {
        endTime = new Date();
        var timeDiff = endTime - startTime; //in ms
        // strip the ms
        timeDiff /= 1000;
      
        // get seconds 
        var seconds = Math.round(timeDiff);
        console.log(seconds + " seconds");
        Fila.filaTime.push(processo+":"+timeDiff)
        console.log( "tempo " + processo+":"+timeDiff )
    }

}
module.exports = Time
