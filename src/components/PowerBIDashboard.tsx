'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'

interface PowerBIDashboardProps {
  url: string;
  loadingTime?: number;
}

export default function PowerBIDashboard({ url, loadingTime = 1000 }: PowerBIDashboardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), loadingTime)
    return () => clearTimeout(timer)
  }, [loadingTime])

  const handleIframeError = () => {
    setError('Error al cargar el dashboard. Por favor, intente de nuevo más tarde.')
  }

  if (error) {
    return (
      <Card className="w-full aspect-video flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </Card>
    )
  }

  return (
    <Card className="w-full aspect-video relative overflow-hidden">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
          <div className="animate-pulse text-muted-foreground">Cargando dashboard...</div>
        </div>
      ) : (
        <iframe
          title="Dashboard de Análisis"
          width="100%"
          height="100%"
          src={url}
          frameBorder="0"
          allowFullScreen
          onError={handleIframeError}
        />
      )}
    </Card>
  )
}