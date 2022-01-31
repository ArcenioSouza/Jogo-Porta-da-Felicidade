import Link from "next/link";
import { useState } from "react";
import Cartao from "../components/cartao/Cartao";
import EntradaNumerica from "../components/entradaNumerica/EntradaNumerica";
import styles from "../styles/Formulario.module.css"

export default function Formulario() {
  const [qtdPortas, setQtdPortas] = useState(3)
  const [comPresente, setComPresente] = useState(3)

  return (
    <div className={styles.formulario}>
      <div>
          <Cartao bgColor="#c0392c">
            <h1>Monty Hall</h1>
          </Cartao>
          <Cartao>
            <EntradaNumerica  
              text="Qtd de Portas" 
              value={qtdPortas} 
              onChange={novaQtd => setQtdPortas(novaQtd)}/>
          </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica  
                text="Porta com presente" 
                value={comPresente} 
                onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}/>
        </Cartao>
          <Cartao bgColor="#28a085">
            <Link href={`/jogo/${qtdPortas}/${comPresente}`} passHref>
              <h2 className={styles.link}>Iniciar</h2>
            </Link>
          </Cartao>
      </div>
      
    </div>
  )
}
