import { NextRequest, NextResponse } from 'next/server';
import { parseCleanUrl } from './utils/url-helpers';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- Lógica de autenticación para rutas /admin/* ---
  const token = request.cookies.get('session')?.value || '';
  const isPublicPath = pathname === '/admin/login';

  // Si el usuario está autenticado y accede a /admin/login, redirigir a /admin
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // Si el usuario no está autenticado y accede a rutas protegidas de /admin, redirigir a /admin/login
  if (pathname.startsWith('/admin') && !isPublicPath && !token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // --- Lógica de reescritura de URLs limpias ---
  const cleanUrlPatterns = [
    /^\/especialidad\/[^\/]+$/,
    /^\/especialidad\/[^\/]+\/[^\/]+$/,
    /^\/ciudad\/[^\/]+$/,
    /^\/ciudad\/[^\/]+\/[^\/]+$/,
    /^\/padecimiento\/[^\/]+$/,
    /^\/padecimiento\/[^\/]+\/[^\/]+$/,
    /^\/doctor\/[^\/]+$/,
  ];

  const isCleanUrl = cleanUrlPatterns.some(pattern => pattern.test(pathname));

  if (isCleanUrl) {
    const parsed = parseCleanUrl(pathname);

    // Redirigir a la estructura interna manteniendo la URL limpia
    if (parsed.type && parsed.value) {
      const url = request.nextUrl.clone();

      if (parsed.doctorName) {
        // Para perfiles de doctor con contexto
        url.pathname = '/buscar';
        url.searchParams.set('tipo', parsed.type);
        url.searchParams.set('valor', parsed.value);
        url.searchParams.set('doctor', parsed.doctorName);
      } else {
        // Para listados de especialidades/ciudades/padecimientos
        url.pathname = '/buscar';
        url.searchParams.set('tipo', parsed.type);
        url.searchParams.set('valor', parsed.value);
      }

      return NextResponse.rewrite(url);
    }
  }

  // Si ninguna regla aplica, continuar con la solicitud
  return NextResponse.next();
}

// Configuración del middleware para que se ejecute solo en las rutas especificadas
export const config = {
  matcher: [
    '/admin/:path*',
    '/especialidad/:path*',
    '/ciudad/:path*',
    '/padecimiento/:path*',
    '/doctor/:path*',
  ],
};