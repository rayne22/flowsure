import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path?: string;
  title: string;
  icon: string;
  class: string;
  disabled?: boolean;
  children?: RouteInfo[];
}
export const ROUTES: RouteInfo[] = [
         {
           path: '/dashboard',
           title: 'Dashboard',
           icon: 'design_app',
           class: ''
         },
         {
           path: '/clients',
           title: 'Clients',
           icon: 'users_single-02',
           class: ''
         },
         {
           path: '/view-insurance-companies',
           title: 'Quotations',
           icon: 'files_single-copy-04',
           class: ''
         },
         {
           path: '/receipting',
           title: 'Reciepting',
           icon: 'files_paper',
           class: ''
         },
         {
           path: '/policies',
           title: 'Policies',
           icon: 'education_paper',
           class: ''
         },
         {
           path: '/claims',
           title: 'Claims',
           icon: 'files_box',
           class: ''
         },
         {
           path: '/queries',
           title: 'Queries',
           icon: 'ui-2_chat-round',
           class: ''
         },
         {
           path: '/reports',
           title: 'Reports',
           icon: 'business_chart-bar-32',
           class: ''
         },
         { path: '/icons', title: 'Icons', icon: 'education_atom', class: '' }
         //  { path: '/maps', title: 'Maps', icon: 'location_map-big', class: '' },
         //  {
         //    path: '/notifications',
         //    title: 'Notifications',
         //    icon: 'ui-1_bell-53',
         //    class: ''
         //  },

         //  {
         //    path: '/user-profile',
         //    title: 'User Profile',
         //    icon: 'users_single-02',
         //    class: ''
         //  },
         //  {
         //    path: '/table-list',
         //    title: 'Table List',
         //    icon: 'design_bullet-list-67',
         //    class: ''
         //  },
         //  {
         //    path: '/typography',
         //    title: 'Typography',
         //    icon: 'text_caps-small',
         //    class: ''
         //  },
       ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
