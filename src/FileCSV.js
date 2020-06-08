const fs = require('fs')
const readline = require('readline')
const Fila = require('./Fila')
const LogerTempo = require('./Time')

class FileCSV{
    constructor(arquivo){
        this.nomeFile = arquivo
        this.LinhaAtual = 0
    }
    quantidadeRegistros(){
        return new Promise((resolve,reject)=>{
            const log = new LogerTempo()
            log.start()
            const contents = fs.readFileSync(this.nomeFile,'utf-8')
            const matches = contents.match(/\n/g)
            Fila.totalRegistrosCSV = matches.length - 1
            log.endTempo("A")
            resolve(Fila.totalRegistrosCSV)

        })
    }
    listaArquivo() {
        return new Promise((resolve, reject) => {
            const log = new LogerTempo()
            log.start()
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
                    log.endTempo("L")
                    Fila.terminouProcessoCSV = true
                 console.log('terminou processo LeituraCSV')
                    resolve({ 'resultado do processo de Leitura': 'Sucesso' })
                })
            } catch (error) {
                reject({ 'resultado': 'Erro', error })
            }

        })
    }
   
}
module.exports = FileCSV