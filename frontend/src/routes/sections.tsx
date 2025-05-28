import type { RouteObject } from 'react-router';

import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';

import { ProfilePreviewView as ProfilePreviewPage } from 'src/sections/profile-preview/profile-preview-view';

// ----------------------------------------------------------------------

export const DashboardPage = lazy(() => import('src/pages/dashboard'));
export const PortfolioPage = lazy(() => import('src/pages/portfolio'));
export const ClientProjectsPage = lazy(() => import('src/pages/client-projects'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const ExpertsPage = lazy(() => import('src/pages/experts'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const ProfilePage = lazy(() => import('src/pages/profile'));
export const FreeLancerProjectsPage = lazy(() => import('src/pages/freelancer-projects'));
export const ProfileManagementPage = lazy(() => import('src/pages/profile-management'));
// export const ProfilePreviewPage = lazy(() => import('src/sections/profile-preview/profile-preview-view'));

const renderFallback = () => (
  <Box
    sx={{
      display: 'flex',
      flex: '1 1 auto',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export const routesSection: RouteObject[] = [
  {
    element: (
      <DashboardLayout>
        <Suspense fallback={renderFallback()}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'project-management-client', element: <ClientProjectsPage /> },
      { path: 'project-management-freelancer', element: <FreeLancerProjectsPage /> },
      { path: 'select-freelancer', element: <ExpertsPage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'profile-management', element: <ProfileManagementPage /> },
      { path: 'profile-preview', element: <ProfilePreviewPage /> }, //
    ],
  },
  {
    path: 'sign-in',
    element: (
      <AuthLayout>
        <SignInPage />
      </AuthLayout>
    ),
  },
  {
    path: '404',
    element: <Page404 />,
  },
  { path: 'profile', element: <ProfilePage /> }, //
  { path: '*', element: <Page404 /> },
];
