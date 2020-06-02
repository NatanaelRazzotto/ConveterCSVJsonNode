const fs = require('fs')
const readline = require('readline')
const Fila = require('./Fila')

class FileCSV{
    constructor(arquivo){
        this.nomeFile = arquivo
    }
    quantidadeRegistros(){
        return new Promise((resolve,reject)=>{
            const contents = fs.readFileSync(this.nomeFile,'utf-8')
            const matches = contents.match(/\n/g)
            Fila.totalRegistrosCSV = matches.length - 1
            resolve(Fila.totalRegistrosCSV)

        })
    }
    listaArquivo() {
        return new Promise((resolve, reject) => {

            try {
                const rl = readline.createInterface({
                    input: fs.createReadStream(this.nomeFile),
                    output: process.stdout,
                    terminal: false
                })
                
                rl.on('line', function (line) {
                    Fila.filaCSV.push(line)
                })
    
                rl.on('close', () => {
                    Fila.terminouProcessoCSV = true
                    console.log('terminou processo LeituraCSV')
                    resolve({ 'resultado': 'Sucesso' })
                })
            } catch (error) {
                reject({ 'resultado': 'Erro', error })
            }

        })
    }
}
module.exports = FileCSV