import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  roomForm: FormGroup;
  constructor (
    private dialogRef: MatDialogRef<AddRoomComponent>,
    private formBuilder: FormBuilder) {
    this.roomForm = this.createForm()
     }

  ngOnInit(): void {
  }

  createForm() {
    return this.formBuilder.group({
      roomNumber: ['', Validators.required],
      capacity: [1, Validators.compose([Validators.required,Validators.min(1)])],
      rent:['',Validators.compose([Validators.required,Validators.min(1)])]
    })
  }

  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (!this.roomForm.valid) {
      return;
    }

    const result = Object.assign({}, this.roomForm.value);

    console.log(result);
  }
}
