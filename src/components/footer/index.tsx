import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Desenvolvido por CodeDriver - Todos os direitos reservados a Barra Pneus Recauchutagem LTDA &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}