// "controller" lançador

const ArquivoCSV = require('./FileCSV')
const Fila = require('./Fila')
const ParseJSON = require('./ConverterJson') 
const EscritorJSON = require('./SaveFileJson.js') 
const LogerTempo = require('./Time')


const arquivoCSV = new ArquivoCSV('.\\arquivos\\brasil.csv')//.\\arquivos\\ArquivoJSON.txt
arquivoCSV.quantidadeRegistros()
    .then(res => {
        console.log(`Resultado: ${res}`)
    })
arquivoCSV.listaArquivo()
    .then(resultado => {
        console.log(`Resultado: ${JSON.stringify(resultado)} Total CSV: ${Fila.terminouProcessoCSV} TotalHeader ${Fila.filaHeaders}`)
    })
new ParseJSON().ConversaodeCSVJson()
const escritor = new EscritorJSON()
        escritor.EscreverArquivo()
        .then(resultado => {
            console.log(`Resultado: ${JSON.stringify(resultado)}`)
            escritor.EscreverArquivoTempo()
        })

