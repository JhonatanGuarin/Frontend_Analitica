import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './ThemeToggle'
import Image from 'next/image' // Importa el componente Image de Next.js

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Reemplaza el texto por una imagen */}
          <Link href="/" className="font-bold text-xl">
            <Image
              src="/images/logo.png"  // Asegúrate de poner la ruta correcta de la imagen
              alt="Más Allá de los Números"
              width={150}  // Ajusta el ancho según lo que necesites
              height={40}  // Ajusta la altura según lo que necesites
            />
          </Link>
          
          <ul className="flex items-center gap-1">
            <li>
              <Button variant="ghost" asChild>
                <Link href="/">Inicio</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="/acerca">Acerca</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="/contacto">Contacto</Link>
              </Button>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
