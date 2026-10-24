import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={title:"VidraCred · Control de créditos",description:"Cuenta corriente, cronogramas quincenales y cobranza de Vidra Plastic."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es-PE"><body>{children}</body></html>;}
