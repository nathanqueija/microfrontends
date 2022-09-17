import { mount } from 'marketing/MarketingMount';
import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const MarketingApp = () => {
  const ref = useRef(null);
  const onParentNavigate = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const mountedRemote = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = location;
        if (pathname !== nextPathname) navigate(nextPathname);
      }
    });

    onParentNavigate.current = mountedRemote.onParentNavigate;
  }, []);

  useEffect(() => {
    onParentNavigate.current?.(location);
  }, [location]);

  return <div ref={ref}></div>;
};
