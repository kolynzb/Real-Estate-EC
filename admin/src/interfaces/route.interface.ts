interface AppRoute {
  name: string;
  layout: string;
  path: string;
  icon: JSX.Element;
  component: JSX.Element;
  secondary?: boolean;
}
