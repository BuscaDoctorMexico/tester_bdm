// components/enhanced-breadcrumbs.tsx
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface EnhancedBreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
}

export default function EnhancedBreadcrumbs({ 
  items, 
  className,
  showHome = true 
}: EnhancedBreadcrumbsProps) {
  const allItems = showHome 
    ? [{ label: 'Inicio', href: '/' }, ...items]
    : items;

  return (
    <nav 
      className={cn("flex items-center space-x-2 text-sm text-muted-foreground py-2", className)}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {allItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground/60" />
            )}
            
            {item.current ? (
              <span 
                className="font-medium text-foreground truncate max-w-[200px]" 
                aria-current="page"
                title={item.label}
              >
                {index === 0 && showHome ? (
                  <Home className="h-4 w-4" />
                ) : (
                  item.label
                )}
              </span>
            ) : (
              <Link 
                href={item.href || '#'}
                className="hover:text-foreground transition-colors truncate max-w-[200px]"
                title={item.label}
              >
                {index === 0 && showHome ? (
                  <Home className="h-4 w-4" />
                ) : (
                  item.label
                )}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}