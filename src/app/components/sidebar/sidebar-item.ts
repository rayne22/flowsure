declare interface RouteInfo {
  path?: string;
  title: string;
  icon: string;
  class: string;
  disabled?: boolean;
  children?: RouteInfo[];
}
