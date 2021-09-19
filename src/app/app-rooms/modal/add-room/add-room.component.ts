import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoomModel } from '../../models/room.model';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  roomForm: FormGroup;
  room: RoomModel;
  headerTitle = "Add room"
  constructor (
    @Inject(MAT_DIALOG_DATA) data,
    private dialogRef: MatDialogRef<AddRoomComponent>,
    private formBuilder: FormBuilder,
    private roomService:RoomService) {
      this.room = data;
     }

  ngOnInit(): void {
    this.headerTitle = this.room ? "Edit room" : "Add room";
    this.roomForm = this.createForm()
    console.log(this.room)
  }

  createForm() {
    return this.formBuilder.group({
      roomNumber: [this.room?this.room.roomNumber:'', Validators.required],
      capacity: [this.room ? this.room.capacity : 1, Validators.compose([Validators.required,Validators.min(1)])],
      rent:[this.room?this.room.rent:'',Validators.compose([Validators.required,Validators.min(1)])]
    })
  }

  close(result:any=null) {
    this.dialogRef.close(result);
  }

  onSubmit() {
    if (!this.roomForm.valid) {
      return;
    }

    const result = Object.assign({}, this.roomForm.value);

    console.log(result);
    if (this.room) {
      this.roomService.editRoom(this.room.id, result).subscribe(res => {
        console.log(res);
        this.close();
      })
    } else {
      this.roomService.createRoom(result).subscribe(res => {
        console.log(res);
        this.close(res);
      })
    }
    
  }
}
