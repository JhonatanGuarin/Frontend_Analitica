import PowerBIDashboard from '@/components/PowerBIDashboard'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { BarChart2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
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
          Dashboard Interactivo
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explora y analiza los datos sobre delitos sexuales y su procesamiento judicial
        </p>
      </section>

      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart2 className="h-6 w-6 text-primary" />
            Visualización de Datos
          </CardTitle>
          <CardDescription>
            Análisis detallado y visualización interactiva de los datos recopilados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PowerBIDashboard url="https://app.powerbi.com/view?r=eyJrIjoiYzkxYTZkN2MtNmM5YS00ZmVkLWEzZDItNGRiYzY5MjZhNTFkIiwidCI6ImM2ZTIwZTQzLWNmY2QtNDg5ZS1hMjY2LTQxOGY1NmRmMTI0YyIsImMiOjR9" />
        </CardContent>
      </Card>

      <section className="grid gap-6 md:grid-cols-3 mt-8">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Filtros Avanzados</h3>
          <p className="text-sm text-muted-foreground">
            Utiliza los filtros para analizar datos específicos según tus necesidades
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Exportación de Datos</h3>
          <p className="text-sm text-muted-foreground">
            Descarga los datos en diferentes formatos para un análisis más detallado
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Actualizaciones en Tiempo Real</h3>
          <p className="text-sm text-muted-foreground">
            Los datos se actualizan automáticamente para mantener la información al día
          </p>
        </Card>
      </section>
    </div>
  )
}