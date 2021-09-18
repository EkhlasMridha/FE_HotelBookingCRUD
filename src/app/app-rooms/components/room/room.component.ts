import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddRoomComponent } from '../../modal/add-room/add-room.component';
import { RoomModel } from '../../models/room.model';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  constructor(private dialog:MatDialog, private roomService:RoomService) { }

  ngOnInit(): void {
  }

  addRoomModal() {
    this.dialog.open(AddRoomComponent, {
      minWidth: "500px",
      panelClass: "nopadding-modal"
    });
  }
}
