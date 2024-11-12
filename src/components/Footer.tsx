import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-4 gradient-text">Más Allá de los Números</h3>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Un proyecto de análisis de datos enfocado en comprender y mejorar el procesamiento judicial de delitos sexuales.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/acerca" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-foreground transition-colors">Acerca del Proyecto</Link></li>
              <li><Link href="/metodologia" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-foreground transition-colors">Metodología</Link></li>
              <li><Link href="/contacto" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-foreground transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Contacto</h3>
            <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4">
              Email: info@masalladelosnumeros.com<br />
              Tel: (123) 456-7890
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-muted-foreground dark:text-gray-400">
          © {new Date().getFullYear()} Más Allá de los Números. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}