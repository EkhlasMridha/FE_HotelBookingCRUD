import { Routes } from '@angular/router';

const routes2: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('../../layouts/top-nav/top-nav.module').then(m => m.TopNavModule),
  //   canActivate: [AuthGuardService]
  // },
  {
    path: '',
    loadChildren: () => import('../../layouts/side-nav/side-nav.module').then(m => m.SideNavModule),
  },
  // {
  //   path: '',
  //   loadChildren: () => import('../../layouts/no-nav/no-nav.module').then(m => m.NoNavModule),
  // }
];

export function getAppRoutes() {
  return routes2;
}
