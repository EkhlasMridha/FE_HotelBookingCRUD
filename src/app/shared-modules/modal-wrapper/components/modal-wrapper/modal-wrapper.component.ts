import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.scss']
})
export class ModalWrapperComponent implements OnInit {
  @Input() background: string = "primary-background";
  constructor() { }

  ngOnInit(): void {
  }

}
