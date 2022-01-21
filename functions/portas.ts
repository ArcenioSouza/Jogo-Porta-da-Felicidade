import PortaModel from "../model/porta";

export const criarPortas = (qtde: number, selecionada: number): PortaModel[] => {
  return Array.from( { length: qtde }, (_, index) => {
      const numero = index + 1
      const temPresente = numero === selecionada
      return new PortaModel(numero, temPresente)
  })
};

export const atualizarPortas = (portas: PortaModel[], portaModificada: PortaModel): PortaModel[] => {
  return portas.map(portaAtual => {
     const igualAModificada = portaAtual.numero === portaModificada.numero

     if(igualAModificada){
        return portaModificada
     } else {
        return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
     }
  })
};
