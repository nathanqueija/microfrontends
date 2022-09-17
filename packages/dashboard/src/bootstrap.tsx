import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import { routes } from './routes';
import { App } from './App';
import { Location, Router } from '@remix-run/router';

interface IMountOpts {
  onNavigate?: (location: Location) => {};
  defaultRouter?: Router;
  initialPath?: string;
}

export const mount = (
  container: Element,
  { onNavigate, defaultRouter, initialPath }: IMountOpts
) => {
  const router =
    defaultRouter ||
    createMemoryRouter(routes, {
      ...(initialPath && { initialEntries: [initialPath] })
    });

  if (onNavigate)
    router.subscribe(({ location }) => {
      onNavigate(location);
    });

  const root = createRoot(container);

  root.render(<App router={router} />);

  return {
    onParentNavigate: ({ pathname: nextPathname }: Location) => {
      const { pathname } = router.state.location;
      if (pathname !== nextPathname) router.navigate(nextPathname);
    }
  };
};

if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById('__dashboard__root__container__')!;

  if (container)
    mount(container, { defaultRouter: createBrowserRouter(routes) });
}
