import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './components/room/room.component';
import { SharedMaterialModule } from '@materials/shared-material.module';
import { FormsMaterialModule } from '@materials/forms-material.module';
import { PageWrapperModule } from '../shared-modules/page-wrapper/page-wrapper.module';
import { RouterModule, Routes } from '@angular/router';
import { AddRoomComponent } from './modal/add-room/add-room.component';
import { ModalWrapperModule } from '../shared-modules/modal-wrapper/modal-wrapper.module';
import { RoomlistComponent } from './components/roomlist/roomlist.component';
import { RoomBookingDetailComponent } from './modal/room-booking-detail/room-booking-detail.component';

const routes: Routes = [
  {
    path: '',
    component: RoomComponent,
    data: {
      breadCrumb:""
    }
  }
]

@NgModule({
  declarations: [
    RoomComponent,
    AddRoomComponent,
    RoomlistComponent,
    RoomBookingDetailComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsMaterialModule,
    PageWrapperModule,
    ModalWrapperModule,
    RouterModule.forChild(routes)
  ]
})
export class AppRoomsModule { }
