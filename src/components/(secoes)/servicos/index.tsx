import { Container } from '@/components/container';
import styles from './styles.module.scss';
import Image from 'next/image';
import pneuEsquerdo from '../../../../public/roda lado esquerdo.jpg';
import pneuDireito from '../../../../public/lado direito.jpg';

export function Servicos({ id }: { id: string }) {
  return (
    <>
      <section id={id} className={styles.servicos}>
        <Container>
          <div className={styles.textosServicos}>
            <h1>Venha conhecer os nossos serviços que fornecemos</h1>
            <div className={styles.paragrafos}>
              <p>Realizamos a reforma de seus pneus!</p>
              <p>E também fazemos <b>reformas de pneus VIPAL</b></p>
              <p>Venha construir uma gestão organizada e econômica com a maior reformadora de pneus da região.</p>
              <div className={styles.imagesContainers}>
                <div className={styles.imageContainer} data-aos="fade-right" data-aos-delay="450">
                  <Image
                    alt='Roda pneu VIPAL'
                    src={pneuEsquerdo}
                    draggable={false}
                  />
                </div>
                <div className={styles.imageContainer} data-aos="fade-left" data-aos-delay="450">
                  <Image
                    alt='Roda pneu VIPAL'
                    src={pneuDireito}
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}