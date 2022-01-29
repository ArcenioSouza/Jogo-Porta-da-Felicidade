import styles from '../styles/Jogo.module.css';
import React, { useState } from 'react';
import Porta from '../components/porta/Porta';
import { atualizarPortas, criarPortas } from '../functions/portas';
import Link from 'next/link';

const jogo = () => {
   const [portas, setPortas] = useState(criarPortas(4,2))

   const renderizarPortas = () => {
     return portas.map(porta => {
       return <Porta key={porta.numero} value={porta} onChange={ novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
     })
     
   }
 
   return (
     <div className={styles.jogo}>
        <div className={styles.portas}>
            {renderizarPortas()}
        </div>
        <div className={styles.botoes}>
          <Link href="/">
            <button>Reiniciar Jogo</button>
          </Link>
        </div>
       
     </div>
   )
};

export default jogo;
