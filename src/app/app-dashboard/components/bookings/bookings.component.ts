import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EditbookingComponent } from '../../modal/editbooking/editbooking.component';
import { BookingsModel } from '../../models/bookings.model';
import { BookingdataService } from '../../services/bookingdata.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  dataSource: MatTableDataSource<BookingsModel>;
  displayedColumns:string[]=["guestName","roomNumber","bookFrom","leaveAt","paidAmount","comments","edit","delete"]
  constructor(private bookingDataService:BookingdataService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings() {
    this.bookingDataService.getBookings().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    })
  }

  editBooking(booking: BookingsModel) {
    console.log(booking);
    this.dialog.open(EditbookingComponent, {
      data: booking,
      panelClass:"nopadding-modal"
    })
  }

  deleteBooking(booking: BookingsModel) {
    console.log(booking);
    this.bookingDataService.deleteBooking(booking.id).subscribe(res => {
      let data = this.dataSource.data;
      let index = data.indexOf(booking);
      data.splice(index, 1);
      this.dataSource.data = data;
    })
  }
}
