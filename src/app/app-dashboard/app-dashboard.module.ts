import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedMaterialModule } from '@materials/shared-material.module';
import { PageWrapperModule } from '../shared-modules/page-wrapper/page-wrapper.module';
import { BookingsComponent } from './components/bookings/bookings.component';
import { EditbookingComponent } from './modal/editbooking/editbooking.component';
import { ModalWrapperModule } from '../shared-modules/modal-wrapper/modal-wrapper.module';
import { FormsMaterialModule } from '@materials/forms-material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfirmationStatusModalModule } from '../shared-modules/confirmation-status-modal/confirmation-status-modal.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadCrumb: '',
    },
  },
];

@NgModule({
  declarations: [HomeComponent, BookingsComponent, EditbookingComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsMaterialModule,
    ConfirmationStatusModalModule.forChild({
      modalWidth: '500px',
    }),
    RouterModule.forChild(routes),
    PageWrapperModule,
    ModalWrapperModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
})
export class AppDashboardModule { }
