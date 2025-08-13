import type { Metadata } from "next"
import Link from "next/link"
import Script from 'next/script'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import MainLayout from "@/components/main-layout"
import Breadcrumbs from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Acerca de | Busca Doctor México",
  description: "Información sobre el Busca Doctor México, nuestra misión y desarrollo.",
  alternates: {
    canonical: 'https://buscadoctormexico.mx/about'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Acerca de Busca Doctor México",
    description: "Conoce nuestra misión de conectar pacientes con médicos de confianza en México. Valores de accesibilidad, confiabilidad e innovación.",
    url: "https://buscadoctormexico.mx/about",
    siteName: "Busca Doctor México",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Acerca de - Busca Doctor México"
      }
    ],
    locale: "es_MX",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Acerca de | Busca Doctor México",
    description: "Conoce nuestra misión de conectar pacientes con médicos de confianza en México",
    images: ["/twitter-image.png"]
  }
}

export default function AboutPage() {
  const breadcrumbItems = [
    {
      label: "Acerca de",
      current: true
    }
  ]

  return (
    <>
      {/* Schema para About Page */}
      <Script id="about-page-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": ["AboutPage", "WebPage"],
            "name": "Acerca de Busca Doctor México",
            "description": "Información sobre Busca Doctor México, nuestra misión de conectar pacientes con médicos de confianza en México",
            "url": "https://buscadoctormexico.mx/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Busca Doctor México",
              "description": "Directorio médico que conecta pacientes con médicos especializados en México",
              "url": "https://buscadoctormexico.mx",
              "foundingDate": "2024",
              "mission": "Facilitar el acceso a la atención médica de calidad en México, conectando a pacientes con médicos especializados de manera rápida y eficiente",
              "values": [
                "Accesibilidad - Creemos que todos merecen acceso a información médica clara y precisa",
                "Confiabilidad - Verificamos la información de los médicos para garantizar datos precisos y actualizados", 
                "Privacidad - Respetamos y protegemos la privacidad de nuestros usuarios y médicos registrados",
                "Innovación - Mejoramos constantemente nuestra plataforma para ofrecer la mejor experiencia posible"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "México"
              },
              "serviceType": "Directorio Médico Online",
              "email": "contacto@buscadoctormexico.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av Paseo Royal Country #4596",
                "addressLocality": "Zapopan",
                "addressRegion": "Jalisco", 
                "postalCode": "44610",
                "addressCountry": "MX"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contacto@buscadoctormexico.com",
                "availableLanguage": ["Spanish", "es-MX"]
              },
              "knowsAbout": [
                "Directorio de médicos en México",
                "Especialidades médicas",
                "Búsqueda de doctores por ciudad",
                "Atención médica especializada",
                "Información médica verificada"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://buscadoctormexico.mx"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Acerca de",
                  "item": "https://buscadoctormexico.mx/about"
                }
              ]
            },
            "isPartOf": {
              "@type": "WebSite",
              "name": "Busca Doctor México",
              "url": "https://buscadoctormexico.mx"
            },
            "inLanguage": "es-MX"
          }
        `}
      </Script>

      {/* Schema adicional para la organización */}
      <Script id="organization-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": ["Organization", "MedicalBusiness"],
            "name": "Busca Doctor México",
            "alternateName": "Directorio Médico México",
            "description": "Plataforma digital que facilita la búsqueda de médicos especializados en México por ciudad, especialidad y padecimientos",
            "url": "https://buscadoctormexico.mx",
            "logo": "https://buscadoctormexico.mx/buscadoctormexico_favicon_180.png",
            "email": "contacto@buscadoctormexico.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av Paseo Royal Country #4596, Colonia Puerta de Hierro",
              "addressLocality": "Zapopan",
              "addressRegion": "Jalisco",
              "postalCode": "44610", 
              "addressCountry": "MX"
            },
            "areaServed": {
              "@type": "Country",
              "name": "México",
              "alternateName": "MX"
            },
            "serviceType": [
              "Directorio Médico Online",
              "Búsqueda de Especialistas Médicos",
              "Información Médica Verificada"
            ],
            "foundingDate": "2024",
            "slogan": "Conectando pacientes con médicos de confianza en México",
            "knowsAbout": [
              "Medicina General",
              "Especialidades Médicas", 
              "Directorio de Doctores",
              "Atención Médica México",
              "Búsqueda de Especialistas"
            ]
          }
        `}
      </Script>

      <MainLayout showSearch={false}>
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} className="mb-4" />

        <Button variant="ghost" asChild className="mb-6">
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Acerca del Busca Doctor México</h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Nuestra Misión</CardTitle>
              <CardDescription>Conectando pacientes con médicos de confianza en México</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                El Busca Doctor México nació con la misión de facilitar el acceso a la atención médica de calidad en
                México, conectando a pacientes con médicos especializados de manera rápida y eficiente.
              </p>
              <p>
                Entendemos que encontrar el médico adecuado para una condición específica puede ser un proceso complicado.
                Por eso, hemos desarrollado una plataforma que permite a los usuarios buscar médicos por ciudad,
                especialidad o padecimiento específico, simplificando el proceso de encontrar la atención médica adecuada.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Nuestros Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="font-medium">Accesibilidad</span>
                  <span className="text-muted-foreground">
                    Creemos que todos merecen acceso a información médica clara y precisa.
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">Confiabilidad</span>
                  <span className="text-muted-foreground">
                    Verificamos la información de los médicos para garantizar datos precisos y actualizados.
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">Privacidad</span>
                  <span className="text-muted-foreground">
                    Respetamos y protegemos la privacidad de nuestros usuarios y médicos registrados.
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">Innovación</span>
                  <span className="text-muted-foreground">
                    Mejoramos constantemente nuestra plataforma para ofrecer la mejor experiencia posible.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Si tienes preguntas, sugerencias o necesitas ayuda, no dudes en contactarnos:</p>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Correo electrónico:</span>{" "}
                  <a href="mailto:contacto@buscadoctormexico.com" className="text-primary hover:underline">
                    contacto@buscadoctormexico.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    </>
  )
}