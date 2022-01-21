import { useState } from "react";
import Porta from "../components/porta/Porta";
import Presente from "../components/presente/Presente";
import { atualizarPortas, criarPortas } from "../functions/portas";
import PortaModel from "../model/porta";

export default function Home() {

  const [portas, setPortas] = useState(criarPortas(3,2))

  const renderizarPortas = () => {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={ novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    })
    
  }

  return (
    <div style={{display: "flex"}}>
      {renderizarPortas()}
    </div>
  )
}
