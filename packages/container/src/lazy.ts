import { lazy } from 'react';

type LazyResolver = () => Promise<any>;

export default (resolver: LazyResolver, name = 'default') => {
  return lazy(async () => {
    const resolved = await resolver();
    return { default: resolved[name] };
  });
};
