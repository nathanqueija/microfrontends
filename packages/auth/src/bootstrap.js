import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import { buildRoutes, routes } from './routes';
import { App } from './App';

export const mount = (
  container,
  { onNavigate, defaultRouter, initialPath, onAuthChange }
) => {
  const router =
    defaultRouter ||
    createMemoryRouter(buildRoutes({ onAuthChange }), {
      initialEntries: [initialPath]
    });

  if (onNavigate)
    router.subscribe(({ location }) => {
      onNavigate(location);
    });

  const root = createRoot(container);

  root.render(<App router={router} onAuthChange={onAuthChange} />);

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = router.state.location;
      if (pathname !== nextPathname) router.navigate(nextPathname);
    }
  };
};

if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById('__auth__root__container__');

  if (container)
    mount(container, { defaultRouter: createBrowserRouter(routes) });
}
