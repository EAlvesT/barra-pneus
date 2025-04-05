import { Footer } from "@/components/footer";
import { Hero } from "@/components/(secoes)/hero";
import { Servicos } from "@/components/(secoes)/servicos";
import { Galeria } from "@/components/(secoes)/galeria";
import { Contato } from "@/components/(secoes)/contato";
import { Endereco } from "@/components/(secoes)/endereco";

export default function Home() {
  return (
    <>
      <Hero id="hero" />
      <Servicos id="servicos" />
      <Galeria id="galeria" />
      <Contato id="contato" />
      <Endereco id="endereco" />
      <Footer />
    </>
  );
}