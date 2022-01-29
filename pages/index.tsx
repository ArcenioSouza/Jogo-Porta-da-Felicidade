import Link from "next/link";
import Cartao from "../components/cartao/Cartao";
import styles from "../styles/Formulario.module.css"

export default function Formulario() {
  return (
    <div className={styles.formulario}>
      <div>
          <Cartao bgColor="#c0392c">
            <h1>Monty Hall</h1>
          </Cartao>
          <Cartao></Cartao>
      </div>
      <div>
        <Cartao></Cartao>
          <Cartao bgColor="#28a085">
            <Link href="jogo/10/2">
              <h2 className={styles.link}>Iniciar</h2>
            </Link>
          </Cartao>
      </div>
      
    </div>
  )
}
