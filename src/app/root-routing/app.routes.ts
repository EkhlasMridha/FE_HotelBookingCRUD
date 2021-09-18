import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app-dashboard/app-dashboard.module').then(
        (module) => module.AppDashboardModule
      ),
    data: {
      breadCrumb: 'Dashboard',
    },
  },
  {
    path: 'booking',
    loadChildren: () => import('../app-booking/app-booking.module').then(m => m.AppBookingModule),
    data: {
      breadCrumb:"Booking"
    }
  },
  {
    path: 'room',
    loadChildren: () => import('../app-rooms/app-rooms.module').then(m => m.AppRoomsModule),
    data: {
      breadCrumb:"Room"
    }
  },
  {
    path: 'setting',
    loadChildren: () => import('../app-settings/app-settings.module').then(m => m.AppSettingsModule),
    data: {
      breadCrumb:"Settings"
    }
  },
];

export function getBusinessRoutes() {
  return routes;
}
