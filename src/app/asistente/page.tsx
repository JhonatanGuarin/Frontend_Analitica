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
          </CardHeader>
          <CardContent>
            <AIChat />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}