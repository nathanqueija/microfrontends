import React, { useEffect, useRef } from 'react';
import { mount } from 'auth/AuthMount';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Auth from '../app/auth';
import { User } from '../app/auth/types';
import { Location } from '@remix-run/router';

export const AuthApp: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onParentNavigate = useRef<OnParentNavigate | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  useEffect(() => {
    const mountedRemote = mount(ref.current!, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }: Location) => {
        const { pathname } = location;
        if (pathname !== nextPathname) navigate(nextPathname);
      },
      onAuthChange: (user: User | null) => {
        Auth.events.loginRequested(user);
        navigate(from, { replace: true });
      }
    });

    onParentNavigate.current = mountedRemote.onParentNavigate;
  }, []);

  useEffect(() => {
    onParentNavigate?.current?.(location);
  }, [location]);

  return <div ref={ref}></div>;
};
