import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/components/main-layout";
import FeaturedSections from "@/components/featured-sections";
import SearchBar from "@/components/search-bar";

export const metadata: Metadata = {
  title: "Busca Doctor México | Médicos de Confianza",
  description: "Encuentra médicos especialistas en México por ciudad, especialidad o padecimiento. Directorio con más de 80 especialidades verificadas.",
  alternates: {
    canonical: "https://buscadoctormexico.mx",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Busca Doctor México | Médicos de Confianza",
    description: "Directorio médico de México. Encuentra especialistas por ciudad, especialidad o padecimiento. Más de 80 especialidades verificadas.",
    url: "https://buscadoctormexico.mx",
    siteName: "Busca Doctor México",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Busca Doctor México - Directorio Médico",
        type: "image/png",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Busca Doctor México | Directorio Médico",
    description: "Encuentra médicos especialistas en México por ciudad, especialidad o padecimiento. Más de 80 especialidades verificadas.",
    images: ["/twitter-image.png"],
  },
};

export default function Home() {
  return (
    <MainLayout showSearch={false}>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Encuentra médicos de confianza en México
            </h1>
            <p className="text-xl text-muted-foreground">
              Busca Doctor México es el directorio más completo para encontrar médicos especialistas por ciudad, especialidad o padecimientos atendidos en todo el país.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/search">
                  <Search className="mr-2 h-5 w-5" />
                  Buscar Médicos
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">
                  Sobre Nosotros
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/buscadoctormexico_homepage_image.png"
              alt="Médicos especialistas en México"
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
          <h2 className="text-3xl font-bold mb-4">Busca médicos especialistas por:</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encuentra médicos de confianza de manera rápida y sencilla en cualquier ciudad de México.
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
                  Encuentra médicos especialistas cercanos a tu ubicación en cualquier ciudad de México, desde la Ciudad de México hasta Tijuana.
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
                  Busca médicos por especialidad, como cardiología, pediatría, ortopedia o cualquier otra de las más de 80 especialidades disponibles.
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
                  Encuentra médicos especialistas que tratan condiciones específicas, como diabetes, hipertensión o problemas ortopédicos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Por qué elegir Busca Doctor México</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Somos el directorio médico más confiable y completo de México, diseñado para ayudarte a encontrar el especialista adecuado para tus necesidades de salud.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Médicos Verificados</h3>
            <p className="text-muted-foreground">
              Todos los médicos en nuestro directorio están verificados, con cédulas profesionales y especialidades registradas para garantizar la calidad y confianza.
            </p>
            <h3 className="text-xl font-medium">Búsqueda Personalizada</h3>
            <p className="text-muted-foreground">
              Nuestra herramienta de búsqueda te permite encontrar médicos por ciudad, especialidad o padecimiento, adaptándose a tus necesidades específicas.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Amplia Cobertura</h3>
            <p className="text-muted-foreground">
              Cubrimos todo México, desde grandes ciudades hasta poblaciones más pequeñas, con un directorio que incluye más de 80 especialidades médicas.
            </p>
            <h3 className="text-xl font-medium">Fácil de Usar</h3>
            <p className="text-muted-foreground">
              Nuestra plataforma es intuitiva y fácil de navegar, permitiéndote encontrar médicos de confianza en pocos clics.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Explora especialidades populares</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Navega por nuestras categorías más buscadas para encontrar médicos especialistas en México.
          </p>
        </div>
        <FeaturedSections />
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes sobre Médicos en México</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resolvemos tus dudas más comunes sobre cómo encontrar médicos especialistas en nuestro directorio.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <details className="group bg-card rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              ¿Es gratuito buscar médicos especialistas en la plataforma?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Sí, buscar médicos en Busca Doctor México es completamente gratuito. Puedes explorar nuestro directorio por ciudad, especialidad o padecimiento sin costo alguno.
            </p>
          </details>

          <details className="group bg-card rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              ¿Los médicos están verificados?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Todos los médicos en nuestro directorio están verificados. Validamos cédulas profesionales y especialidades para garantizar que encuentres profesionales de confianza.
            </p>
          </details>

          <details className="group bg-card rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              ¿Cómo encuentro un médico cerca de mí?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Usa nuestro buscador, selecciona tu ciudad y filtra por especialidad o padecimiento. En pocos pasos encontrarás médicos especialistas cercanos a tu ubicación.
            </p>
          </details>

          <details className="group bg-card rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              ¿Puedo agendar citas desde la plataforma?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Somos un directorio informativo. Para agendar citas, contacta directamente al médico usando los datos de contacto proporcionados en su perfil.
            </p>
          </details>

          <details className="group bg-card rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              ¿Qué especialidades médicas están disponibles?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Contamos con más de 80 especialidades médicas, desde medicina general hasta subespecialidades como cardiología, neurología, pediatría y más.
            </p>
          </details>

          <details className="group bg-card rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
              ¿Cómo actualizo la información de mi consultorio médico?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Los médicos pueden actualizar su información contactándonos a través de nuestra <Link href="/contact">página de contacto</Link>. Revisaremos y actualizaremos los datos rápidamente.
            </p>
          </details>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Tu salud en manos de médicos de confianza</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            En Busca Doctor México, nuestro objetivo es conectar a los pacientes con médicos especialistas verificados en todo el país. Explora nuestro directorio y encuentra el cuidado que necesitas.
          </p>
        </div>
        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            Encontrar un médico especialista en México nunca ha sido tan fácil. Con Busca Doctor México, puedes buscar médicos por ciudad, especialidad o padecimiento, asegurándote de encontrar el profesional adecuado para tus necesidades de salud. Nuestro directorio incluye médicos verificados en más de 80 especialidades, desde cardiología y pediatría hasta neurología y ortopedia, cubriendo todo el territorio mexicano.
          </p>
          <p className="text-muted-foreground">
            Nuestra plataforma está diseñada para ser intuitiva y accesible. Ya sea que busques un médico en la Ciudad de México, Guadalajara o Monterrey, nuestro buscador te ayudará a encontrar profesionales cercanos. Además, ofrecemos información detallada sobre cada médico, incluyendo sus especialidades, ubicación y datos de contacto, para que puedas tomar decisiones informadas.
          </p>
          <p className="text-muted-foreground">
            La verificación de los médicos es una de nuestras prioridades. Nos aseguramos de que cada profesional en nuestro directorio cuente con cédula profesional y especialidades registradas, brindándote la confianza de que estás en buenas manos. Ya sea que necesites un especialista para tratar una condición específica o un médico general para una consulta de rutina, Busca Doctor México es tu aliado para cuidar tu salud.
          </p>
          <p className="text-muted-foreground">
            Explora nuestras categorías más populares, como cardiología, ginecología, pediatría y ortopedia, o usa nuestro buscador para encontrar médicos que traten padecimientos específicos, como diabetes, hipertensión o problemas musculoesqueléticos. Con Busca Doctor México, tienes acceso a un directorio completo, confiable y fácil de usar, diseñado para ayudarte a encontrar el cuidado médico que necesitas.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}