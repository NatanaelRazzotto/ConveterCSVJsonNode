const Papa = require('papaparse')
const Fila = require('./Fila')
const fs = require('fs')
const LogerTempo = require('./Time')


class ConverterJson{

    constructor(){
        this.LinhaAtual = 0
    }
    ConversaodeCSVJson(){
        const log = new LogerTempo();
        log.start()
        const Continuaiterar = setInterval(() => {
            if (Fila.filaCSV.length === 0){
            console.log('Comessou converteParaJSON ' + Fila.filaCSV.length)

            if (Fila.terminouProcessoCSV) {
                Fila.terminouProcessoJSON = true
                log.endTempo("C")
                clearInterval(Continuaiterar)
            }

        } else {
            
            const csv = Fila.filaCSV.shift()
         //   console.log('CSV:', csv)
            const data = Papa.parse(csv)
          
            Fila.filaJSON.push(data.data[0])
            console.log('CSV:', data)
         //   console.log('Tamanho CSV: ', Fila.filaJSON.length)
        }
    }, 0)
    console.log('Terminou processo JSON')
    }
    // ConversaodeCSVJsonTeste(){
    //     const Continuaiterar = setInterval(() => {
    //         if (Fila.filaCSV.length === 0){
    //         console.log('Comessou converteParaJSON ' + Fila.filaCSV.length)

    //         if (Fila.terminouProcessoCSV) {
    //             clearInterval(continua)
    //         }

    //     } else {
    //         if(this.LinhaAtual == 0)
    //         {
    //             const csv = Fila.filaCSV.shift()
    //             const header = csv.split(',');
    //             for (let index = 0; index < header.length; index++) {
    //                 Fila.filaHeaders.push(header[index]);
                    
    //             }
    //             console.log(Fila.filaHeaders)
    //             console.log ("====================")
    //             this.LinhaAtual = 1
    //         }
    //         else
    //         {
    //             const csv = Fila.filaCSV.shift()
    //             // const data = Papa.parse(csv,{header: ['foo','bar','baz']})
    //             // console.log(data)
    //         // console.log('CSV:', csv)
    //             const data = Papa.parse(csv,{dynamicTyping: true , beforeFirstChunk: function(chunk) {
    //                 // // "Number,Gender,NameSet,Title,GivenName,Surname,StreetAddress,City,State,ZipCode,CountryFull,EmailAddress,Username,Password,TelephoneNumber,Birthday,CCType,CCNumber,CVV2,CCExpires,NationalID,Color,Kilograms,Centimeters,GUID"
    //                 var rows = chunk.split(',');
    //                 console.log("linhas"+rows.length)
    //             //   console.log(rows)
    //                 //  var a = chunk[2].Headers
    //                 //  console.log(a)
    //                 var resultado = ""
    //                 for (var c = 1 ; c < Fila.filaHeaders.length; c++)
    //                 {
    //                     console.log(c)
    //                     resultado = resultado +",\""+Fila.filaHeaders[c]+"\":" + rows[c]
    //                 }
    //                 console.log(resultado)
    //                 return resultado;
    //             },})
    //             console.log(data)
    //             Fila.filaJSON.push(data)
    //         }

    //     }
    // }, 100)
    // console.log('Terminou processo JSON')
    // }

}


module.exports = ConverterJson