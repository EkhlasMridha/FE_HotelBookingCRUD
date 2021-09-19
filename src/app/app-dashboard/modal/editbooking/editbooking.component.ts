import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RoomModel } from 'src/app/app-rooms/models/room.model';
import { SettingModel } from 'src/app/app-settings/models/setting.model';
import { BookingsModel } from '../../models/bookings.model';
import { BookingdataService } from '../../services/bookingdata.service';

@Component({
  selector: 'app-editbooking',
  templateUrl: './editbooking.component.html',
  styleUrls: ['./editbooking.component.scss']
})
export class EditbookingComponent implements OnInit {
  bookingForm: FormGroup;
  roomList:RoomModel[]=[];
  booking: BookingsModel;
  setting: SettingModel;
  rentCount: number = 0;
  
  existingRoomId: number;
  constructor (
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef:MatDialogRef<EditbookingComponent>,
    private formBuilder: FormBuilder,
    private bookingService: BookingdataService) {
      this.booking = data;
    }

  
  
  ngOnInit(): void {
    console.log(this.booking);
    let dataApi =[this.getSettings(),this.getRoomList()]
    this.bookingForm = this.createForm();
    forkJoin(dataApi).subscribe(res => {
      let selected = this.roomList.find(a => a.id == this.booking.roomId);
      this.existingRoomId = selected.id;
        this.bookingForm.get("roomId").setValue(selected);
        this.calculateRent(selected);
    })
  }
  
  calculateRent(room:RoomModel) {
    let discount = (room.rent * this.setting.discount) / 100;
      let rent = room.rent - discount;
      let tax = (rent * this.setting.taxPercentage) / 100;
      rent += tax;
      this.rentCount = rent;
  }

  close(data: any = null) {
    this.dialogRef.close(data);
  }

  createForm() {
    return this.formBuilder.group({
      roomId: ['', Validators.required],
      bookedFrom: [this.booking?this.booking.bookedFrom:'', Validators.required],
      leaveAt: [this.booking?this.booking.leaveAt:'', Validators.required],
      comments: [this.booking?this.booking.comments:'', Validators.required],
      id: [this.booking.id],
      bookedBy:[this.booking.guestId],
      paidAmount:[this.booking?this.booking.paidAmount:'',Validators.required]
    })
  }

  getSettings() {
    return this.bookingService.getSettings().pipe(
      tap(res => {
        this.setting = res;
      })
    )
  }

  getRoomList() {
    return this.bookingService.getAllroom().pipe(
      tap(res => {
        this.roomList = res;
    }));
  }

  onRoomChange(event) {
    let room = event.value;
    console.log(room);
    this.calculateRent(room)
  }

  onSubmit() {
    if (!this.bookingForm.valid) {
      return;
    }

    const result = Object.assign({}, this.bookingForm.value);
    result.roomId = result.roomId.id;
    console.log(result);

    this.bookingService.updateBooking(result, this.existingRoomId).subscribe(res => {
      console.log(res);
      this.close(res);
    })
  }
}
