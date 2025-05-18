import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CacheProvider } from '@emotion/react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router';

import App from './app';
import cacheRtl from './emotion-cache';
import { routesSection } from './routes/sections';
import { ErrorBoundary } from './routes/components';

const router = createBrowserRouter([
  {
    Component: () => (
      <App>
        <Outlet />
      </App>
    ),
    errorElement: <ErrorBoundary />,
    children: routesSection,
  },
]);

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <CacheProvider value={cacheRtl}>
      <RouterProvider router={router} />
    </CacheProvider>
  </StrictMode>
);
