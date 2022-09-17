type RouterLocation = import('@remix-run/router').Location;

type OnParentNavigate = (location: RouterLocation) => void;

declare module 'auth/AuthMount' {
  export const mount: (
    container: Element,
    opts: {
      onNavigate: (location: RouterLocation) => void;
      defaultRouter?: Router;
      initialPath?: string;
      onAuthChange: (user: User | null) => void;
    }
  ) => { onParentNavigate: OnParentNavigate };
}

declare module 'dashboard/DashboardMount' {
  export const mount: (
    container: Element,
    opts: {
      onNavigate: (location: RouterLocation) => void;
      defaultRouter?: Router;
      initialPath?: string;
    }
  ) => { onParentNavigate: OnParentNavigate };
}

declare module 'marketing/MarketingMount' {
  export const mount: (
    container: Element,
    opts: {
      onNavigate: (location: RouterLocation) => void;
      defaultRouter?: Router;
      initialPath?: string;
    }
  ) => { onParentNavigate: OnParentNavigate };
}
