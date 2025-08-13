import { Metadata } from "next";
import Link from "next/link";
import Script from 'next/script';
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import DoctorProfile from "@/components/doctor-profile";
import MainLayout from "@/components/main-layout";
import Breadcrumbs from "@/components/breadcrumbs";
import { getDoctorData } from "@/lib/get-doctor";

interface DoctorPageProps {
 params: {
   id: string
 }
}

export async function generateMetadata({ params }: DoctorPageProps): Promise<Metadata> {
 try {
   const doctor = await getDoctorData(params.id);
   
   if (!doctor || !doctor.fullName) {
     console.error('Doctor data missing:', { id: params.id, doctor });
     return {
       title: "Perfil Médico | Busca Doctor México",
       description: "Información de contacto y perfil profesional del médico.",
       robots: {
         index: false,
         follow: true
       }
     };
   }

   const specialty = doctor.specialties?.[0] || 'Médico';
   const location = doctor.cities?.[0] ? `en ${doctor.cities[0]}` : 'en México';
   const doctorTitle = `${doctor.fullName} - ${specialty} | Busca Doctor México`;
   const doctorDescription = `Información de contacto y perfil profesional de ${doctor.fullName}, ${specialty} ${location}. ${doctor.diseasesTreated?.slice(0, 3).join(', ') || 'Consulta médica especializada'}.`;

   return {
     title: doctorTitle,
     description: doctorDescription,
     alternates: {
       canonical: `https://buscadoctormexico.mx/doctor/${params.id}`
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
       title: `${doctor.fullName} | Busca Doctor México`,
       description: doctorDescription,
       url: `https://buscadoctormexico.mx/doctor/${params.id}`,
       siteName: "Busca Doctor México",
       images: [
         {
           url: "/og-image.png",
           width: 1200,
           height: 630,
           alt: `${doctor.fullName} - ${specialty} en ${doctor.cities?.[0] || 'México'}`,
           type: "image/png"
         }
       ],
       locale: "es_MX",
       type: "profile"
     },
     twitter: {
       card: "summary_large_image",
       title: `${doctor.fullName} - ${specialty}`,
       description: `${specialty} ${location}. ${doctor.diseasesTreated?.slice(0, 2).join(', ') || 'Consulta médica'}.`,
       images: ["/twitter-image.png"]
     }
   };
 } catch (error) {
   console.error('Error generating metadata:', error);
   return {
     title: "Perfil Médico | Busca Doctor México",
     description: "Información de contacto y perfil profesional del médico.",
     robots: {
       index: false,
       follow: true
     }
   };
 }
}

function generateDoctorSchema(doctor: any, doctorId: string) {
 if (!doctor || !doctor.fullName) return '';

 const schema = {
   "@context": "https://schema.org",
   "@type": ["Person", "Physician"],
   "name": doctor.fullName,
   "description": `${doctor.fullName}, especialista en ${doctor.specialties?.[0] || 'medicina'} en México`,
   "url": `https://buscadoctormexico.mx/doctor/${doctorId}`,
   "identifier": doctor.licenseNumber || doctorId,
   "jobTitle": doctor.specialties?.[0] || "Médico",
   "worksFor": {
     "@type": "Organization",
     "name": "Busca Doctor México",
     "url": "https://buscadoctormexico.mx"
   },
   "hasCredential": doctor.licenseNumber ? {
     "@type": "EducationalOccupationalCredential",
     "credentialCategory": "Cédula Profesional",
     "identifier": doctor.licenseNumber
   } : undefined,
   "medicalSpecialty": doctor.specialties?.map((spec: string) => ({
     "@type": "MedicalSpecialty",
     "name": spec
   })) || [],
   "knowsAbout": doctor.diseasesTreated || [],
   "areaServed": doctor.cities?.map((city: string) => ({
     "@type": "City",
     "name": city,
     "containedInPlace": {
       "@type": "Country",
       "name": "México"
     }
   })) || [],
   "address": doctor.addresses?.map((address: string, index: number) => ({
     "@type": "PostalAddress",
     "streetAddress": address,
     "addressLocality": doctor.cities?.[index] || "México",
     "addressCountry": "MX"
   })) || [],
   "telephone": doctor.phoneNumbers || [],
   "contactPoint": doctor.phoneNumbers?.map((phone: string) => ({
     "@type": "ContactPoint",
     "telephone": phone,
     "contactType": "consultorio médico",
     "availableLanguage": "Spanish"
   })) || [],
   "memberOf": {
     "@type": "MedicalOrganization",
     "name": "Directorio Médico México",
     "url": "https://buscadoctormexico.mx"
   }
 };

 // Remover propiedades undefined
 return JSON.stringify(schema, (key, value) => value === undefined ? undefined : value);
}

