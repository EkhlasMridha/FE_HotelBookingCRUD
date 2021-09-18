import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { RoomModel } from 'src/app/app-rooms/models/room.model';
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
  constructor(private bookingService:BookingService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.roomList = this.getRooms();
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
        this.guestList.push(res);
      }
    })
  }
}
