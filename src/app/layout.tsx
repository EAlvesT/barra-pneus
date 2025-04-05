import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import { AosIinit } from "@/components/aos/aos-init";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ["normal", "italic"],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Barra Pneus - Seu borracheiro de confiança",
  description: "Barra Pneus, pneus novos, reformados, pneus de carga, agro e OTR, recauchutagem",
  keywords: ["pneus novos", "pneus", "recapagem", "remode", "pneu agro", "recauchutado", "recauchutagem", "pneu recauchutado", "borracharia", "borracheiro", "caminhão", "caminhao", "pneu caminhão", "pneu máquinas", "agricola", "agrícola", "máquina agrícola", "maquina agricola", "OTR", "recapagem de pneus"],
  openGraph: {
    images: [`${process.env.NEXT_PUBLIC_URL}/img-logo.png`],
    title: "Barra Pneus - A melhor borracharia da região!"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${poppins.variable}`}>
        {children}
        <AosIinit />
      </body>
    </html>
  );
}