import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { RoomModel } from 'src/app/app-rooms/models/room.model';
import { SettingModel } from 'src/app/app-settings/models/setting.model';
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
    private formBuilder: FormBuilder) {
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

  onSubmit() {
    if (!this.bookingForm.valid) {
      return;
    }

    const result = Object.assign({}, this.bookingForm.value);
    result.bookedBy = this.bookedByGuest.id;
    result.roomId = result.roomId.id;
    console.log(result);

    this.bookingService.createBooking(result).subscribe(res => {
      console.log(res);
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
