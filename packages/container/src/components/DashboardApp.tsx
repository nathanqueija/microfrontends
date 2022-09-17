import { mount } from 'dashboard/DashboardMount';
import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Location } from '@remix-run/router';

export const DashboardApp = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onParentNavigate = useRef<OnParentNavigate | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const mountedRemote = mount(ref.current!, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }: Location) => {
        const { pathname } = location;
        if (pathname !== nextPathname) navigate(nextPathname);
      }
    });

    onParentNavigate.current = mountedRemote.onParentNavigate;
  }, []);

  useEffect(() => {
    onParentNavigate.current?.(location);
  }, [location]);

  return <div ref={ref} />;
};
