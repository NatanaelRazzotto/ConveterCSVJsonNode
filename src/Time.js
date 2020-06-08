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
        var timeDiff = endTime - startTime; 
        timeDiff /= 1000;
        Fila.filaTime.push(processo+":"+timeDiff)

    }

}
module.exports = Time
