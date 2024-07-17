'use client';

import type { SettingsState } from 'src/components/settings';
import type { NavSectionProps } from 'src/components/nav-section';
import type { Theme, SxProps, CSSObject, Breakpoint } from '@mui/material/styles';

import { useMemo } from 'react';

import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';
import { iconButtonClasses } from '@mui/material/IconButton';

import { useBoolean } from 'src/hooks/use-boolean';

import { varAlpha, stylesMode } from 'src/theme/styles';

import { bulletColor } from 'src/components/nav-section';
import { useSettingsContext } from 'src/components/settings';

import { HeaderBase } from '../core/header-base';
import { NavHorizontal } from '../dashboard/nav-horizontal';
import { NavMobileLanding } from '../simple/nav-mobile-landing';
import { navData as dashboardNavData } from '../config-nav-dashboard';

// ----------------------------------------------------------------------

export type DashboardLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  data?: {
    nav?: NavSectionProps['data'];
  };
};

export function Header({ sx, children, data }: DashboardLayoutProps) {
  const theme = useTheme();

  const mobileNavOpen = useBoolean();

  const settings = useSettingsContext();

  const navColorVars = useNavColorVars(theme, settings);

  const layoutQuery: Breakpoint = 'lg';

  const navData = data?.nav ?? dashboardNavData;

  const isNavMini = settings.navLayout === 'mini';

  const isNavHorizontal = settings.navLayout === 'horizontal';

  const isNavVertical = isNavMini || settings.navLayout === 'vertical';

  return (
    <>
      <NavMobileLanding
        data={navData}
        open={mobileNavOpen.value}
        onClose={mobileNavOpen.onFalse}
        cssVars={navColorVars.section}
      />
      <HeaderBase
        layoutQuery={layoutQuery}
        disableElevation={isNavVertical}
        onOpenNav={mobileNavOpen.onTrue}
        data={{
          nav: navData,
        }}
        slotsDisplay={{
          signOut: true,
          signIn: true,
          purchase: false,
          helpLink: false,
        }}
        slots={{
          topArea: (
            <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
              This is an info Alert.
            </Alert>
          ),
          centerArea: isNavHorizontal ? (
            <NavHorizontal
              data={navData}
              layoutQuery={layoutQuery}
              cssVars={navColorVars.section}
            />
          ) : null,
        }}
        slotProps={{
          toolbar: {
            sx: {
              pr: 15,
              [`& [data-slot="logo"]`]: {
                display: 'none',
              },
              [`& [data-area="right"]`]: {
                gap: { xs: 0, sm: 0.75 },
              },
              ...(isNavHorizontal && {
                bgcolor: 'var(--layout-nav-bg)',
                [`& .${iconButtonClasses.root}`]: {
                  color: 'var(--layout-nav-text-secondary-color)',
                },
                [theme.breakpoints.up(layoutQuery)]: {
                  height: 'var(--layout-nav-horizontal-height)',
                },
                [`& [data-slot="workspaces"]`]: {
                  color: 'var(--layout-nav-text-primary-color)',
                },
                [`& [data-slot="logo"]`]: {
                  display: 'none',
                  [theme.breakpoints.up(layoutQuery)]: { display: 'inline-flex' },
                },
                [`& [data-slot="divider"]`]: {
                  [theme.breakpoints.up(layoutQuery)]: {
                    display: 'flex',
                  },
                },
              }),
            },
          },
          container: {
            maxWidth: false,
            sx: {
              ...(isNavVertical && { px: { [layoutQuery]: 5 } }),
            },
          },
        }}
      />

      {children}
    </>
  );
}

// ----------------------------------------------------------------------

function useNavColorVars(
  theme: Theme,
  settings: SettingsState
): Record<'layout' | 'section', CSSObject> {
  const {
    vars: { palette },
  } = theme;

  return useMemo(() => {
    switch (settings.navColor) {
      case 'integrate':
        return {
          layout: {
            '--layout-nav-bg': palette.background.default,
            '--layout-nav-horizontal-bg': varAlpha(palette.background.defaultChannel, 0.8),
            '--layout-nav-border-color': varAlpha(palette.grey['500Channel'], 0.12),
            '--layout-nav-text-primary-color': palette.text.primary,
            '--layout-nav-text-secondary-color': palette.text.secondary,
            '--layout-nav-text-disabled-color': palette.text.disabled,
            [stylesMode.dark]: {
              '--layout-nav-border-color': varAlpha(palette.grey['500Channel'], 0.08),
              '--layout-nav-horizontal-bg': varAlpha(palette.background.defaultChannel, 0.96),
            },
          },
          section: {},
        };
      case 'apparent':
        return {
          layout: {
            '--layout-nav-bg': palette.grey[900],
            '--layout-nav-horizontal-bg': varAlpha(palette.grey['900Channel'], 0.96),
            '--layout-nav-border-color': 'transparent',
            '--layout-nav-text-primary-color': palette.common.white,
            '--layout-nav-text-secondary-color': palette.grey[500],
            '--layout-nav-text-disabled-color': palette.grey[600],
            [stylesMode.dark]: {
              '--layout-nav-bg': palette.grey[800],
              '--layout-nav-horizontal-bg': varAlpha(palette.grey['800Channel'], 0.8),
            },
          },
          section: {
            // caption
            '--nav-item-caption-color': palette.grey[600],
            // subheader
            '--nav-subheader-color': palette.grey[600],
            '--nav-subheader-hover-color': palette.common.white,
            // item
            '--nav-item-color': palette.grey[500],
            '--nav-item-root-active-color': palette.primary.light,
            '--nav-item-root-open-color': palette.common.white,
            // bullet
            '--nav-bullet-light-color': bulletColor.dark,
            // sub
            ...(settings.navLayout === 'vertical' && {
              '--nav-item-sub-active-color': palette.common.white,
              '--nav-item-sub-open-color': palette.common.white,
            }),
          },
        };
      default:
        throw new Error(`Invalid color: ${settings.navColor}`);
    }
  }, [
    palette.background.default,
    palette.background.defaultChannel,
    palette.common.white,
    palette.grey,
    palette.primary.light,
    palette.text.disabled,
    palette.text.primary,
    palette.text.secondary,
    settings.navColor,
    settings.navLayout,
  ]);
}
