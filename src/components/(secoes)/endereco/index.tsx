import { Container } from '@/components/container';
import styles from './styles.module.scss';
import Image from 'next/image';
import pagamentosImg from '../../../../public/metodos de pagamento.webp';

export function Endereco({ id }: { id: string }) {
  return (
    <>
      <section id={id} className={styles.endereco}>
        <Container>
          <div className={styles.enderecoContent}>
            <h1>Nossa localização</h1>
            <p>Rua Lucas Antônio Monteiro Barros JR, Nº 98 - Califórnia, Barra do Piraí</p>
            <div className={styles.localizacaoMap}>
              <span>Confira no mapa abaixo:</span>
              <iframe data-aos="zoom-in-up" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7373.255703355727!2d-44.029321!3d-22.480615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ebd8bd2149b6b%3A0xbb699062862a8cb5!2sBARRA%20PNEUS!5e0!3m2!1spt-BR!2sbr!4v1743710288775!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
            </div>
          </div>
          <div className={styles.divisor}></div>
          <div className={styles.pagamentos}>
            <p>Nossos métodos de pagamento são:</p>
            <Image
              alt='Métodos de pagamento'
              src={pagamentosImg}
              draggable={false}
            />
          </div>
        </Container>
      </section>
    </>
  )
}