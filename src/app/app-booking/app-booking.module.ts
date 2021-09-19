import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './components/booking/booking.component';
import { SharedMaterialModule } from '@materials/shared-material.module';
import { FormsMaterialModule } from '@materials/forms-material.module';
import { RouterModule, Routes } from '@angular/router';
import { PageWrapperModule } from '../shared-modules/page-wrapper/page-wrapper.module';
import { MatRadioModule } from "@angular/material/radio";
import { AddguestComponent } from './modal/addguest/addguest.component';
import { ModalWrapperModule } from '../shared-modules/modal-wrapper/modal-wrapper.module';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { ConfirmationStatusModalModule } from '../shared-modules/confirmation-status-modal/confirmation-status-modal.module';

const routes: Routes = [
  {
    path: "",
    component: BookingComponent,
    data: {
      breadCrumb:""
    }
  }
]

@NgModule({
  declarations: [
    BookingComponent,
    AddguestComponent
  ],
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
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AppBookingModule { }
