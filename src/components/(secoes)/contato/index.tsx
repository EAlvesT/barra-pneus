import { Container } from '@/components/container';
import styles from './styles.module.scss';
import Image from 'next/image';
import emailImg from '../../../../public/icone-email.png';
import telefoneImg from '../../../../public/icone-telefone.png';

export function Contato({ id }: { id: string }) {
  const telefone = process.env.NEXT_PUBLIC_PHONE_NUMBER || "";
  const telefoneFormatado = formataTelefone(telefone);

  function formataTelefone(telefone: string) {
    if (!telefone) return "";

    let numero = telefone.toString().replace(/|D/g, "").slice(2);

    return `(${numero.slice(0, 2)}) ${numero.slice(2, 7)}-${numero.slice(7)}`;
  }

  return (
    <>
      <section id={id} className={styles.contato}>
        <Container>
          <h1>Contato</h1>
          <div className={styles.contatoContainer}>
            <div className={styles.contatoCard}>
              <div className={styles.containerImg}>
                <Image
                  alt='Imagem email'
                  src={emailImg}
                  draggable={false}
                />
              </div>
              <span>E-mail</span>
              <p>{process.env.NEXT_PUBLIC_EMAIL_ADRESS}</p>
            </div>
            <div className={styles.contatoCard}>
              <div className={styles.containerImg}>
                <Image
                  alt='Imagem telefone'
                  src={telefoneImg}
                  draggable={false}
                />
              </div>
              <span>Telefone</span>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER?.slice(2)}`}>{telefoneFormatado}</a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}