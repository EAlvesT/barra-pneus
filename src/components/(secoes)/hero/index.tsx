import { Header } from '@/components/header';
import { TitulosHero } from '@/components/(secoes)/hero/titulosHero';
import styles from './styles.module.scss';

export function Hero({ id }: { id: string }) {
  return (
    <section className={styles.hero} id={id}>
      <Header />
      <TitulosHero />
    </section>
  )
}