'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Lightbulb, BarChartIcon as ChartBar, CheckCircle } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

const ChartCarousel = ({ images }: { images: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <div className="relative max-w-8xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0" key={index}>
              <div className="relative h-[600px] w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <Image
                  src={src}
                  alt={`Gráfica ${index + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  )
}

const hipotesis = [
  {
    id: 1,
    texto: "El número de víctimas de sexo femenino es mayor que el de sexo masculino en delitos sexuales.",
    modelo: "Estadística Descriptiva",
    conclusion: "La hipótesis se confirma. Los datos muestran una significativa mayoría de víctimas femeninas en casos de delitos sexuales.",
    imagenes: ["/images/h1.png"]
  },
  {
    id: 2,
    texto: "Más del 30% de las denuncias realizadas en el año 2024 corresponden a hechos ocurridos hace más de un año.",
    modelo: "Estadística Descriptiva",
    conclusion: "El análisis de los datos revela que la hipótesis se confirma con precisión: el 34.40% de las víctimas en denuncias del 2024 corresponden a hechos ocurridos antes de este año, lo que representa 16,493 víctimas de un total de 47,946. Este porcentaje supera el umbral del 30% propuesto inicialmente, evidenciando un significativo rezago en la presentación de denuncias, lo que podría estar relacionado con múltiples factores como barreras en el sistema de justicia, miedo de las víctimas, o complejidades psicológicas asociadas a la denuncia de delitos.",
    imagenes: ["/images/h2.png"]
  },
  {
    id: 3,
    texto: "Las víctimas que no tienen como país nacimiento víctima \"Colombia\" tienen un menor porcentaje de casos resueltos.",
    modelo: "Prueba de chi-cuadrado",
    conclusion: "Existe una diferencia significativa entre los dos grupos en términos de resolución de casos. Las víctimas que no nacieron en Colombia presentan un menor porcentaje de casos resueltos en comparación con las víctimas nacidas en Colombia.",
    imagenes: ["/images/h3.png", "/images/h3-1.png"]
  },
  {
    id: 4,
    texto: "Las víctimas del grupo etario \"Niño, Niña. Población de 0 a 13 años\" es mayor en comparación con el grupo etario \"Adolescente de 14 a 17 años\".",
    modelo: "Prueba Z para la Comparación de Proporciones",
    conclusion: "Aceptamos que la proporción de víctimas en el grupo de 0-13 años es significativamente mayor que la de 14-17 años.",
    imagenes: ["/images/h4.png", "/images/h4-1.png"]
  },
  {
    id: 5,
    texto: "El 70% de las víctimas hacen parte de la comunidad LGTBI en comparación a las otras comunidades para el año de denuncia 2024",
    modelo: "Prueba Z para la Comparación de Proporciones",
    conclusion: "Evidenciamos que la proporción de víctimas pertenecientes a la comunidad LGTBI es considerablemente menor que la proporción esperada del 70%",
    imagenes: ["/images/h5.png", "/images/h5-1.png"]
  },
  {
    id: 6,
    texto: "En el año de denuncia 2022, los delitos sexuales contra adultos mayores representaron el 10% del total de víctimas, mientras que en 2024 esta cifra aumentó al 15%.",
    modelo: "Prueba de chi-cuadrado",
    conclusion: "Esto significa que existe una asociación significativa entre el año de denuncia y el grupo etario (adultos mayores de 60 y no adultos mayores de 60). En 2022, la proporción de víctimas adultos mayores fue significativamente mayor de lo esperado (677 casos observados frente a 549.20 casos esperados), mientras que en 2024, la proporción de víctimas adultos mayores fue significativamente menor de lo esperado (296 casos observados frente a 423.80 casos esperados). Estos resultados indican que la distribución de víctimas adultos mayores no se mantiene constante entre los años analizados, sugiriendo posibles diferencias en la incidencia, denuncia o resolución de casos que afectan a este grupo etario.",
    imagenes: ["/images/h6-1.png", "/images/h6-2.png", "/images/h6.png",]
  },
  {
    id: 7,
    texto: "Se investigará si más del 50% de los casos denunciados en el año 2024 alcanzan la etapa de ejecución de penas.",
    modelo: "Prueba Z para proporciones",
    conclusion: "La hipótesis se rechaza. Menos del 50% de los casos denunciados en 2024 han alcanzado la etapa de ejecución de penas.",
    imagenes: ["/images/h7.png"]
  },
  {
    id: 8,
    texto: "Entre el 2020 y 2024 el delito \"ACTOS SEXUALES CON MENOR DE CATORCE AÑOS\" es mayor en comparación con el delito \"PORNOGRAFIA CON MENORES\".",
    modelo: "Test de Chi-cuadrado",
    conclusion: "La hipótesis se confirma. Los actos sexuales con menores de catorce años presentan una frecuencia significativamente mayor.",
    imagenes: ["/images/h8.png", "/images/h8-1.png"]
  },
  {
    id: 9,
    texto: "En los últimos 5 años Bogotá D. C. ha tenido menos denuncias de víctimas que el departamento de Antioquia.",
    modelo: "Análisis Descriptivo",
    conclusion: "Se concluye que Bogotá D.C. ha tenido más víctimas que Antioquia en los últimos cinco años. La hipótesis \"Bogotá D.C. ha tenido menos víctimas que Antioquia\" no se cumple, ya que el número total de víctimas en Bogotá D.C. fue mayor que en Antioquia.",
    imagenes: ["/images/h9.png", "/images/h9-1.png"]
  },
  {
    id: 10,
    texto: "El número de víctimas del año denuncia en 2024 con estado \"Activo\" aumentó en un 10% en comparación con el año denuncia 2023",
    modelo: "Comparación de Proporciones",
    conclusion: " El aumento del 14.26% en el estado \"Activo\" en 2024, frente al 2023, no solo cumple la hipótesis planteada, sino que sugiere que el sistema judicial o la cantidad de procesos en curso están incrementando.",
    imagenes: ["/images/h10.png"]
  }
]

export default function HipotesisPage() {
  const [activeTab, setActiveTab] = useState("1")

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-text">
          Hipótesis del Proyecto
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Análisis y resultados de las hipótesis planteadas en nuestra investigación sobre delitos sexuales
        </p>
      </section>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="flex w-full p-1 bg-muted rounded-full">
          {hipotesis.map((h) => (
            <TabsTrigger 
              key={h.id} 
              value={h.id.toString()} 
              className="flex-1 rounded-full px-4 py-2 text-sm transition-all text-gray-700 dark:text-gray-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {h.id}
            </TabsTrigger>
          ))}
        </TabsList>
        {hipotesis.map((h) => (
          <TabsContent key={h.id} value={h.id.toString()}>
            <Card className="overflow-hidden border-none shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary to-primary-foreground">
                <CardTitle className="text-2xl flex items-center gap-2 text-black dark:text-white">
                  <Lightbulb className="h-6 w-6" />
                  Hipótesis {h.id}
                </CardTitle>
                <CardDescription className="text-black/90 dark:text-white/90 text-lg">{h.texto}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6 bg-white dark:bg-gray-800">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                    <ChartBar className="h-5 w-5 text-primary" />
                    Gráfica{h.imagenes.length > 1 ? 's' : ''}
                  </h3>
                  <ChartCarousel images={h.imagenes} />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-gray-800 dark:text-white">
                    <ChartBar className="h-5 w-5 text-primary" />
                    Modelo Utilizado
                  </h3>
                  <Badge variant="secondary" className="text-lg py-1 px-3">{h.modelo}</Badge>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-gray-800 dark:text-white">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Conclusión
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{h.conclusion}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}