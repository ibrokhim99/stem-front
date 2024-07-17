'use client';

import { useEffect } from 'react';

import { useRouter } from 'src/routes/hooks';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push(CONFIG.authTeacher.redirectPath);
  }, [router]);

  return null;
}
