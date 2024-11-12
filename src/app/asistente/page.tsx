import AIChat from '@/components/AIChat'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { MessageSquare, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AsistentePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Volver al inicio
          </Link>
        </Button>
      </div>

      <section className="text-center space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tight gradient-text">
          Asistente Virtual
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Resuelve tus dudas sobre el análisis de datos y obtén información detallada
        </p>
      </section>

      <div className="max-w-3xl mx-auto">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              Chat Interactivo
            </CardTitle>
            <CardDescription>
              Realiza preguntas sobre el análisis y obtén respuestas detalladas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AIChat />
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Preguntas Frecuentes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• ¿Cómo se recopilan los datos?</li>
              <li>• ¿Qué metodología se utiliza?</li>
              <li>• ¿Cómo se garantiza la precisión?</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Temas Populares</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Estadísticas recientes</li>
              <li>• Tendencias principales</li>
              <li>• Análisis comparativo</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}