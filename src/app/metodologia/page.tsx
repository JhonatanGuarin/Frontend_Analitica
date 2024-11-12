import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Briefcase, 
  Database, 
  FileSpreadsheet, 
  BarChart2, 
  CheckCircle2, 
  Rocket,
  ArrowRight
} from 'lucide-react'

export default function Metodologia() {
  const fases = [
    {
      id: "comprension-negocio",
      titulo: "Comprensión del Negocio",
      icono: <Briefcase className="h-6 w-6" />,
      descripcion: "Definimos los objetivos del proyecto y los requisitos desde una perspectiva de negocio, luego convertimos este conocimiento en la definición de un problema de minería de datos y un plan preliminar.",
      actividades: [
        "Determinar objetivos del negocio",
        "Evaluar la situación",
        "Determinar objetivos de minería de datos",
        "Producir el plan del proyecto"
      ]
    },
    {
      id: "comprension-datos",
      titulo: "Comprensión de los Datos",
      icono: <Database className="h-6 w-6" />,
      descripcion: "Recolectamos los datos iniciales y procedemos a familiarizarnos con ellos. Identificamos problemas de calidad y detectamos subconjuntos interesantes para formar hipótesis sobre la información oculta.",
      actividades: [
        "Recolectar datos iniciales",
        "Describir los datos",
        "Explorar los datos",
        "Verificar la calidad de los datos"
      ]
    },
    {
      id: "preparacion-datos",
      titulo: "Preparación de los Datos",
      icono: <FileSpreadsheet className="h-6 w-6" />,
      descripcion: "Preparamos el conjunto de datos final que se utilizará en las herramientas de modelado. Incluye la selección, limpieza, construcción, integración y formateo de datos.",
      actividades: [
        "Seleccionar los datos",
        "Limpiar los datos",
        "Construir datos derivados",
        "Integrar los datos",
        "Formatear los datos"
      ]
    },
    {
      id: "modelado",
      titulo: "Modelado",
      icono: <BarChart2 className="h-6 w-6" />,
      descripcion: "Seleccionamos y aplicamos varias técnicas de modelado, calibrando sus parámetros para obtener resultados óptimos. Típicamente, existen varias técnicas para el mismo tipo de problema de minería de datos.",
      actividades: [
        "Seleccionar técnica de modelado",
        "Generar diseño de pruebas",
        "Construir modelo",
        "Evaluar modelo"
      ]
    },
    {
      id: "evaluacion",
      titulo: "Evaluación",
      icono: <CheckCircle2 className="h-6 w-6" />,
      descripcion: "Evaluamos el modelo para asegurarnos de que cumple con los objetivos de negocio. Revisamos el proceso para identificar si se ha omitido algún factor importante. Se toma una decisión sobre el uso de los resultados.",
      actividades: [
        "Evaluar resultados",
        "Revisar proceso",
        "Determinar próximos pasos"
      ]
    },
    {
      id: "implementacion",
      titulo: "Implementación",
      icono: <Rocket className="h-6 w-6" />,
      descripcion: "Los resultados del modelo se organizan y presentan de manera que el cliente pueda utilizarlos. Dependiendo de los requisitos, esta fase puede ser tan simple como generar un informe o tan compleja como implementar un proceso de minería de datos repetible.",
      actividades: [
        "Planificar implementación",
        "Planificar monitoreo y mantenimiento",
        "Producir informe final",
        "Revisar proyecto"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-text">
          Metodología
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Nuestro enfoque sistemático para el análisis de datos sobre delitos sexuales
        </p>
      </section>

      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <CardContent className="pt-6">
          <p className="text-lg">
            Utilizamos la metodología ASUM-DM (Analytics Solutions Unified Method for Data Mining), 
            un enfoque estructurado y probado para proyectos de análisis de datos. Este método 
            nos permite abordar de manera sistemática y rigurosa el complejo tema de los delitos 
            sexuales y su procesamiento judicial.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="comprension-negocio" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
          {fases.map((fase) => (
            <TabsTrigger key={fase.id} value={fase.id} className="text-xs md:text-sm">
              {fase.titulo}
            </TabsTrigger>
          ))}
        </TabsList>
        {fases.map((fase) => (
          <TabsContent key={fase.id} value={fase.id}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {fase.icono}
                  {fase.titulo}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {fase.descripcion}
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Actividades principales:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {fase.actividades.map((actividad, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {actividad}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="h-6 w-6 text-primary" />
            Herramientas y Técnicas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            En cada fase de nuestra metodología, empleamos diversas herramientas y técnicas 
            especializadas para garantizar un análisis riguroso y resultados confiables.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">R</Badge>
            <Badge variant="secondary">SQL</Badge>
            <Badge variant="secondary">Power BI</Badge>
            <Badge variant="secondary">Machine Learning</Badge>
            <Badge variant="secondary">Estadística Inferencial</Badge>
            <Badge variant="secondary">Visualización de Datos</Badge>
            <Badge variant="secondary">Análisis de Redes</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}