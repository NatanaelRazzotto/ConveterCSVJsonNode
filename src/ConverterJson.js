const Papa = require('papaparse')
const Fila = require('./Fila')
const fs = require('fs')


class ConverterJson{

    constructor(){
        this.LinhaAtual = 0
    }
    ConversaodeCSVJ(){
        //'C:\\Users\\Casa\\Documents\\TESTES PROGRAMAS CSV\\brasil\\brasil.csv'
        console.log("testeconver")
        const FileCSV = 'C:\\Users\\Casa\\Documents\\TESTES PROGRAMAS CSV\\brasil\\brasil.csv'
        const file = fs.createReadStream(FileCSV);
        Papa.parse(file, {
            header: true,
            step: function(result) {
              Fila.filaJSON.push(result.data)
            },
            complete: function(results, file) {
              console.log('Complete', Fila.filaJSON.length, 'records.'); 
              for (let letter of Fila.filaJSON.values) {
                    console.log(letter);
              }
            }
          });
    }
    somar(item) {
        console.log(item)
    }
    TesteLoop(){
        for (var i = 0; i<2; i++)
        {
        setTimeout(function () {
        console.log("teste"+i)
        }, 100);
        }
    }
    trimds()
    {
        const Continuaiterar = setInterval(() => {
             if (Fila.filaCSV.length === 0){
            console.log('Comessou converteParaJSON ' + Fila.filaCSV.length)

            if (Fila.terminouProcessoCSV) {
                clearInterval(continua)
            }

        } else {
            const csv = Fila.filaCSV.shift()
            console.log('CSV:', csv)
            const data = Papa.parse(csv,{
                delimiter: ",",
                header: true,
                dynamicTyping: true,
                transformHeader:function(h) {

                    console.log("========"+h)
                    h = "dsdsadsa"
                    console.log("++++++++cls"+h)
                  return h.trim();
                },})
          
            Fila.filaJSON.push(data)
            console.log('CSV:', data)
            console.log('Tamanho CSV: ', Fila.filaJSON.length)
        }
    }, 100)
    console.log('Terminou processo JSON')
    }
    ConverterOsArquivos()
    {
        while(Fila.terminouProcessoJSON == false)
        {
            if ((Fila.filaCSV.length === 0)/*&&(Fila.filaJSON.length===0)*/)
            { 
                console.log('Conversor entrou em espera!')
                if((Fila.terminouProcessoCSV == true))
                {
                    console.log('Converteu!')
                    Fila.terminouProcessoJSON = true
                    break
                    //clearInterval(Continuaiterar)
                }
                // else
                // {
                //     // setTimeout(function () {
                //     //     console.log(Fila.terminouProcessoCSV)
                //     //     console.log('Tamanho CSV: ', Fila.filaJSON.length)
                //     //   }, 100);
                  
                //     // console.log(Fila.terminouProcessoCSV)
                //     console.log('Tamanho CSV: ', Fila.filaJSON.length)
                //     console.log('Conversor entrou em espera!')
                // }
            }
            else
            {
               
                const elementoaConverter = Fila.filaCSV.shift()
                console.log("CSV-"+elementoaConverter)
                const RegistroConvertido = Papa.parse(elementoaConverter,{Headers:true})
                console.log(RegistroConvertido)
                console.log("---"+RegistroConvertido.data)
                Fila.filaJSON.push(RegistroConvertido.data)
                console.log('Tamanho CSV: ', Fila.filaJSON.length)
            }
        }
    }
    ConversaodeCSVJson(){
        const Continuaiterar = setInterval(() => {
            // // if ((Fila.filaCSV.length === 0)&&(Fila.filaJSON.length===0))
            // // {
            // //     if((Fila.terminouProcessoCSV))
            // //     {
            // //         Fila.terminouProcessoJSON = true
            // //         clearInterval(Continuaiterar)
            // //     }
            // //     else
            // //     {
            // //         console.log('Conversor entrou em espera!')
            // //     }
            // // }
            // // else
            // // {
               
            // //     const elementoaConverter = Fila.filaCSV.shift()
            // //     console.log("CSV-"+elementoaConverter)
            // //     const RegistroConvertido = Papa.parse(elementoaConverter,{Headers:true})
            // //     console.log(RegistroConvertido)
            // //     console.log("---"+RegistroConvertido.data)
            // //     Fila.filaJSON.push(RegistroConvertido.data)
            // //     console.log('Tamanho CSV: ', Fila.filaJSON.length)
            // // }
            if (Fila.filaCSV.length === 0){
            console.log('Comessou converteParaJSON ' + Fila.filaCSV.length)

            if (Fila.terminouProcessoCSV) {
                clearInterval(continua)
            }

        } else {
            const csv = Fila.filaCSV.shift()
            console.log('CSV:', csv)
            const data = Papa.parse(csv)
          
            Fila.filaJSON.push(data)
            console.log('CSV:', data)
            console.log('Tamanho CSV: ', Fila.filaJSON.length)
        }
    }, 100)
    console.log('Terminou processo JSON')
    }
    ConversaodeCSVJsonTeste(){
        const Continuaiterar = setInterval(() => {
            // // if ((Fila.filaCSV.length === 0)&&(Fila.filaJSON.length===0))
            // // {
            // //     if((Fila.terminouProcessoCSV))
            // //     {
            // //         Fila.terminouProcessoJSON = true
            // //         clearInterval(Continuaiterar)
            // //     }
            // //     else
            // //     {
            // //         console.log('Conversor entrou em espera!')
            // //     }
            // // }
            // // else
            // // {
               
            // //     const elementoaConverter = Fila.filaCSV.shift()
            // //     console.log("CSV-"+elementoaConverter)
            // //     const RegistroConvertido = Papa.parse(elementoaConverter,{Headers:true})
            // //     console.log(RegistroConvertido)
            // //     console.log("---"+RegistroConvertido.data)
            // //     Fila.filaJSON.push(RegistroConvertido.data)
            // //     console.log('Tamanho CSV: ', Fila.filaJSON.length)
            // // }
            if (Fila.filaCSV.length === 0){
            console.log('Comessou converteParaJSON ' + Fila.filaCSV.length)

            if (Fila.terminouProcessoCSV) {
                clearInterval(continua)
            }

        } else {
            if(this.LinhaAtual == 0)
            {
                const csv = Fila.filaCSV.shift()
                const header = csv.split(',');
                for (let index = 0; index < header.length; index++) {
                    Fila.filaHeaders.push(header[index]);
                    
                }
                console.log(Fila.filaHeaders)
                console.log ("====================")
                this.LinhaAtual = 1

            }
            else
            {
      

                const csv = Fila.filaCSV.shift()
                // const data = Papa.parse(csv,{header: ['foo','bar','baz']})
                // console.log(data)
            // console.log('CSV:', csv)
                const data = Papa.parse(csv,{beforeFirstChunk: function(chunk) {
                    // // var a = "Number,Gender,NameSet,Title,GivenName,Surname,StreetAddress,City,State,ZipCode,CountryFull,EmailAddress,Username,Password,TelephoneNumber,Birthday,CCType,CCNumber,CVV2,CCExpires,NationalID,Color,Kilograms,Centimeters,GUID"
                    // // var rows = chunk.Headers = a
                    //  var a = new Object()
                    //  var a 
                    var rows = chunk.split(',');
                    console.log("linhas"+rows.length)
                //   console.log(rows)
                    //  var a = chunk[2].Headers
                    //  console.log(a)
                    for (var c = 0 ; c <= Fila.filaHeaders.length; c++)
                    {
                        console.log(c)
                        rows[c] = "\""+Fila.filaHeaders[c]+"\":" + rows[c]
                    //  console.log(rows[c])
                    }
                    // var headings = rows[0].toUpperCase();
                    // console.log(rows[0] + "linha")
                    // console.log(headings + "Retornio")
                    // rows[0] = headings;
                    return rows/*.join("\r\n")*/;
                },})
                Fila.filaJSON.push(data)
            }
           // console.log('CSV:', data)
         //   console.log('Tamanho CSV: ', Fila.filaJSON.length)
        }
    }, 100)
    console.log('Terminou processo JSON')
    }

}


module.exports = ConverterJson