function generateBreadcrumbSchema(doctor: any, doctorId: string) {
 if (!doctor) return '';

 return JSON.stringify({
   "@context": "https://schema.org",
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
       "name": "Buscar Médicos",
       "item": "https://buscadoctormexico.mx/buscar"
     },
     {
       "@type": "ListItem",
       "position": 3,
       "name": doctor.fullName || "Perfil Médico",
       "item": `https://buscadoctormexico.mx/doctor/${doctorId}`
     }
   ]
 });
}

function generatePersonSchema(doctor: any, doctorId: string) {
 if (!doctor || !doctor.fullName) return '';

 return JSON.stringify({
   "@context": "https://schema.org",
   "@type": "Person",
   "name": doctor.fullName,
   "jobTitle": doctor.specialties?.[0] || "Médico",
   "description": `Dr. ${doctor.fullName}, ${doctor.specialties?.[0] || 'médico'} especialista en México`,
   "url": `https://buscadoctormexico.mx/doctor/${doctorId}`,
   "sameAs": [
     `https://buscadoctormexico.mx/doctor/${doctorId}`
   ],
   "knowsAbout": doctor.diseasesTreated || [],
   "worksFor": {
     "@type": "MedicalOrganization",
     "name": "Busca Doctor México",
     "url": "https://buscadoctormexico.mx"
   },
   "hasOccupation": {
     "@type": "Occupation",
     "name": doctor.specialties?.[0] || "Médico",
     "occupationLocation": {
       "@type": "Country",
       "name": "México"
     }
   }
 });
}

export default async function DoctorPage({ params }: DoctorPageProps) {
 const doctor = await getDoctorData(params.id);

 // Generar breadcrumbs dinámicos
 const breadcrumbItems = [
   {
     label: "Buscar Médicos",
     href: "/buscar"
   },
   {
     label: doctor?.fullName ? `Dr. ${doctor.fullName}` : "Perfil Médico",
     current: true
   }
 ];

 return (
   <>
     {/* Schema mejorado para el doctor */}
     <Script id={`doctor-schema-${params.id}`} type="application/ld+json">
       {generateDoctorSchema(doctor, params.id)}
     </Script>

     {/* Breadcrumb Schema */}
     <Script id={`breadcrumb-schema-${params.id}`} type="application/ld+json">
       {generateBreadcrumbSchema(doctor, params.id)}
     </Script>

     {/* Person Schema adicional */}
     <Script id={`person-schema-${params.id}`} type="application/ld+json">
       {generatePersonSchema(doctor, params.id)}
     </Script>

     <MainLayout showSearch={false}>
       {/* Breadcrumbs dinámicos */}
       <Breadcrumbs items={breadcrumbItems} className="mb-4" />

       <Button variant="ghost" asChild className="mb-6">
         <Link href="/buscar">
           <ChevronLeft className="mr-2 h-4 w-4" />
           Volver a resultados
         </Link>
       </Button>

       <DoctorProfile id={params.id} initialData={doctor} />
     </MainLayout>
   </>
 );
}