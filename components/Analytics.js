'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { pageview } from '../lib/gtm';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    pageview(pathname);
  }, [pathname]);

  return null;
}