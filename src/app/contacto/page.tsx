import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contacto() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-text">
          Contáctanos
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Estamos aquí para escucharte y responder tus preguntas
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mail className="h-6 w-6 text-primary" />
              <span>Email</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium mb-4">jhonatan.guarin02@uptc.edu.co  </p>
            <p className="text-lg font-medium mb-4">andres.sanabria@uptc.edu.co  </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="h-6 w-6 text-primary" />
              <span>Teléfono</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium mb-4">3219481516</p>
            <p className="text-lg font-medium mb-4">3219481516</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span>Dirección</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium mb-4">Sogamoso, Boyacá</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Preguntas Frecuentes</CardTitle>
          <CardDescription>
            Encuentra respuestas rápidas a las preguntas más comunes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">¿Cómo se utilizan los datos recopilados?</h3>
            <p className="text-sm text-muted-foreground">
              Los datos se utilizan exclusivamente para fines de investigación y análisis, siempre respetando la privacidad y el anonimato de las personas involucradas.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">¿Ofrecen presentaciones o charlas sobre sus hallazgos?</h3>
            <p className="text-sm text-muted-foreground">
              Sí, regularmente organizamos presentaciones y webinars para compartir nuestros hallazgos. Suscríbete a nuestro boletín para mantenerte informado.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}