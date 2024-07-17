'use client';

import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Alert from '@mui/material/Alert';

import { useBoolean } from 'src/hooks/use-boolean';

import { Content } from './main';
import { Section } from './section';
import { HeaderBase } from '../core/header-base';
import { LayoutSection } from '../core/layout-section';

// ----------------------------------------------------------------------

export type AuthSplitLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  section?: {
    title?: string;
    imgUrl?: string;
    subtitle?: string;
  };
};

export function AuthSplitLayout({ sx, section, children }: AuthSplitLayoutProps) {
  const mobileNavOpen = useBoolean();

  const layoutQuery: Breakpoint = 'lg';

  return (
    <Section
      title={section?.title}
      layoutQuery={layoutQuery}
      imgUrl={section?.imgUrl}
      subtitle={section?.subtitle}
    >
      <LayoutSection
        headerSection={
          /** **************************************
           * Header
           *************************************** */
          <HeaderBase
            disableElevation
            layoutQuery={layoutQuery}
            onOpenNav={mobileNavOpen.onTrue}
            slotsDisplay={{
              signIn: false,
              account: false,
              purchase: false,
              contacts: false,
              searchbar: false,
              workspaces: false,
              menuButton: false,
              localization: false,
              notifications: false,
            }}
            slots={{
              topArea: (
                <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
                  This is an info Alert.
                </Alert>
              ),
            }}
            slotProps={{ container: { maxWidth: false } }}
            sx={{ position: { [layoutQuery]: 'fixed' } }}
          />
        }
        /** **************************************
         * Footer
         *************************************** */
        footerSection={null}
        /** **************************************
         * Style
         *************************************** */
        sx={sx}
        cssVars={{
          '--layout-auth-content-width': '420px',
        }}
      >
        <Content layoutQuery={layoutQuery}>{children}</Content>
      </LayoutSection>
    </Section>
  );
}
