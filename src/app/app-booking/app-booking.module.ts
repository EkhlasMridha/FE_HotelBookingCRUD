import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './components/booking/booking.component';
import { SharedMaterialModule } from '@materials/shared-material.module';
import { FormsMaterialModule } from '@materials/forms-material.module';
import { RouterModule, Routes } from '@angular/router';
import { PageWrapperModule } from '../shared-modules/page-wrapper/page-wrapper.module';

const routes: Routes = [
  {
    path: "",
    component:BookingComponent
  }
]

@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsMaterialModule,
    RouterModule.forChild(routes),
    PageWrapperModule
  ]
})
export class AppBookingModule { }
