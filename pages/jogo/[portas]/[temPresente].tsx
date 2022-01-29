import styles from "../../../styles/Jogo.module.css";
import React, { useEffect, useState } from "react";
import Porta from "../../../components/porta/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Link from "next/link";
import { useRouter } from "next/router";

const jogo = () => {
   const router = useRouter();
   const [portas, setPortas] = useState([]);

   useEffect(() => {
      const portas = +router.query.portas;
      const temPresente = +router.query.temPresente;
      setPortas(criarPortas(portas, temPresente));
   }, [router?.query]);

   const renderizarPortas = () => {
      return portas.map((porta) => {
         return (
            <Porta
               key={porta.numero}
               value={porta}
               onChange={(novaPorta) =>
                  setPortas(atualizarPortas(portas, novaPorta))
               }
            />
         );
      });
   };

   return (
      <div className={styles.jogo}>
         <div className={styles.portas}>{renderizarPortas()}</div>
         <div className={styles.botoes}>
            <Link href="/">
               <button>Reiniciar Jogo</button>
            </Link>
         </div>
      </div>
   );
};

export default jogo;
