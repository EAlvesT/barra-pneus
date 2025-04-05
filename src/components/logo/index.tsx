import Image from "next/image";
import logoImg from '../../../public/img-logo.png'
import styles from './styles.module.scss';

export function Logo() {
  return (
    <>
      <Image
        src={logoImg}
        quality={100}
        alt="Logo Barra Pneus"
        className={styles.logo}
        priority
        draggable={false}
      />
    </>
  )
}