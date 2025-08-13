// hooks/use-breadcrumbs.ts
import { usePathname } from 'next/navigation';
import { parseCleanUrl, createCleanUrl } from '@/utils/url-helpers';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

export function useBreadcrumbs(): BreadcrumbItem[] {
  const pathname = usePathname();
  
  // Casos especiales para páginas específicas
  if (pathname === '/') return [];
  if (pathname === '/buscar') return [{ label: 'Buscar Médicos', current: true }];
  if (pathname === '/about') return [{ label: 'Acerca de', current: true }];
  if (pathname === '/contact') return [{ label: 'Contacto', current: true }];
  
  const parsed = parseCleanUrl(pathname);
  const breadcrumbs: BreadcrumbItem[] = [];
  
  if (parsed.type === 'especialidad' && parsed.value) {
    breadcrumbs.push({
      label: 'Especialidades',
      href: '/especialidades'
    });
    
    const specialtyLabel = parsed.value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    if (parsed.doctorName) {
      breadcrumbs.push({
        label: specialtyLabel,
        href: createCleanUrl('especialidad', parsed.value)
      });
      
      const doctorLabel = parsed.doctorName
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        label: `Dr. ${doctorLabel}`,
        current: true
      });
    } else {
      breadcrumbs.push({
        label: specialtyLabel,
        current: true
      });
    }
  }
  
  else if (parsed.type === 'ciudad' && parsed.value) {
    breadcrumbs.push({
      label: 'Ciudades',
      href: '/ciudades'
    });
    
    const cityLabel = parsed.value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    if (parsed.doctorName) {
      breadcrumbs.push({
        label: cityLabel,
        href: createCleanUrl('ciudad', parsed.value)
      });
      
      const doctorLabel = parsed.doctorName
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        label: `Dr. ${doctorLabel}`,
        current: true
      });
    } else {
      breadcrumbs.push({
        label: cityLabel,
        current: true
      });
    }
  }
  
  else if (parsed.type === 'padecimiento' && parsed.value) {
    breadcrumbs.push({
      label: 'Padecimientos',
      href: '/padecimientos'
    });
    
    const conditionLabel = parsed.value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    if (parsed.doctorName) {
      breadcrumbs.push({
        label: conditionLabel,
        href: createCleanUrl('padecimiento', parsed.value)
      });
      
      const doctorLabel = parsed.doctorName
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        label: `Dr. ${doctorLabel}`,
        current: true
      });
    } else {
      breadcrumbs.push({
        label: conditionLabel,
        current: true
      });
    }
  }
  
  else if (parsed.type === 'doctor' && parsed.doctorName) {
    breadcrumbs.push({
      label: 'Médicos',
      href: '/buscar'
    });
    
    const doctorLabel = parsed.doctorName
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbs.push({
      label: `Dr. ${doctorLabel}`,
      current: true
    });
  }
  
  // Fallback para URLs no reconocidas
  else {
    const segments = pathname.split('/').filter(Boolean);
    segments.forEach((segment, index) => {
      const label = segment
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      const isLast = index === segments.length - 1;
      const href = isLast ? undefined : '/' + segments.slice(0, index + 1).join('/');
      
      breadcrumbs.push({
        label,
        href,
        current: isLast
      });
    });
  }
  
  return breadcrumbs;
}