import type { Metadata } from "next"
import { Suspense } from "react"
import Script from 'next/script'
import SearchResults from "@/components/search-results"
import SearchResultsSkeleton from "@/components/search-results-skeleton"
import MainLayout from "@/components/main-layout"
import Breadcrumbs from "@/components/breadcrumbs"

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}): Promise<Metadata> {
  const tipo = typeof searchParams.tipo === "string" ? searchParams.tipo : ""
  const valor = typeof searchParams.valor === "string" ? searchParams.valor : ""
  const ciudad = typeof searchParams.ciudad === "string" ? searchParams.ciudad : undefined

  if (!tipo || !valor) {
    return {
      title: "Buscar Médicos | Busca Doctor México",
      description: "Resultados de búsqueda de médicos por ciudad, especialidad o padecimientos atendidos.",
      robots: {
        index: false,
        follow: true,
        noarchive: true
      }
    }
  }

  const searchType = tipo === "ciudad" ? "ciudad" : 
                    tipo === "especialidad" ? "especialidad" : 
                    "padecimiento";

  const searchQuery = ciudad && tipo !== "ciudad" ? `${valor} en ${ciudad}` : valor;
  const pageTitle = `${searchType === "ciudad" ? "Médicos en" : searchType === "especialidad" ? "Especialistas en" : "Médicos para"} ${searchQuery} | Busca Doctor México`;
  const pageDescription = `Encuentra médicos especialistas en ${searchQuery}. Directorio completo con información verificada de contacto, especialidades y padecimientos atendidos en México.`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `https://buscadoctormexico.mx/buscar?tipo=${tipo}&valor=${encodeURIComponent(valor)}${ciudad ? `&ciudad=${encodeURIComponent(ciudad)}` : ''}`
    },
    robots: {
      index: true,
      follow: true,
      noarchive: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-snippet': 300,
      },
    },
    openGraph: {
      title: `Especialistas en ${searchQuery} | Busca Doctor México`,
      description: pageDescription,
      url: `https://buscadoctormexico.mx/buscar?tipo=${tipo}&valor=${encodeURIComponent(valor)}${ciudad ? `&ciudad=${encodeURIComponent(ciudad)}` : ''}`,
      siteName: "Busca Doctor México",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `Médicos especialistas en ${searchQuery} - Busca Doctor México`,
          type: "image/png"
        }
      ],
      locale: "es_MX",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `Especialistas en ${searchQuery}`,
      description: `Encuentra médicos especialistas en ${searchQuery}. Directorio médico completo en México.`,
      images: ["/twitter-image.png"]
    }
  }
}

function generateSearchPageSchema(tipo: string, valor: string, ciudad?: string) {
  if (!tipo || !valor) return '';

  const searchType = tipo === "ciudad" ? "Ciudad" : 
                    tipo === "especialidad" ? "Especialidad" : 
                    "Padecimiento";

  const searchQuery = ciudad && tipo !== "ciudad" ? 
    `${valor} en ${ciudad}` : valor;

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["SearchResultsPage", "WebPage"],
    "name": `Resultados de búsqueda: ${searchQuery}`,
    "description": `Directorio de médicos especialistas en ${searchQuery} en México`,
    "url": `https://buscadoctormexico.mx/buscar?tipo=${tipo}&valor=${encodeURIComponent(valor)}${ciudad ? `&ciudad=${encodeURIComponent(ciudad)}` : ''}`,
    "about": {
      "@type": "Thing",
      "name": searchQuery,
      "description": `Búsqueda de médicos por ${searchType.toLowerCase()}: ${valor}`
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": `Médicos especialistas en ${searchQuery}`,
      "description": `Lista de médicos y especialistas médicos para ${searchQuery}`,
      "itemListElement": []
    },
    "provider": {
      "@type": "Organization", 
      "name": "Busca Doctor México",
      "url": "https://buscadoctormexico.mx"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://buscadoctormexico.mx/buscar?tipo={search_type}&valor={search_term}",
      "query-input": "required name=search_term"
    },
    "inLanguage": "es-MX",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Busca Doctor México",
      "url": "https://buscadoctormexico.mx"
    }
  });
}

