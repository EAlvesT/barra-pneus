import { Container } from '@/components/container';
import styles from './styles.module.scss';
import Image from 'next/image';
import imgEstoque1 from '../../../../public/pneus1.jpg';
import imgEstoque2 from '../../../../public/pneus2.jpg';
import imgEstoque3 from '../../../../public/pneus3.jpeg';
import imgEstoque4 from '../../../../public/estoque4.jpeg';

const imagensGaleria = [
  { id: 1, img: imgEstoque1, alt: 'Imagem estoque 1' },
  { id: 2, img: imgEstoque2, alt: 'Imagem estoque 2' },
  { id: 3, img: imgEstoque3, alt: 'Imagem estoque 3' },
  { id: 4, img: imgEstoque4, alt: 'Imagem estoque 4' },
]

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
              {imagensGaleria.map(imagem => (
                <div key={imagem.id} className={styles.containerImagem} data-aos="zoom-in" data-aos-delay="450">
                  <Image
                    alt={`${imagem.alt}`}
                    src={imagem.img}
                    draggable={false}
                  />
                </div>
              ))}
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