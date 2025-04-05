"use client"

import { useEffect, useState } from "react";
import { Logo } from "../logo";
import styles from './styles.module.scss';
import { Container } from "../container";
import Link from "next/link";
import WppVerde from '../../../public/whatsapp verde.png';
import Image from "next/image";
import { GoArrowUp } from 'react-icons/go'

export function Header() {
  const [top, setTop] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  const linkList = [
    { nome: "Serviços", destino: "#servicos" },
    { nome: "Galeria", destino: "#galeria" },
    { nome: "Contato", destino: "#contato" },
    { nome: "Endereço", destino: "#endereco" },
  ]

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 600)
    }

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    if (isDesktop) return;

    const scrollHandler = () => {
      setTop(window.scrollY <= 120);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [isDesktop])

  return (
    <header className={styles.header}>
      <Container>
        <div className={`${styles.centerContent} ${!top && !isDesktop && styles.centerContentBefore}`}>
          <Logo />
          <nav className={`${styles.nav} ${!top && !isDesktop ? styles.fixo : styles.background}`}>
            {linkList.map(link => (
              <Link key={link.nome} href={link.destino} className={styles.links}>
                {link.nome}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
      <a href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=Olá, gostaria de mais detalhes sobre seu serviço.`} target="_blank" rel="noopener noreferrer" className={styles.containerWpp}>
        <Image
          src={WppVerde}
          alt="Botão Whatsapp"
          className={styles.botaoWpp}
        />
      </a>
      <a href="#hero" className={styles.buttonTop}>
        <GoArrowUp size={35} color="#FFF" />
      </a>
    </header>
  )
}