function generateBreadcrumbSchema(tipo: string, valor: string, ciudad?: string) {
  if (!tipo || !valor) return '';

  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://buscadoctormexico.mx"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Buscar Médicos",
      "item": "https://buscadoctormexico.mx/buscar"
    }
  ];

  const searchLabel = ciudad && tipo !== "ciudad" ? 
    `${valor} en ${ciudad}` : valor;

  breadcrumbs.push({
    "@type": "ListItem",
    "position": 3,
    "name": searchLabel,
    "item": `https://buscadoctormexico.mx/buscar?tipo=${tipo}&valor=${encodeURIComponent(valor)}${ciudad ? `&ciudad=${encodeURIComponent(ciudad)}` : ''}`
  });

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs
  });
}

function generateSpecialtySchema(tipo: string, valor: string) {
  if (tipo !== "especialidad" || !valor) return '';

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MedicalSpecialty",
    "name": valor,
    "description": `Especialidad médica: ${valor}`,
    "url": `https://buscadoctormexico.mx/buscar?tipo=especialidad&valor=${encodeURIComponent(valor)}`,
    "inLanguage": "es-MX",
    "about": {
      "@type": "Thing",
      "name": `Médicos especialistas en ${valor}`,
      "description": `Directorio de médicos especialistas en ${valor} en México`
    }
  });
}

function generateCollectionPageSchema(tipo: string, valor: string, ciudad?: string) {
  if (!tipo || !valor) return '';

  const searchQuery = ciudad && tipo !== "ciudad" ? `${valor} en ${ciudad}` : valor;
  
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `Directorio de médicos: ${searchQuery}`,
    "description": `Colección de médicos especialistas en ${searchQuery}`,
    "url": `https://buscadoctormexico.mx/buscar?tipo=${tipo}&valor=${encodeURIComponent(valor)}${ciudad ? `&ciudad=${encodeURIComponent(ciudad)}` : ''}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 0,
      "itemListElement": []
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "Busca Doctor México"
    },
    "inLanguage": "es-MX"
  });
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const tipo   = typeof searchParams.tipo   === "string" ? searchParams.tipo   : ""
  const valor  = typeof searchParams.valor  === "string" ? searchParams.valor  : ""
  const ciudad = typeof searchParams.ciudad === "string" ? searchParams.ciudad : undefined

  // Generar breadcrumbs dinámicos para búsquedas
  const breadcrumbItems = [];
  
  if (tipo && valor) {
    // Agregar "Buscar Médicos" como paso intermedio
    breadcrumbItems.push({
      label: "Buscar Médicos",
      href: "/buscar"
    });

    // Agregar el resultado actual
    const searchLabel = ciudad && tipo !== "ciudad" ? 
      `${valor} en ${ciudad}` : valor;
    
    breadcrumbItems.push({
      label: searchLabel,
      current: true
    });
  }

  return (
    <>
      {/* Schema para página de resultados de búsqueda */}
      {tipo && valor && (
        <Script id="search-results-schema" type="application/ld+json">
          {generateSearchPageSchema(tipo, valor, ciudad)}
        </Script>
      )}

      {/* Breadcrumb Schema */}
      {tipo && valor && (
        <Script id="search-breadcrumb-schema" type="application/ld+json">
          {generateBreadcrumbSchema(tipo, valor, ciudad)}
        </Script>
      )}

      {/* Schema específico para especialidades médicas */}
      {tipo === "especialidad" && valor && (
        <Script id="medical-specialty-schema" type="application/ld+json">
          {generateSpecialtySchema(tipo, valor)}
        </Script>
      )}

      {/* Collection Page Schema adicional */}
      {tipo && valor && (
        <Script id="collection-page-schema" type="application/ld+json">
          {generateCollectionPageSchema(tipo, valor, ciudad)}
        </Script>
      )}

      <MainLayout>
        {/* Breadcrumbs dinámicos solo si hay búsqueda */}
        {breadcrumbItems.length > 0 && (
          <Breadcrumbs items={breadcrumbItems} className="mb-4" />
        )}

        {tipo && valor ? (
          <>
            <h2 className="text-xl font-semibold mb-4">
              Resultados para{" "}
              {tipo === "ciudad"
                ? "Ciudad"
                : tipo === "especialidad"
                ? "Especialidad"
                : "Padecimiento Atendido"
              }:{" "}
              <span className="text-primary">{valor}</span>
              {ciudad && tipo !== "ciudad" && (
                <> en <span className="text-primary">{ciudad}</span></>
              )}
            </h2>

            <Suspense fallback={<SearchResultsSkeleton />}>
              <SearchResults tipo={tipo} valor={valor} ciudad={ciudad} />
            </Suspense>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Por favor, selecciona los criterios de búsqueda para ver resultados.
            </p>
          </div>
        )}
      </MainLayout>
    </>
  )
}