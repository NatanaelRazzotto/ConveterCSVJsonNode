const Papa = require('papaparse')
const Fila = require('./Fila')


class ConverterJson{

    ConversaodeCSVJson(){
        const Continuaiterar = setInterval(() => {
            if ((Fila.filaCSV.length === 0)&&(Fila.filaJSON.length===0))
            {
                if((Fila.terminouProcessoCSV))
                {
                    Fila.terminouProcessoJSON = true
                    clearInterval(Continuaiterar)
                }
                else
                {
                    console.log('Conversor entrou em espera!')
                }
            }
            else
            {
                const elementoaConverter = Fila.filaCSV.shift()
                const RegistroConvertido = Papa.parse(elementoaConverter)
                Fila.filaJSON.push(RegistroConvertido)
                console.log('Tamanho CSV: ', Fila.filaJSON.length)
            }
        //     if (Fila.filaCSV.length === 0){
        //     console.log('Comessou converteParaJSON ' + Fila.filaCSV.length)

        //     if (Fila.terminouProcessoCSV) {
        //         clearInterval(continua)
        //     }

        // } else {
        //     const csv = Fila.filaCSV.shift()
        //     console.log('CSV:', csv)
        //     const data = Papa.parse(csv)
        //     Fila.filaJSON.push(data)
        //     console.log('Tamanho CSV: ', Fila.filaJSON.length)
        // }
    }, 100)
    console.log('Terminou processo JSON')
    }

}
module.exports = ConverterJson