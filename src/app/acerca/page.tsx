import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BarChart2, Scale, Users, TrendingUp } from 'lucide-react'

export default function AcercaDe() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-text">
          Más Allá de los Números
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Porque cada caso cuenta y cada víctima merece justicia
        </p>
      </section>
      
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            Objetivo del Proyecto
          </CardTitle>
        </CardHeader>
        <CardContent className="text-lg">
          <p>
            "Más Allá de los Números" es una iniciativa que busca analizar y comprender
            en profundidad los patrones y tendencias en casos de delitos sexuales y su
            procesamiento en el sistema judicial colombiano. Nuestro objetivo es contribuir
            a la mejora de las políticas públicas y la administración de justicia, motivando
            un cambio real para ofrecer un proceso más eficiente y justo para las víctimas.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart2 className="h-6 w-6 text-primary" />
              Nuestro Enfoque
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Utilizamos análisis de datos avanzado y visualizaciones interactivas para
              presentar información compleja de manera accesible y comprensible,
              facilitando la toma de decisiones informada y la comprensión pública de
              esta importante problemática.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Análisis de Datos</Badge>
              <Badge variant="secondary">Visualización Interactiva</Badge>
              <Badge variant="secondary">Inteligencia Artificial</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Impacto y Beneficiarios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Víctimas de delitos sexuales</li>
              <li>• Instituciones judiciales</li>
              <li>• Organizaciones de derechos humanos</li>
              <li>• Formuladores de políticas públicas</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Datos y Análisis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">Conteo de Víctimas</h3>
              <p className="text-sm text-muted-foreground">
                Registramos el número de víctimas de delitos sexuales, incluyendo variables como
                el año de denuncia, ubicación geográfica y características de las víctimas.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Conteo de Procesos</h3>
              <p className="text-sm text-muted-foreground">
                Analizamos los procesos judiciales relacionados con delitos sexuales, su estado,
                duración y resultados para identificar patrones y áreas de mejora.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Nuestro Compromiso</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Nos dedicamos a ir más allá de las estadísticas, buscando entender el proceso judicial
          en su contexto para generar un cambio significativo en la forma en que se manejan los
          casos de delitos sexuales en Colombia.
        </p>
      </section>
    </div>
  )
}