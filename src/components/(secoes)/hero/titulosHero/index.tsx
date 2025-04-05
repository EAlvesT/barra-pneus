import { Container } from '@/components/container';
import styles from './styles.module.scss';

export function TitulosHero() {
  return (
    <>
      <div className={styles.titulos}>
        <Container>
          <div className={styles.conteudoPrincipal}>
            <div className={styles.tituloPrincipal} data-aos="fade-down">
              <h1>PNEUS COM OS MENORES PREÇOS PARA VOCÊ ECONOMIZAR</h1>
            </div>
            <div className={styles.textos}>
              <h2 data-aos="fade-right">O que você vai encontrar em nossa loja:</h2>
              <ul className={styles.listaItens}>
                <li data-aos="fade-right" data-aos-delay="600">Pneus novos de várias medidas, cargas, agro e OTR</li>
                <li data-aos="fade-right" data-aos-delay="700">Pneus reformados com garantia</li>
                <li data-aos="fade-right" data-aos-delay="800">Reforma de pneus, cargas, agro e OTR</li>
                <li data-aos="fade-right" data-aos-delay="800">Serviços de borracharia</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}