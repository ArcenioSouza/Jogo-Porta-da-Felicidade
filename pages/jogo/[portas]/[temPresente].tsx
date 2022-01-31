import styles from "../../../styles/Jogo.module.css";
import React, { useEffect, useState } from "react";
import Porta from "../../../components/porta/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Link from "next/link";
import { useRouter } from "next/router";

const Jogo = () => {
   const router = useRouter();
   const [portas, setPortas] = useState([]);
   const [valido, setValido] = useState(false)

   useEffect(() => {
      const portas = +router.query.portas;
      const temPresente = +router.query.temPresente;

      const qtdPortasValidas = portas >= 2 && portas <= 100
      const temPresenteValido = temPresente >=1 && temPresente <= portas
      
      setValido(qtdPortasValidas && temPresenteValido)      
   }, [portas, router.query.portas, router.query.temPresente]);

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
         <div className={styles.portas}>
            {valido ? 
               renderizarPortas() : 
               <h1>Informações inválidas</h1> 
            }
         </div>
         <div className={styles.botoes}>
            <Link href="/" passHref>
               <button>Reiniciar Jogo</button>
            </Link>
         </div>
      </div>
   );
};

export default Jogo;
