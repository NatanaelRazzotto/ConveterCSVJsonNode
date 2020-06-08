const fs = require('fs')
const readline = require('readline')
const Fila = require('./Fila')
const LogerTempo = require('./Time')
const ArquivoCSV = require('./FileCSV')
const ArquivoTIME = require('./FileTime')

class SaveFileJson{
    constructor(){

    }
    EscreverArquivo(){
        return new Promise((resolve,reject)=>{
            try{
            const log = new LogerTempo()
            log.start()
            const ItervalEScrita = setInterval(() => {
                if ((Fila.filaCSV.length === 0)&&(Fila.filaJSON.length===0))
                {
                    if((Fila.terminouProcessoJSON))
                    {
                       // resolve(Fila.totalRegistrosCSV)
                        log.endTempo("E")
                        clearInterval(ItervalEScrita)
                        resolve("Encerrada Escrita")
                    }
                    else
                    {
                        console.log('Escrita entrou em espera!')
                    }
                }
                else
                {
                    const elementoaEscrever = Fila.filaJSON.shift()
                    // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@")
                    // console.log(elementoaEscrever)
                    fs.writeFile('.\\arquivos\\ArquivoJSON.txt',JSON.stringify(elementoaEscrever)+"\n",{encoding:'utf-8',flag:'a'},function(err){
                        if (err) {
                            console.log('não foi possivel escrever!!')
                            throw err;
                        }
                        
                     //   console.log('registroSalvo!!')
                    })
                }
            }, 0);
        } catch (error) {
            reject({ 'resultado': 'Erro', error })
        }
       })

    }
    EscreverArquivoTempo(){
        try {
        var caminhoLog = '.\\arquivos\\ArquivoTempo.txt'
        for (let i = 0; i < Fila.filaTime.length; i++) 
        {
            const tempoEscrever = Fila.filaTime[i]
            var separador = ","
            if (i == Fila.filaTime.length -1)
            {
                separador = "\n"
            }
            fs.writeFile(caminhoLog,tempoEscrever+separador,{encoding:'utf-8',flag:'a'},function(err){
                if (err) {
                    console.log('não foi possivel logar o TEMPO!!')
                    throw err;
                }
                
          //      console.log('registroTEMPOSalvo!!')
            })

        }
        console.log(`|||||||||||||||||||||||||||LOGS DE TEMPOS ULTIMO PROCESSO||||||||||||||||||||||||||||||||||||||||||||||||||||||||${'\n'}
        tempo de ABERTURA: ${Fila.filaTime[0]} Milessegundos ${'\n'}
        tempo de LEITURA: ${Fila.filaTime[1]} Milessegundos ${'\n'}
        tempo de CONVERSÃO: ${Fila.filaTime[2]} Milessegundos ${'\n'}
        tempo de ESCRITA: ${Fila.filaTime[3]} Milessegundos ${'\n'}
        
        `)
        Fila.filaTime = []
        const arquivoFILE = new ArquivoTIME(caminhoLog)
        arquivoFILE.listalOGS()
    } catch (error) {
        reject({ 'resultado': 'Erro', error })
    }

    }
}
module.exports = SaveFileJson


   // EscreverArquivoJson(){
    //     const ItervalEScrita = setInterval(() => {
    //         if ((Fila.filaCSV.length === 0)&&(Fila.filaJSON.length===0))
    //         {
    //             if((Fila.terminouProcessoJSON))
    //             {
    //                 clearInterval(ItervalEScrita)
    //             }
    //             else
    //             {
    //                 console.log('Escrita entrou em espera!')
    //             }
    //         }
    //         else
    //         {
    //             const elementoaEscrever = Fila.filaJSON.shift()
    //             const jsonEdit = elementoaEscrever[0]
    //             for (var c = 1 ; c < Fila.filaHeaders.length; c++)
    //             {
    //                 console.log("+++++++++")
    //                 console.log(c)
    //                 var resultado = resultado +",\""+Fila.filaHeaders[c]+"\":" + jsonEdit[c]
    //                 console.log(resultado)
    //             }
              
    //         //    var rows = elementoaEscrever.split(',');
    //             console.log("@@@@@@@@@@@@@@@@@@@@@@@@@")
    //           //  console.log(ele[0])
    //             console.log("@@@@@@@@@@@@fgfdgfdg@@@@@@@@@@@@@")
    //             fs.writeFile('.\\arquivos\\ArquivoJSON.txt',JSON.stringify(elementoaEscrever),{encoding:'utf-8',flag:'a'},function(err){
    //                 if (err) {
    //                     console.log('não deu!!')
    //                     throw err;
    //                 }
                    
    //                 console.log('registroSalvo!!')
    //             })
    //             // fs.writeFile('.\\arquivos\\ArquivoJSON.txt',JSON.stringify(elementoaEscrever),{encoding:'utf-8',flag:'a'},function(err){
    //             //     if (err) throw err;
    //             //     console.log('registroSalvo!!')
    //             // })
    //         }
    //     }, 100);

    // }

