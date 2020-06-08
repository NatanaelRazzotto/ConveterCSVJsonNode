const fs = require('fs')
const readline = require('readline')
const Fila = require('./Fila')
const LogerTempo = require('./Time')

class FileTime
{
    constructor(arquivo){
        this.nomeFile = arquivo
        this.LinhaAtual = 0
    }
    listalOGS(){
        let valAbertura = 0.0
        let qtdRegistros = 0.0
        let valMinLeitura = 0.0
        let valMinConversao = 0.0
        let valMinEscrita = 0.0 
        let valMedConversao = 0.0
        let valMedEscrita = 0.0
        let valMaxLeitura = 0
        let valMaxConversao = 0.0
        let valMaxEscrita = 0.0
        let valMedLeitura = 0.0
        try {
            const rl = readline.createInterface({
                input: fs.createReadStream(this.nomeFile),
                output: process.stdout,
                terminal: false
            })
            
            rl.on('line', function (line) {
                const linha = line.split(',');
                console.log("LOgs ")
                
                for (let index = 0; index < linha.length; index++) {
                    if (linha[index].match(/A:/))
                    {
                        var valor = linha[index];
                        let filtro = valor.replace('A:','')
                        let tempoFiltrado= parseFloat(filtro)
                        valAbertura +=valAbertura +tempoFiltrado

                    }
                    else if (linha[index].match(/L:/))
                    {
                        let valor = linha[index];
                        let filtro = valor.replace('L:','')
                        let tempoFiltrado= parseFloat(filtro)
                        if (tempoFiltrado > valMaxLeitura)
                        {
                            if (qtdRegistros == 0){
                                valMinLeitura = tempoFiltrado
                            }
                            valMaxLeitura = tempoFiltrado
                        }
                        else if ((tempoFiltrado < valMinLeitura))
                        {
                            valMinLeitura = tempoFiltrado
                        }
                         valMedLeitura = valMedLeitura +  tempoFiltrado
                    }
                    else if (linha[index].match(/C:/))
                    {
                        var valor = linha[index];
                        let filtro = valor.replace('C:','')
                        let tempoFiltrado= parseFloat(filtro)
                        if (tempoFiltrado > valMaxConversao)
                        {
                            if (qtdRegistros == 0){
                                valMinConversao = tempoFiltrado
                            }
                            valMaxConversao = tempoFiltrado
                        }
                        else if ((tempoFiltrado < valMinConversao))
                        {
                            valMinConversao = tempoFiltrado
                        }
                         valMedConversao = valMedConversao +  tempoFiltrado

                    }
                    else if (linha[index].match(/E:/))
                    {
                        var valor = linha[index];
                        let filtro = valor.replace('E:','')
                        let tempoFiltrado= parseFloat(filtro)
                        if (tempoFiltrado > valMaxEscrita)
                        {
                            if (qtdRegistros == 0){
                                valMinEscrita = tempoFiltrado
                            }
                            valMaxEscrita = tempoFiltrado
                        }
                        else if ((tempoFiltrado < valMinEscrita))
                        {
                            valMinEscrita = tempoFiltrado
                        }
                         valMedEscrita = valMedEscrita +  tempoFiltrado

                    }
                    else {
                        console.log("Valor informado não corresponde ao esperado: " +linha[index]);
                    }
                    
                    
                }
                qtdRegistros ++
      
            })

            rl.on('close', () => {
                valAbertura = valAbertura/qtdRegistros
                valMedLeitura = valMedLeitura/qtdRegistros
                valMaxEscrita = valMaxEscrita/qtdRegistros
                console.log(`|||||||||||||||||||||||||||LOGS DE TEMPOS DO APLICATIVO||||||||||||||||||||||||||||||||||||||||||||||||||||||||${'\n'}
                            Quantidade de Registros: ${qtdRegistros} ${'\n'}
                            Média de Abertura de Registros: ${valAbertura} ${'\n'}
                            Menor tempo de LEITURA: ${valMinLeitura} Milessegundos ${'\n'}
                            Maior tempo de LEITURA: ${valMaxLeitura} Milessegundos ${'\n'}
                            Média de tempo de LEITURA: ${valMedLeitura} Milessegundos ${'\n'}
                            Menor tempo de CONVERSÃO: ${valMinConversao} Milessegundos ${'\n'}
                            Maior tempo de CONVERSÃO: ${valMaxConversao} Milessegundos ${'\n'}
                            Média de tempo de CONVERSÃO: ${valMedConversao} Milessegundos ${'\n'}
                            Menor tempo de ESCRITA: ${valMaxEscrita} Milessegundos ${'\n'}
                            Maior tempo de ESCRITA: ${valMinEscrita} Milessegundos ${'\n'}
                            Média de tempo de ESCRITA: ${valMedEscrita} Milessegundos ${'\n'}
                            
                            `)

            })
        } catch (error) {
          //  reject({ 'resultado': 'Erro', error })
        }

    }
    
}
module.exports = FileTime