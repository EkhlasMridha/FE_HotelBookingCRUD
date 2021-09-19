import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BookingsModel } from 'src/app/app-dashboard/models/bookings.model';
import { AddRoomComponent } from '../../modal/add-room/add-room.component';
import { RoomModel } from '../../models/room.model';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss']
})
export class RoomlistComponent implements OnInit {
  dataSource: MatTableDataSource<RoomModel>;
  data: RoomModel[];
  displayedColumns:string[] = ["roomNumber","capacity","rent","onGoingBooking","closedBooking","edit","delete"]
  constructor(private roomService:RoomService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getRoomDate()
  }

  getRoomDate() {
    this.roomService.getAllroom().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.data = res;
    })
  }

  deleteRoom(room: RoomModel) {
    console.log(room);
    this.roomService.deleteRoom(room.id).subscribe(res => {
      console.log("Deleted");
      let index = this.data.indexOf(room);
      this.data = this.data.splice(index, 1);
      this.dataSource.data = this.data;
    })
  }

  editRoom(room:RoomModel) {
    console.log(room);
    this.dialog.open(AddRoomComponent, {
      data: room,
      panelClass:"nopadding-modal"
    })
  }
}
