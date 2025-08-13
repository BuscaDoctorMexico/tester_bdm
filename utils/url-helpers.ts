// utils/url-helpers.ts
export function createCleanUrl(type: string, value: string, doctorName?: string): string {

  const slugify = (text: string): string => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, '') 
      .replace(/\s+/g, '-') 
      .replace(/-+/g, '-') 
      .replace(/^-|-$/g, ''); 
  };

  const cleanValue = slugify(value);
  
  if (type === 'especialidad') {
    if (doctorName) {
      const cleanDoctorName = slugify(doctorName);
      return `/especialidad/${cleanValue}/${cleanDoctorName}`;
    }
    return `/especialidad/${cleanValue}`;
  }
  
  if (type === 'ciudad') {
    if (doctorName) {
      const cleanDoctorName = slugify(doctorName);
      return `/ciudad/${cleanValue}/${cleanDoctorName}`;
    }
    return `/ciudad/${cleanValue}`;
  }
  
  if (type === 'padecimiento') {
    if (doctorName) {
      const cleanDoctorName = slugify(doctorName);
      return `/padecimiento/${cleanValue}/${cleanDoctorName}`;
    }
    return `/padecimiento/${cleanValue}`;
  }
  
  // Fallback para doctores individuales
  if (doctorName) {
    const cleanDoctorName = slugify(doctorName);
    return `/doctor/${cleanDoctorName}`;
  }
  
  return '/buscar';
}

// Función inversa para extraer datos de URLs limpias
export function parseCleanUrl(pathname: string): {
  type?: string;
  value?: string;
  doctorName?: string;
} {
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length === 0) return {};
  
  const firstSegment = segments[0];
  
  if (['especialidad', 'ciudad', 'padecimiento'].includes(firstSegment)) {
    return {
      type: firstSegment,
      value: segments[1]?.replace(/-/g, ' ') || '',
      doctorName: segments[2]?.replace(/-/g, ' ') || undefined
    };
  }
  
  if (firstSegment === 'doctor' && segments[1]) {
    return {
      type: 'doctor',
      doctorName: segments[1].replace(/-/g, ' ')
    };
  }
  
  return {};
}