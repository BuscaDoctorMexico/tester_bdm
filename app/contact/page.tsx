import type { Metadata } from "next"
import Link from "next/link"
import Script from 'next/script'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import MainLayout from "@/components/main-layout"
import Breadcrumbs from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Contacto | Busca Doctor México",
  description: "Contáctanos para obtener más información sobre el Busca Doctor México.",
  alternates: {
    canonical: 'https://buscadoctormexico.mx/contact'  
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
    title: "Contacto | Busca Doctor México",
    description: "Contáctanos para obtener más información sobre nuestro directorio médico. Preguntas frecuentes y información de contacto.",
    url: "https://buscadoctormexico.mx/contact",
    siteName: "Busca Doctor México",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contacto - Busca Doctor México"
      }
    ],
    locale: "es_MX",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Busca Doctor México",
    description: "Contáctanos para obtener más información sobre nuestro directorio médico",
    images: ["/twitter-image.png"]
  }
}

export default function ContactPage() {
  const breadcrumbItems = [
    {
      label: "Contacto",
      current: true
    }
  ]

  return (
    <>
      <Script id="contact-page-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": ["ContactPage", "WebPage"],
            "name": "Contacto - Busca Doctor México",
            "description": "Página de contacto del directorio médico más completo de México",
            "url": "https://buscadoctormexico.mx/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Busca Doctor México",
              "email": "contacto@buscadoctormexico.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av Paseo Royal Country #4596",
                "addressLocality": "Zapopan",
                "addressRegion": "Jalisco",
                "postalCode": "44610",
                "addressCountry": "MX",
                "name": "Colonia Puerta de Hierro"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "contacto@buscadoctormexico.com",
                  "availableLanguage": ["Spanish", "es-MX"],
                  "areaServed": "MX"
                }
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
                  "name": "Contacto",
                  "item": "https://buscadoctormexico.mx/contact"
                }
              ]
            }
          }
        `}
      </Script>

      {/* FAQ Schema específico para esta página */}
      <Script id="contact-faq-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cómo puedo buscar un médico en el directorio?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Puedes buscar por ciudad, especialidad o padecimiento atendido usando los menús desplegables en la parte superior. Luego, haz clic en 'Buscar' para ver los resultados."
                }
              },
              {
                "@type": "Question",
                "name": "¿Por qué no veo resultados al cargar la página?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Para mantener la experiencia limpia y rápida, no mostramos resultados automáticamente. Primero debes realizar una búsqueda con los filtros disponibles."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué información muestra cada perfil de médico?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cada perfil incluye nombre, número de cédula, especialidades, padecimientos tratados, teléfonos, direcciones y ciudades donde consulta."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué significan los botones 'Ver más' en los perfiles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Los botones 'Ver más' expanden secciones como especialidades, teléfonos y padecimientos para mostrar información adicional sin saturar la vista principal."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué hago si no encuentro al médico o especialidad que busco?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Puedes intentar buscar con diferentes filtros o revisar la sección de 'Especialidades', 'Ciudades' o 'Padecimientos Atendidos' destacados en la página de inicio."
                }
              }
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
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Contacto</h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preguntas Frecuentes</CardTitle>
              <CardDescription>
                Encuentra respuestas a las preguntas más comunes sobre nuestro directorio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>¿Cómo puedo buscar un médico en el directorio?</AccordionTrigger>
                  <AccordionContent>
                    Puedes buscar por ciudad, especialidad o padecimiento atendido usando los menús desplegables en la parte superior. Luego, haz clic en "Buscar" para ver los resultados.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>¿Por qué no veo resultados al cargar la página?</AccordionTrigger>
                  <AccordionContent>
                    Para mantener la experiencia limpia y rápida, no mostramos resultados automáticamente. Primero debes realizar una búsqueda con los filtros disponibles.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>¿Qué información muestra cada perfil de médico?</AccordionTrigger>
                  <AccordionContent>
                    Cada perfil incluye nombre, número de cédula, especialidades, padecimientos tratados, teléfonos, direcciones y ciudades donde consulta.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>¿Qué significan los botones "Ver más" en los perfiles?</AccordionTrigger>
                  <AccordionContent>
                    Los botones "Ver más" expanden secciones como especialidades, teléfonos y padecimientos para mostrar información adicional sin saturar la vista principal.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>¿Qué hago si no encuentro al médico o especialidad que busco?</AccordionTrigger>
                  <AccordionContent>
                    Puedes intentar buscar con diferentes filtros o revisar la sección de "Especialidades", "Ciudades" o "Padecimientos Atendidos" destacados en la página de inicio.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Correo Electrónico</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:contacto@buscadoctormexico.com" className="text-primary hover:underline">
                      contacto@buscadoctormexico.com
                    </a>
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Dirección</h3>
                  <p className="text-muted-foreground">
                    Av Paseo Royal Country #4596
                    <br />
                    44610, Colonia Puerta de Hierro
                    <br />
                    Zapopan, Jalisco
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    </>
  )
}