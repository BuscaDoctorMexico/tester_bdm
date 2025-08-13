import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
 title: "Busca Doctor México | Encuentra médicos de confianza en México",
 description: "Encuentra médicos de confianza por ciudad, especialidad o padecimientos atendidos en México.",
 keywords: "médicos, doctores, especialistas, México, directorio médico",
 
 metadataBase: new URL('https://buscadoctormexico.mx'),
 alternates: {
   canonical: 'https://buscadoctormexico.mx'
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
   type: "website",
   countryName: "México"
 },
 twitter: {
   card: "summary_large_image",
   title: "Busca Doctor México | Directorio Médico Completo",
   description: "Encuentra médicos especialistas por ciudad, especialidad o padecimiento en México. Más de 80 especialidades médicas verificadas.",
   images: ["/twitter-image.png"],
   site: "@buscadoctormx"
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
 verification: {
   google: 'QNN0jVEy13PIPzRHgRW04pKECn2HvVJxkR6eAJAfiqg'
 }
}

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return (
   <html lang="es" suppressHydrationWarning>
       <head>
       {/* Favicons básicos */}
       <link rel="icon" href="/favicon.ico" />
       <link rel="icon" type="image/png" sizes="32x32" href="/buscadoctormexico_favicon_32.png" />
       
       {/* Apple Touch Icons mejorados */}
       <link rel="apple-touch-icon" sizes="180x180" href="/buscadoctormexico_favicon_180.png" />
       <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
       <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
       <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
       <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
       <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
       <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
       <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
       
       {/* Meta tags adicionales */}
       <meta name="theme-color" content="#3b82f6" />
       <meta name="color-scheme" content="light" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
       <meta name="format-detection" content="telephone=no" />
       <meta name="mobile-web-app-capable" content="yes" />
       <meta name="apple-mobile-web-app-capable" content="yes" />
       <meta name="apple-mobile-web-app-status-bar-style" content="default" />
       <meta name="apple-mobile-web-app-title" content="Busca Doctor MX" />
       <meta name="application-name" content="Busca Doctor México" />
       <meta name="msapplication-TileColor" content="#3b82f6" />
       <meta name="msapplication-config" content="/browserconfig.xml" />
       
       {/* Preconnect para performance */}
       <link rel="preconnect" href="https://fonts.googleapis.com" />
       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
       <link rel="preconnect" href="https://www.google-analytics.com" />
       <link rel="preconnect" href="https://www.googletagmanager.com" />
       
       {/* DNS Prefetch */}
       <link rel="dns-prefetch" href="//fonts.googleapis.com" />
       <link rel="dns-prefetch" href="//www.google-analytics.com" />
       
       {/* Manifest para PWA */}
       <link rel="manifest" href="/site.webmanifest" />
       
       {/* Google tag (gtag.js) */}
       <Script
         src="https://www.googletagmanager.com/gtag/js?id=G-43ZLD2HGVW"
         strategy="afterInteractive"
       />
       <Script id="gtag-init" strategy="afterInteractive">
         {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-43ZLD2HGVW');
         `}
       </Script>
       {/* Schema.org JSON-LD SUPER MEJORADO */}
       <Script id="schema-org" type="application/ld+json">
         {`
           {
             "@context": "https://schema.org",
             "@type": ["MedicalBusiness", "WebSite", "Organization", "LocalBusiness"],
             "name": "Busca Doctor México",
             "alternateName": ["Directorio Médico México", "Busca Doctor MX"],
             "description": "Directorio médico más completo de México con más de 80 especialidades médicas. Encuentra médicos especialistas verificados por ciudad, especialidad médica y padecimientos específicos.",
             "url": "https://buscadoctormexico.mx",
             "logo": {
               "@type": "ImageObject",
               "url": "https://buscadoctormexico.mx/buscadoctormexico_favicon_180.png",
               "width": 180,
               "height": 180,
               "caption": "Logo Busca Doctor México"
             },
             "image": [
               {
                 "@type": "ImageObject",
                 "url": "https://buscadoctormexico.mx/og-image.png",
                 "width": 1200,
                 "height": 630,
                 "caption": "Busca Doctor México - Directorio Médico"
               }
             ],
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
             "areaServed": [
               {
                 "@type": "Country",
                 "name": "México",
                 "alternateName": ["MX", "Estados Unidos Mexicanos"]
               },
               {
                 "@type": "State",
                 "name": "Jalisco",
                 "containedInPlace": {
                   "@type": "Country",
                   "name": "México"
                 }
               }
             ],
             "serviceType": [
               "Directorio Médico Online",
               "Búsqueda de Especialistas Médicos",
               "Información de Doctores Verificados",
               "Consulta de Especialidades Médicas",
               "Directorio de Consultorios"
             ],
             "priceRange": "Gratuito",
             "currenciesAccepted": "MXN",
             "paymentAccepted": "No aplica - Servicio gratuito",
             "openingHours": "Mo-Su 00:00-23:59",
             "medicalSpecialty": [
               "Psicología",
               "Odontología", 
               "Ginecología y Obstetricia",
               "Pediatría",
               "Medicina General",
               "Medicina Interna",
               "Ortopedia y Traumatología", 
               "Oftalmología",
               "Psiquiatría",
               "Dermatología",
               "Nutrición y Dietética",
               "Anestesiología",
               "Otorrinolaringología",
               "Neonatología",
               "Urología",
               "Medicina Estética y Reconstructiva",
               "Laboratorio Clínico",
               "Gastroenterología",
               "Cirugía General",
               "Neurocirugía",
               "Neumología",
               "Medicina Familiar",
               "Geriatría",
               "Alergología",
               "Radiología y Diagnóstico por Imagen",
               "Cirugía Pediátrica",
               "Reumatología",
               "Nefrología",
               "Neurología",
               "Oncología Médica",
               "Fisioterapia",
               "Hematología",
               "Medicina Integrativa y Complementaria",
               "Endocrinología, Diabetes y Metabolismo",
               "Cardiología",
               "Medicina de Urgencias y Cuidados Intensivos",
               "Rehabilitación y Medicina Física",
               "Infectología",
               "Medicina del Deporte",
               "Angiología",
               "Homeopatía",
               "Neurología Pediátrica",
               "Endoscopia",
               "Cirugía Maxilofacial",
               "Cirugía Vascular y Angiología",
               "Patología (Anatómica y Clínica)",
               "Proctología",
               "Inmunología",
               "Odontología Pediátrica",
               "Cardiología Pediátrica",
               "Cirugía Bariátrica",
               "Radiooncología",
               "Acupuntura",
               "Audiología",
               "Endocrinología Pediátrica",
               "Neumología Pediátrica",
               "Podología y Podiatría",
               "Otoneurología y Foniatría",
               "Medicina del Dolor y Algología",
               "Gastroenterología Pediátrica",
               "Sexología",
               "Salud Pública y Medicina Preventiva",
               "Naturopatía",
               "Cirugía Cardiotorácica",
               "Retina Médica y Quirúrgica",
               "Ginecología Oncológica",
               "Reumatología Pediátrica",
               "Cirugía oncológica",
               "Psiquiatría Infantil",
               "Quiropráctica",
               "Hematología Pediátrica",
               "Nefrología Pediátrica",
               "Dermatología Pediátrica",
               "Oncología Pediátrica",
               "Genética",
               "Optometría",
               "Neurofisiología",
               "Oftalmología Pediátrica",
               "Ortopedia Pediátrica",
               "Medicina del Enfermo Pediátrico en Estado Crítico",
               "Terapia ocupacional",
               "Infectología Pediátrica",
               "Otorrinolaringología pediátrica",
               "Ortodoncia",
               "Patología Bucal",
               "Psicopedagogía",
               "Enfermería"
             ],
             "contactPoint": [
               {
                 "@type": "ContactPoint",
                 "contactType": "customer service",
                 "email": "contacto@buscadoctormexico.com",
                 "availableLanguage": ["Spanish", "es-MX"],
                 "areaServed": "MX"
               }
             ],
             "potentialAction": [
               {
                 "@type": "SearchAction",
                 "target": "https://buscadoctormexico.mx/buscar?tipo={search_type}&valor={search_term_string}",
                 "query-input": "required name=search_term_string"
               }
             ],
             "knowsAbout": [
               "Más de 80 especialidades médicas en México",
               "Directorio médico mexicano completo",
               "Especialistas pediátricos",
               "Medicina general y especializada",
               "Cirugías especializadas",
               "Medicina preventiva",
               "Salud integral México"
             ],
             "offers": {
               "@type": "Offer",
               "name": "Búsqueda Gratuita de Médicos Especialistas",
               "description": "Acceso gratuito a más de 80 especialidades médicas en México",
               "price": "0",
               "priceCurrency": "MXN",
               "availability": "https://schema.org/InStock"
             },
             "foundingDate": "2024",
             "slogan": "Conectando pacientes con médicos de confianza en México",
             "sameAs": [
               "https://buscadoctormexico.mx"
             ]
           }
         `}
       </Script>
       {/* Schema adicional para WebSite mejorado */}
       <Script id="website-schema" type="application/ld+json">
         {`
           {
             "@context": "https://schema.org",
             "@type": "WebSite",
             "name": "Busca Doctor México",
             "alternateName": "Directorio Médico México",
             "url": "https://buscadoctormexico.mx",
             "description": "Directorio médico más completo de México con más de 80 especialidades médicas",
             "potentialAction": [
               {
                 "@type": "SearchAction",
                 "target": "https://buscadoctormexico.mx/buscar?tipo=especialidad&valor={search_term_string}",
                 "query-input": "required name=search_term_string"
               },
               {
                 "@type": "SearchAction",
                 "target": "https://buscadoctormexico.mx/buscar?tipo=ciudad&valor={search_term_string}",
                 "query-input": "required name=search_term_string"
               }
             ],
             "inLanguage": "es-MX",
             "publisher": {
               "@type": "Organization",
               "name": "Busca Doctor México",
               "logo": {
                 "@type": "ImageObject",
                 "url": "https://buscadoctormexico.mx/buscadoctormexico_favicon_180.png"
               }
             }
           }
         `}
       </Script>
       {/* FAQ Schema */}
       <Script id="faq-schema" type="application/ld+json">
         {`
           {
             "@context": "https://schema.org",
             "@type": "FAQPage",
             "mainEntity": [
               {
                 "@type": "Question",
                 "name": "¿Es gratuito buscar médicos en la plataforma?",
                 "acceptedAnswer": {
                   "@type": "Answer",
                   "text": "Sí, completamente gratuito. Puedes buscar médicos por ciudad, especialidad o padecimiento sin ningún costo."
                 }
               },
               {
                 "@type": "Question", 
                 "name": "¿Los médicos están verificados?",
                 "acceptedAnswer": {
                   "@type": "Answer",
                   "text": "Sí, verificamos la información de los médicos incluyendo cédulas profesionales y especialidades registradas."
                 }
               },
               {
                 "@type": "Question",
                 "name": "¿Cómo busco un doctor cerca de mí?",
                 "acceptedAnswer": {
                   "@type": "Answer", 
                   "text": "Usa nuestro buscador seleccionando tu ciudad, luego elige si quieres buscar por especialidad médica o por un padecimiento específico."
                 }
               },
               {
                 "@type": "Question",
                 "name": "¿Puedo agendar citas desde la plataforma?",
                 "acceptedAnswer": {
                   "@type": "Answer",
                   "text": "No, somos un directorio informativo. Contacta directamente al médico usando los teléfonos proporcionados para agendar tu cita."
                 }
               },
               {
                 "@type": "Question",
                 "name": "¿Qué especialidades médicas incluyen?", 
                 "acceptedAnswer": {
                   "@type": "Answer",
                   "text": "Incluimos más de 80 especialidades médicas desde medicina general hasta subespecialidades pediátricas y quirúrgicas."
                 }
               },
               {
                 "@type": "Question",
                 "name": "¿Cómo actualizo la información de mi consultorio?",
                 "acceptedAnswer": {
                   "@type": "Answer",
                   "text": "Los médicos pueden contactarnos a través de la página de contacto para actualizar su información profesional y de consultorio."
                 }
               }
             ]
           }
         `}
       </Script>
       {/* Schema LocalBusiness adicional para Zapopan */}
       <Script id="local-business-schema" type="application/ld+json">
         {`
           {
             "@context": "https://schema.org",
             "@type": "LocalBusiness",
             "name": "Busca Doctor México",
             "description": "Oficina principal del directorio médico más completo de México",
             "url": "https://buscadoctormexico.mx",
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
             "openingHours": "Mo-Su 00:00-23:59",
             "priceRange": "Gratuito",
             "telephone": "No aplica - Servicio online",
             "areaServed": {
               "@type": "Country",
               "name": "México"
             }
           }
         `}
       </Script>
       <meta name="google-site-verification" content="QNN0jVEy13PIPzRHgRW04pKECn2HvVJxkR6eAJAfiqg" />
     </head>
     <body className={inter.className}>
       <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
         <AuthProvider>{children}</AuthProvider>
       </ThemeProvider>
     </body>
   </html>
 )
}