import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-addguest',
  templateUrl: './addguest.component.html',
  styleUrls: ['./addguest.component.scss']
})
export class AddguestComponent implements OnInit {
  guestForm: FormGroup;
  constructor (private dialogRef: MatDialogRef<AddguestComponent>,
    private formBuilder: FormBuilder,
    private bookingService:BookingService) {
    this.guestForm = this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      contactNumber:['',Validators.maxLength(14)]
    })
  }

  close(data:any=null) {
    this.dialogRef.close(data);
  }

  onSubmit() {
    if (!this.guestForm.valid) {
      return;
    }

    const result = Object.assign({}, this.guestForm.value);

    console.log(result);

    this.bookingService.addGuest(result).subscribe(res => {
      console.log(res);
      this.close(res);
    })
  }
}
