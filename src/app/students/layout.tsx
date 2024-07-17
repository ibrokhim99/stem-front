import { LandingLayout } from 'src/layouts/simple';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <AuthGuard>
      <LandingLayout>{children}</LandingLayout>
    </AuthGuard>
  );
}
