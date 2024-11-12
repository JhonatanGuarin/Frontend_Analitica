import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './ThemeToggle'

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl gradient-text">
            Más Allá de los Números
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
                <Link href="/metodologia">Metodología</Link>
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