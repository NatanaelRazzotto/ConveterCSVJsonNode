const fs = require('fs')
const readline = require('readline')
const Fila = require('./Fila')

class SaveFileJson{
    EscreverArquivo(){
        const ItervalEScrita = setInterval(() => {
            if ((Fila.filaCSV.length === 0)&&(Fila.filaJSON.length===0))
            {
                if((Fila.terminouProcessoJSON))
                {
                    clearInterval(ItervalEScrita)
                }
                else
                {
                    console.log('Escrita entrou em espera!')
                }
            }
            else
            {
                const elementoaEscrever = Fila.filaJSON.shift()
                console.log(elementoaEscrever)
                fs.writeFile('.\\arquivos\\ArquivoJSON.txt',JSON.stringify(elementoaEscrever),{encoding:'utf-8',flag:'a'},function(err){
                    if (err) throw err;
                    console.log('registroSalvo!!')
                })
            }
        }, 100);

    }
}
module.exports = SaveFileJson

