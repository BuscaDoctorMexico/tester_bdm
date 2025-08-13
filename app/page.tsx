import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MainLayout from "@/components/main-layout"
import FeaturedSections from "@/components/featured-sections"
import SearchBar from "@/components/search-bar"

export const metadata: Metadata = {
  title: "Busca Doctor México | Encuentra médicos de confianza en México",
  description: "Encuentra médicos de confianza por ciudad, especialidad o padecimientos atendidos en México.",
  alternates: {
    canonical: 'https://buscadoctormexico.mx'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Busca Doctor México | Encuentra médicos de confianza",
    description: "Directorio médico más completo de México. Encuentra especialistas por ciudad, especialidad o padecimiento específico. Más de 80 especialidades médicas.",
    url: "https://buscadoctormexico.mx",
    siteName: "Busca Doctor México",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Busca Doctor México - Directorio Médico Completo",
        type: "image/png"
      }
    ],
    locale: "es_MX",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Busca Doctor México | Directorio Médico Completo",
    description: "Encuentra médicos especialistas por ciudad, especialidad o padecimiento en México. Más de 80 especialidades médicas verificadas.",
    images: ["/twitter-image.png"]
  }
}

export default function Home() {
  return (
    <MainLayout showSearch={false}>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Encuentra el médico adecuado para tu salud
            </h1>
            <p className="text-xl text-muted-foreground">
              Directorio completo de médicos en México, organizados por ciudad, especialidad y padecimientos atendidos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#search-section">
                  <Search className="mr-2 h-5 w-5" />
                  Buscar Médicos
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">
                  Conocer Más
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/buscadoctormexico_homepage_image.png"
              alt="Médicos profesionales"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search-section" className="py-12 scroll-mt-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Busca médicos por:</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encuentra el especialista que necesitas de manera rápida y sencilla
          </p>
        </div>

        <SearchBar className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="bg-primary/10 rounded-full p-3 inline-flex">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Por Ciudad</h3>
                <p className="text-muted-foreground">
                  Encuentra médicos cercanos a tu ubicación en cualquier ciudad de México.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="bg-primary/10 rounded-full p-3 inline-flex">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Por Especialidad</h3>
                <p className="text-muted-foreground">
                  Busca médicos por su especialidad médica, desde cardiología hasta pediatría.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="bg-primary/10 rounded-full p-3 inline-flex">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Por Padecimiento</h3>
                <p className="text-muted-foreground">
                  Encuentra especialistas que tratan tu condición o padecimiento específico.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Explora por categorías</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Navega por nuestras categorías más populares para encontrar el médico que necesitas
          </p>
        </div>

        <FeaturedSections />
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro directorio médico
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <details className="group bg-card rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              ¿Es gratuito buscar médicos en la plataforma?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Sí, completamente gratuito. Puedes buscar médicos por ciudad, especialidad o padecimiento sin ningún costo.
            </p>
          </details>

          <details className="group bg-card rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              ¿Los médicos están verificados?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Sí, verificamos la información de los médicos incluyendo cédulas profesionales y especialidades registradas.
            </p>
          </details>

          <details className="group bg-card rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              ¿Cómo busco un doctor cerca de mí?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Usa nuestro buscador seleccionando tu ciudad, luego elige si quieres buscar por especialidad médica o por un padecimiento específico.
            </p>
          </details>

          <details className="group bg-card rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              ¿Puedo agendar citas desde la plataforma?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              No, somos un directorio informativo. Contacta directamente al médico usando los teléfonos proporcionados para agendar tu cita.
            </p>
          </details>

          <details className="group bg-card rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              ¿Qué especialidades médicas incluyen?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Incluimos más de 80 especialidades médicas desde medicina general hasta subespecialidades pediátricas y quirúrgicas.
            </p>
          </details>

          <details className="group bg-card rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              ¿Cómo actualizo la información de mi consultorio?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Los médicos pueden contactarnos a través de la página de contacto para actualizar su información profesional y de consultorio.
            </p>
          </details>
        </div>
      </section>
    </MainLayout>
  )
}