import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart2, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-text">
          Más Allá de los Números
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Un análisis profundo de delitos sexuales y su procesamiento judicial
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart2 className="h-6 w-6 text-primary" />
              Dashboard Interactivo
            </CardTitle>
            <CardDescription>
              Explora los datos y estadísticas a través de visualizaciones interactivas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <img 
              src="/images/dashboard.png" 
              alt="Vista previa del dashboard"
              className="rounded-lg w-full"
            />
            <Button asChild className="w-full">
              <Link href="/dashboard">
                Explorar dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              Asistente Virtual
            </CardTitle>
            <CardDescription>
              Resuelve tus dudas sobre el análisis con nuestro chat de IA
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <img 
              src="/placeholder.svg?height=200&width=400" 
              alt="Vista previa del asistente virtual"
              className="rounded-lg w-full"
            />
            <Button asChild className="w-full">
              <Link href="/asistente">
                Ir al asistente <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

    </div>
  )
}