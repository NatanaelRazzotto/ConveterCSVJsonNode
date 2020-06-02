// "controller" lançador

const ArquivoCSV = require('./FileCSV')
const Fila = require('./Fila')
const ParseJSON = require('./ConverterJson') 
const EscritorJSON = require('./SaveFileJson.js') 


const arquivoCSV = new ArquivoCSV('C:\\Users\\Casa\\Documents\\TESTES PROGRAMAS CSV\\brasil\\brasil.csv')
arquivoCSV.quantidadeRegistros()
    .then(res => {
        console.log(`Resultado: ${res}`)
    })
arquivoCSV.listaArquivo()
    .then(resultado => {
        console.log(`Resultado: ${JSON.stringify(resultado)} Total CSV: ${Fila.terminouProcessoCSV}`)
    })
    console.log('teste assincrono')
    new ParseJSON().ConversaodeCSVJson()//ConverterJson
    new EscritorJSON().EscreverArquivo()//ConverterJson