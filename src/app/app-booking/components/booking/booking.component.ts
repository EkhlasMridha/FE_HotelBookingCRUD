import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomModel } from 'src/app/app-rooms/models/room.model';
import { SettingModel } from 'src/app/app-settings/models/setting.model';
import { ConfirmationStatusService } from 'src/app/shared-modules/confirmation-status-modal/services/confirmation-status.service';
import { AddguestComponent } from '../../modal/addguest/addguest.component';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  isNew: boolean = false;
  guestList: any[] = [];
  roomList: Observable<RoomModel[]>;

  bookedByGuest: any;
  setting: SettingModel;

  rentCount: number = 0;

  bookingForm:FormGroup
  constructor (private bookingService: BookingService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private modalService: ConfirmationStatusService,
    private router:Router) {
    this.bookingForm = this.createForm();
  }

  ngOnInit(): void {
    this.getSettings();
    this.roomList = this.getRooms();
  }

  createForm() {
    return this.formBuilder.group({
      bookedFrom: ['', Validators.required],
      leaveAt: ['', Validators.required],
      comments: [''],
      bookedBy: ['', Validators.required],
      roomId: ['', Validators.required],
      paidAmount:[0,Validators.min(0)]
    })
  }

  getRooms() {
    return this.bookingService.getAllroom();
  }

  addGuestModal() {
    let dialogref = this.dialog.open(AddguestComponent, {
      panelClass: "nopadding-modal"
    });
    dialogref.afterClosed().subscribe(res => {
      if (res) {
        console.log(res);
        this.bookedByGuest = res;
        this.bookingForm.get("bookedBy").setValue(res.name);
      }
    })
  }

  primaryButtonModal() {
    
  }

  onSubmit() {
    if (!this.bookingForm.valid) {
      return;
    }

    const result = Object.assign({}, this.bookingForm.value);
    console.log(result);
    result.bookedBy = this.bookedByGuest.id;
    console.log(this.bookedByGuest)
    result.roomId = result.roomId.id;
    

    let loaderRef = this.modalService.openConfirmationModal({
      isLoader: true,
      disableClose:true,
      loaderText:"Creating booking"
    })
    this.bookingService.createBooking(result).subscribe(res => {
      console.log(res);
      loaderRef.close();
      this.modalService.openConfirmationModal({
        headerText: "Booking Created Successfully!",
        primaryButtonName: "Ok",
        primaryEvent:this.primaryButtonModal
      })
    })
  }

  getSettings() {
    this.bookingService.getSettings().subscribe(res => {
      console.log(res);
      this.setting = res;
    })
  }

  onRoomChange(event) {
    console.log(event.value);
    let room: RoomModel = event.value;
    if (this.setting) {
      let discount = (room.rent * this.setting.discount) / 100;
      let rent = room.rent - discount;
      let tax = (rent * this.setting.taxPercentage) / 100;
      rent += tax;
      this.rentCount = rent;
    }
  }
}
