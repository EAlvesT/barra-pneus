import { Container } from '@/components/container';
import styles from './styles.module.scss';
import Image from 'next/image';
import imgEstoque1 from '../../../../public/pneus1.jpg';
import imgEstoque2 from '../../../../public/pneus2.jpg';
import imgEstoque3 from '../../../../public/pneus3.jpeg';
import imgEstoque4 from '../../../../public/estoque4.jpg';

export function Galeria({ id }: { id: string }) {
  return (
    <>
      <section id={id} className={styles.galeria}>
        <Container>
          <div className={styles.conteudoGaleria}>
            <div className={styles.tituloGaleria}>
              <p>Conte com nosso vasto estoque de pneus tanto para caminhões, quanto para <b>máquinas agrícolas</b>!</p>
            </div>
            <div className={styles.galeriaImagens}>
              <div className={styles.containerImagem} data-aos="zoom-in" data-aos-delay="450">
                <Image
                  alt='Imagem estoque 1'
                  src={imgEstoque1}
                  draggable={false}
                />
              </div>
              <div className={styles.containerImagem} data-aos="zoom-in" data-aos-delay="450">
                <Image
                  alt='Imagem estoque 2'
                  src={imgEstoque2}
                  draggable={false}
                />
              </div>
              <div className={styles.containerImagem} data-aos="zoom-in" data-aos-delay="450">
                <Image
                  alt='Imagem estoque 3'
                  src={imgEstoque3}
                  draggable={false}
                />
              </div>
              <div className={styles.containerImagem} data-aos="zoom-in" data-aos-delay="450">
                <Image
                  alt='Imagem estoque 4'
                  src={imgEstoque4}
                  draggable={false}
                />
              </div>
            </div>
            <div className={styles.textoParagrafo}>
              <p>E também trabalhamos com recapagem! Basta clicar no botão abaixo para falar com a nossa equipe!</p>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=Olá, gostaria de mais detalhes sobre seu serviço.`}>Fale conosco</a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}